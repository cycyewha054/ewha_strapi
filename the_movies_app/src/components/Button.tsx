import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  to?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  text,
  to,
  onClick,
  ...props
}) => {
  const { push } = useHistory();

  return (
    <button
      className={`button ${className}`}
      onClick={to ? () => push(to) : onClick}
      {...props}
    >
      {text ?? children}
    </button>
  );
};
