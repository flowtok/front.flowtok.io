import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type GradientButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'ref'
>;

export const GradientButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<GradientButtonProps>
>(({ children, className, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      {...rest}
      className={classNames(styles['gradient-button'], className)}
    >
      {children}
    </button>
  );
});
