import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type InputStateUnionType = 'correct' | 'wrong' | 'default';

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'ref'
  > {
  state?: InputStateUnionType;
}

export const Input = ({
  className,
  state = 'default',
  ...rest
}: InputProps) => {
  const finalClassName = classNames(
    styles['input'],
    styles[`input-${state}`],
    className
  );

  return <input className={finalClassName} {...rest} />;
};
