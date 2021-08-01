import EmptyHistoryIcon from 'assets/common/icons/empty-history.svg';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

export const EmptyHistory = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['empty-history-wrapper']}>
      <img src={EmptyHistoryIcon} alt="" />
      <span>
        <p className={styles['empty-history-title']}>
          {t('pages.profile.wallet.empty-history')}
        </p>
      </span>
    </div>
  );
};
