import classNames from 'classnames';

import styles from './styles.module.scss';

export type DividerDirectionUnionType = 'vertical' | 'horizontal';

export interface DividerProps {
  // @default = 'vertical'
  direction?: DividerDirectionUnionType;
}

export const Divider = ({ direction = 'horizontal' }: DividerProps) => (
  <div
    className={classNames(styles['divider'], styles[`divider_${direction}`])}
  />
);
