import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { FieldError, UseFormRegister } from 'react-hook-form';

export type InputProps = {
  error?: FieldError;
  visited?: boolean;
  placeholder?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef<
  HTMLInputElement,
  InputProps & ReturnType<UseFormRegister<any>>
>(({ error, visited, placeholder, ...rest }, ref) => {
  const finalClassName = classNames(styles['input'], {
    [styles[`input-error`]]: !!error,
    [styles[`input-visited`]]: visited,
  });

  return (
    <div>
      <input
        className={finalClassName}
        {...rest}
        ref={ref}
        placeholder={placeholder}
      />
      {error && <p className={styles['error']}>{error.message}</p>}
    </div>
  );
});
