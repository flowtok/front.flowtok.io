import { useTranslation } from 'react-i18next';

import { GradientButton } from 'components/atoms/GradientButton';
import { HomeInteractive } from 'components/molecules/HomeInteractive';

import styles from './styles.module.scss';

export default () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles['top-block']}>
        <h1 className={styles.title}>{t('home.title')}</h1>
        <p className={styles.description}>{t('home.description')}</p>
        <GradientButton>{t('home.signin-button-text')}</GradientButton>
      </div>
      <HomeInteractive />
      <div className={styles['bottom-block']}>
        <div className={styles['stat']}>
          <h3 className={styles['value']}>563 195</h3>
          <p className={styles['label']}>{t('home.stats.users')}</p>
        </div>
        <div className={styles['stat']}>
          <h3 className={styles['value']}>28 159 789 ₽</h3>
          <p className={styles['label']}>{t('home.stats.summary')}</p>
        </div>
        <div className={styles['stat']}>
          <h3 className={styles['value']}>1 578 ₽</h3>
          <p className={styles['label']}>{t('home.stats.median')}</p>
        </div>
      </div>
    </>
  );
};
