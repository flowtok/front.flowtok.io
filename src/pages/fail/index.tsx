import React from 'react';
import { useUrlSearchParams } from '../../hooks/useUrlSearchParams';
import failImage from '../../assets/fail/fail.svg';
import styles from './styles.module.scss';

export default () => {
  const params = useUrlSearchParams();
  const title = params.get('title');
  const message = params.get('message');
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <img src={failImage} alt="fail" className={styles.img} />
      <div className={styles.message}>{message}</div>
    </div>
  );
};
