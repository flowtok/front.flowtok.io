import React, { FC, HTMLProps } from 'react';
import styles from './styles.module.scss';

type ListItemPropsT = {
  value: string;
};

export const ListItem: FC<ListItemPropsT & HTMLProps<HTMLInputElement>> = ({
  value,
}) => {
  return <div className={styles['list-item']}>{value}</div>;
};
