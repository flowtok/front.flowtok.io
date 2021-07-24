import React, { FC } from 'react';
import styles from './styles.module.scss';

type TitlePropsT = {
  type?: 'primary' | 'secondary' | 'secondary-small';
} & React.HTMLProps<HTMLParagraphElement>;

export const Title: FC<TitlePropsT> = ({
  type = 'primary',
  children,
  className,
  ...rest
}) => {
  return (
    <p className={`${styles.title} ${styles[type]} ${className}`} {...rest}>
      {children}
    </p>
  );
};
