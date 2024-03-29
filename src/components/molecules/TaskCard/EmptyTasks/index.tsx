import { useTranslation } from 'react-i18next';
import defaultImage from 'assets/common/icons/default.svg';
import styles from './styles.module.scss';

export const EmptyTasks = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['default-page']}>
      <img src={defaultImage} />
      <div>
        <h2>{t('pages.tasks-default.title')}</h2>
        <p>{t('pages.tasks-default.description')}</p>
      </div>
    </div>
  );
};
