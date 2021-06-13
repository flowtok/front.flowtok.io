import styles from '../styles.module.scss';
import Success from 'assets/common/icons/success.svg';
import commonStyles from '../../SettingsCards/styles.module.scss';
import { useTranslation } from 'react-i18next';

export interface DonePopUpContentProps {
  title?: string;
  description?: string;
}

export const DonePopUpContent = ({
  title,
  description,
}: DonePopUpContentProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles['notification-method-popup']}>
      <img src={Success} />
      <h3 className={commonStyles['primary-title']}>{title ?? ''}</h3>
      <p className={commonStyles['secondary-title-small']}>
        {description ?? ''}
      </p>
    </div>
  );
};
