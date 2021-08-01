import Success from 'assets/common/icons/success.svg';
import styles from '../styles.module.scss';
import commonStyles from '../../SettingsCards/styles.module.scss';

export interface DonePopUpContentProps {
  title?: string;
  description?: string;
}

export const DonePopUpContent = ({
  title,
  description,
}: DonePopUpContentProps) => {
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
