import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const Navbar = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['row']}>
        <Link className={styles['row-item']}>
          <img src="" alt="" />
        </Link>
      </div>
    </div>
  );
};
