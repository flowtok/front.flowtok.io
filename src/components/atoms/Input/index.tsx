import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type InputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'ref'
>;

export const Input = ({ className, ...rest }: InputProps) => {
  return (
    <div className={styles['input-wrapper']}>
      <input className={classNames(styles['input'], className)} {...rest} />
      <div className={styles['input-style']} />
      <div className={styles['input-active-style']} />
    </div>
  );
};
