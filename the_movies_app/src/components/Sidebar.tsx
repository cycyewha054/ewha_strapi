import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react';
import { useHistory, useLocation } from 'react-router';

export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * @example
 * <Sidebar>
 *   <Sidebar.Title>Admin</Sidebar.Title>
 *   <Sidebar.Menu>
 *     <Sidebar.Menu.Item text="Users" to="/admin/users" />
 *   </Sidebar.Menu>
 * </Sidebar>
 */
const Sidebar: FC<SidebarProps> & {
  Title: FC<SidebarTitleProps>;
  Menu: FC<SidebarMenuProps> & { Item: FC<SidebarMenuItemProps> };
} = ({ children, className = '', ...props }) => {
  return (
    <div className={`sidebar ${className}`} {...props}>
      {children}
    </div>
  );
};

export interface SidebarTitleProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarTitle: FC<SidebarTitleProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`sidebar-title ${className}`} {...props}>
      {children}
    </div>
  );
};

export interface SidebarMenuProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarMenu: FC<SidebarMenuProps> & { Item: FC<SidebarMenuItemProps> } =
  ({ children, className = '', ...props }) => {
    return (
      <div className={`sidebar-menu ${className}`} {...props}>
        {children}
      </div>
    );
  };

export interface SidebarMenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  to?: string;
  selected?: boolean;
}

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  children,
  className = '',
  text,
  to,
  selected = false,
  onClick,
  ...props
}) => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  let _selected = selected;
  if (to && pathname.startsWith(to)) {
    _selected = true;
  }

  return (
    <button
      className={`sidebar-menu-item ${
        _selected
          ? 'bg-gray-100 text-gray-900'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      } ${className}`}
      onClick={to ? () => push(to) : onClick}
      {...props}
    >
      {text ?? children}
    </button>
  );
};

Sidebar.Title = SidebarTitle;
Sidebar.Menu = SidebarMenu;
SidebarMenu.Item = SidebarMenuItem;

export { Sidebar };
