import { forwardRef, PropsWithChildren } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

export type ButtonPresetUnionType = 'gradient' | 'border-gradient' | 'custom';

export type ButtonSizeUnionType = 's' | 'm';

export interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'ref'
  > {
  error?: string;
  visited?: boolean;
}

export const Input = forwardRef<
  HTMLInputElement,
  PropsWithChildren<InputProps>
>(({ error, visited, ...rest }, ref) => {
  const finalClassName = classNames(styles['input'], {
    [styles[`input-error`]]: !!error,
    [styles[`input-visited`]]: visited,
  });

  return (
    <div>
      <input ref={ref} className={finalClassName} {...rest} />
      {error && <p className={styles['error']}>{error}</p>}
    </div>
  );
});
