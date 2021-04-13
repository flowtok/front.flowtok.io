import { useTranslation } from 'react-i18next';

import { Button } from 'components/atoms/Button';
import { HomeInteractive } from 'components/molecules/HomeInteractive';
import { PageTemplate } from 'components/templates/Page';

import styles from './styles.module.scss';

export default () => {
  const { t } = useTranslation();

  return (
    <PageTemplate>
      <div>
        <div className={styles['top-block']}>
          <h1 className={styles.title}>{t('pages.home.title')}</h1>
          <p className={styles.description}>{t('pages.home.description')}</p>
          <Button>{t('pages.home.signin-button-text')}</Button>
        </div>
        <HomeInteractive />
        <div className={styles['bottom-block']}>
          <div className={styles['stat']}>
            <h3 className={styles['value']}>563 195</h3>
            <p className={styles['label']}>{t('pages.home.stats.users')}</p>
          </div>
          <div className={styles['stat']}>
            <h3 className={styles['value']}>28 159 789 ₽</h3>
            <p className={styles['label']}>{t('pages.home.stats.summary')}</p>
          </div>
          <div className={styles['stat']}>
            <h3 className={styles['value']}>1 578 ₽</h3>
            <p className={styles['label']}>{t('pages.home.stats.median')}</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
