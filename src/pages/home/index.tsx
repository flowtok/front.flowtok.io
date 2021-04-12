import { GradientButton } from 'components/atoms/GradientButton';

import styles from './styles.module.scss';

export default () => {
  return (
    <>
      <div className={styles['top-block']}>
        <h1 className={styles.title}>Зарабатывай с FlowTok</h1>
        <p className={styles.description}>
          Создавай потрясающий контент и получай за него деньги
        </p>
        <GradientButton>Создать аккаунт или войти</GradientButton>
      </div>
      <div className={styles['bottom-block']}>
        <div className={styles['stat']}>
          <h3 className={styles['value']}>563 195</h3>
          <p className={styles['label']}>Пользователей в FlowTok</p>
        </div>
        <div className={styles['stat']}>
          <h3 className={styles['value']}>28 159 789 ₽</h3>
          <p className={styles['label']}>Всего выплачено</p>
        </div>
        <div className={styles['stat']}>
          <h3 className={styles['value']}>1 578 ₽</h3>
          <p className={styles['label']}>Средний доход в день</p>
        </div>
      </div>
    </>
  );
};
