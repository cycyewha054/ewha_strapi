import React, {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * @example
 * <Dropdown>
 *   <Button text="Button" />
 *   <Dropdown.View>Dropdown</Dropdown.View>
 * </Dropdown>
 */
const Dropdown: FC<DropdownProps> & { View: FC<DropdownViewProps> } = ({
  children,
  className = '',
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`dropdown ${className}`} {...props}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        if (child.type === DropdownView)
          return cloneElement(child, { open, onClose: () => setOpen(false) });
        return cloneElement(child, { onClick: () => setOpen(true) });
      })}
    </div>
  );
};

export interface DropdownViewProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
}

const DropdownView: FC<DropdownViewProps> = ({
  children,
  className = '',
  open,
  onClose = () => {},
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.addEventListener('click', onClose);
    return () => document.removeEventListener('click', onClose);
  }, [open, onClose]);

  return (
    <div
      ref={ref}
      className={`dropdown-view ${
        open
          ? 'pointer-events-auto ease-out duration-100 opacity-100 scale-100'
          : 'pointer-events-none ease-in duration-75 opacity-0 scale-95'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Dropdown.View = DropdownView;

export { Dropdown };
