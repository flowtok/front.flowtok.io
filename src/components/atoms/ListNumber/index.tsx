import React, { FC, HTMLProps } from 'react';
import styles from './styles.module.scss';

type ListNumberPropsT = {
  value: string;
};

export const ListNumber: FC<ListNumberPropsT & HTMLProps<HTMLInputElement>> = ({
  value,
}) => {
  return <div className={styles['list-item']}>{value}</div>;
};
