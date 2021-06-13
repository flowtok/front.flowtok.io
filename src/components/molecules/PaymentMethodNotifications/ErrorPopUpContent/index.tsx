import styles from '../styles.module.scss';
import ErrorIcon from 'assets/common/icons/error.svg';
import commonStyles from '../../SettingsCards/styles.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../atoms/Button';

interface ErrorPopUpProps {
  tryAction?: () => void;
}

export const ErrorPopUpContent = ({ tryAction }: ErrorPopUpProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles['notification-method-popup']}>
      <img src={ErrorIcon} />
      <h3 className={commonStyles['primary-title']}>
        {t('payment-method-notifications.error')}
      </h3>
      <p className={commonStyles['secondary-title-small']}>
        {t('payment-method-notifications.error-description')}
      </p>
      <Button preset="success" onClick={tryAction}>
        {t('button-values.try')}
      </Button>
    </div>
  );
};
