import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type BlackButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'ref'
>;

export const BlackButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<BlackButtonProps>
>(({ children, className, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      {...rest}
      className={classNames(styles['black-button'], className)}
    >
      {children}
    </button>
  );
});
