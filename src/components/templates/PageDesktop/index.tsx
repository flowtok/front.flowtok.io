import React, { FC, useRef } from 'react';
import { Navbar } from '../../organisms/Navbar';
import styles from './styles.module.scss';

export const PageTemplateDesktop: FC = ({ children }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles['wrapper-style']}>
      <Navbar ref={navbarRef} />
      <div className={styles['page-style']}>{children}</div>
    </div>
  );
};
