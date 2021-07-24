import React, { forwardRef, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {
  value: number;
}

export const NotifyCircle = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(({ children, className, value, style = {}, ...rest }, ref) => {
  return (
    <span ref={ref} {...rest} className={styles['notification']} style={style}>
      <span>{value}</span>
      {children}
    </span>
  );
});
