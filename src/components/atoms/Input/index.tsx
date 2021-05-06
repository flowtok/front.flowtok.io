import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { FieldError, UseFormRegister } from 'react-hook-form';

export type InputProps = {
  error?: FieldError;
  visited?: boolean;
  placeholder?: string;
  mask?: string | Array<string | RegExp>;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef<
  HTMLInputElement,
  InputProps & ReturnType<UseFormRegister<any>>
>(({ error, visited, placeholder, mask = '', ...rest }, ref) => {
  const finalClassName = classNames(styles['input'], {
    [styles[`input-error`]]: !!error,
    [styles[`input-visited`]]: visited,
  });

  return (
    <div>
      <InputMask mask={mask} {...rest}>
        {() => <input {...rest} className={finalClassName} />}
      </InputMask>
      {error && <p className={styles['error']}>{error.message}</p>}
    </div>
  );
});
