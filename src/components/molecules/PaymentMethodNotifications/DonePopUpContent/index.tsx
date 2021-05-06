import styles from '../styles.module.scss';
import Success from 'assets/common/icons/success.svg';
import commonStyles from '../../SettingsCards/styles.module.scss';
import { useTranslation } from 'react-i18next';

export const DonePopUpContent = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['notification-method-popup']}>
      <img src={Success} />
      <h3 className={commonStyles['primary-title']}>
        {t('payment-method-notifications.done')}
      </h3>
      <p className={commonStyles['secondary-title-small']}>
        {t('payment-method-notifications.done-description')}
      </p>
    </div>
  );
};
