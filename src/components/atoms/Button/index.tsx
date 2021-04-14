import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type ButtonUnionType = 'gradient' | 'custom';

export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {
  // @defaul = 'gradient'.
  preset?: ButtonUnionType;
}

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(({ children, className, preset = 'gradient', ...rest }, ref) => {
  const finalClassName = classNames(
    styles['button'],
    {
      [styles[`button_${preset}`]]: preset !== 'custom',
    },
    className
  );

  return (
    <button ref={ref} {...rest} className={finalClassName}>
      {children}
    </button>
  );
});
