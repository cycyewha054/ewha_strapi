import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { range } from '../utils';

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {}

const Pagination: FC<PaginationProps> & {
  Label: FC<PaginationLabelProps>;
  Nav: FC<PaginationNavProps> & { Button: FC<PaginationNavButtonProps> };
} = ({ children, className, ...props }) => {
  return (
    <div className={`pagination ${className}`} {...props}>
      {children}
    </div>
  );
};

export interface PaginationLabelProps
  extends HTMLAttributes<HTMLParagraphElement> {
  count: number;
  total: number;
}

const PaginationLabel: FC<PaginationLabelProps> = ({
  className,
  count,
  total,
  ...props
}) => {
  return (
    <p className={`pagination-label ${className}`} {...props}>
      Count:
      <span className="font-medium"> {count} </span>/ Total:
      <span className="font-medium"> {total} </span>
    </p>
  );
};

export interface PaginationNavProps extends HTMLAttributes<HTMLDivElement> {
  basePath: string;
  total: number;
  maxPageSetLength?: number;
}

const PaginationNav: FC<PaginationNavProps> & {
  Button: FC<PaginationNavButtonProps>;
} = ({ className, basePath, total, maxPageSetLength = 7, ...props }) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const page = Number(params.get('page') ?? '1');
  const limit = Number(params.get('limit') ?? '10');
  const pageCount = Math.ceil(total / limit);
  const pageSet = Math.ceil(page / maxPageSetLength);
  const pageSetLength = Math.min(
    pageCount - (pageSet - 1) * maxPageSetLength,
    maxPageSetLength
  );
  const prevPage = (pageSet - 2) * pageSetLength + 1;
  const nextPage = pageSet * maxPageSetLength + 1;

  return (
    <nav className={`pagination-nav ${className}`} {...props}>
      <PaginationNavButton
        className="rounded-l-md"
        to={`${basePath}?page=${prevPage}&limit=${limit}`}
        disabled={prevPage < 1}
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
        </svg>
      </PaginationNavButton>
      {range(pageSetLength, (pageSet - 1) * maxPageSetLength + 1).map((i) => (
        <PaginationNavButton
          key={i}
          to={`${basePath}?page=${i}&limit=${limit}`}
          selected={i === page}
        >
          {i}
        </PaginationNavButton>
      ))}
      <PaginationNavButton
        className="rounded-r-md"
        to={`${basePath}?page=${nextPage}&limit=${limit}`}
        disabled={nextPage > pageCount}
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
        </svg>
      </PaginationNavButton>
    </nav>
  );
};

export interface PaginationNavButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  to?: string;
  selected?: boolean;
}

const PaginationNavButton: FC<PaginationNavButtonProps> = ({
  children,
  className,
  text,
  to,
  selected,
  onClick,
  ...props
}) => {
  const { push } = useHistory();

  return (
    <button
      className={`pagination-nav-button ${
        selected
          ? 'z-10 border-indigo-500 bg-indigo-50 text-indigo-600'
          : 'z-0 border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
      } ${className}`}
      onClick={to ? () => push(to) : onClick}
      {...props}
    >
      {text ?? children}
    </button>
  );
};

Pagination.Label = PaginationLabel;
Pagination.Nav = PaginationNav;
PaginationNav.Button = PaginationNavButton;

export { Pagination };
