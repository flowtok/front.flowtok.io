import { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type ButtonPresetUnionType =
  | 'gradient'
  | 'border-gradient'
  | 'custom'
  | 'black'
  | 'white'
  | 'payment-method'
  | 'success'
  | 'light';

export type ButtonSizeUnionType = 's' | 'ssm' | 'sm' | 'm';

export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {
  // @default = 'gradient'.
  preset?: ButtonPresetUnionType;
  // @default = 'm'
  size?: ButtonSizeUnionType;
  // @default = 42
  radius?: number;
}

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(
  (
    {
      children,
      className,
      radius = 42,
      preset = 'gradient',
      size = 'm',
      style = {},
      ...rest
    },
    ref
  ) => {
    const finalClassName = classNames(
      styles['button'],
      styles[`button_size-${size}`],
      styles[`button_${preset}`],
      className
    );

    const finalStyle = {
      ...style,
      borderRadius: style.borderRadius || radius,
      '--gradient-border-radius': `${radius - 2}px`,
    };

    return (
      <button
        type="button"
        ref={ref}
        {...rest}
        className={finalClassName}
        style={finalStyle}
      >
        {children}
      </button>
    );
  }
);
