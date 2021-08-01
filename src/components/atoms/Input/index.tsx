import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useCallback,
} from 'react';
import InputMask from 'react-input-mask';
import classNames from 'classnames';
import { FieldError, UseFormRegister } from 'react-hook-form';
import styles from './styles.module.scss';

export type InputProps = {
  error?: FieldError;
  visited?: boolean;
  mask?: string | Array<string | RegExp>;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef<
  HTMLInputElement,
  InputProps & ReturnType<UseFormRegister<any>>
>(({ error, visited, mask = '', ...rest }, ref) => {
  const finalClassName = useCallback(
    () =>
      classNames(styles['input'], {
        [styles[`input-error`]]: !!error,
        [styles[`input-visited`]]: visited && !error,
      }),
    [error, visited]
  );

  return (
    <div>
      <InputMask mask={mask} {...rest}>
        {() => <input {...rest} ref={ref} className={finalClassName()} />}
      </InputMask>
      {error && <p className={styles['error']}>{error.message}</p>}
    </div>
  );
});
