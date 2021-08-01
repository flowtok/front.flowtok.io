import ErrorIcon from 'assets/common/icons/error.svg';
import { useTranslation } from 'react-i18next';
import styles from '../styles.module.scss';
import commonStyles from '../../SettingsCards/styles.module.scss';
import { Button } from '../../../atoms/Button';

interface ErrorPopUpProps {
  tryAction?: () => void;
  title?: string;
  description?: string;
}

export const ErrorPopUpContent = ({
  tryAction,
  title,
  description,
}: ErrorPopUpProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles['notification-method-popup']}>
      <img src={ErrorIcon} />
      <h3 className={commonStyles['primary-title']}>{title ?? ''}</h3>
      <p className={commonStyles['secondary-title-small']}>
        {description ?? ''}
      </p>
      {tryAction && (
        <Button preset="success" onClick={tryAction}>
          {t('button-values.try')}
        </Button>
      )}
    </div>
  );
};
