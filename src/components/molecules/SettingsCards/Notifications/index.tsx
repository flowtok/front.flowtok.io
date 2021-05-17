import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import { Switch } from 'components/atoms/Switch';
import commonStyles from '../styles.module.scss';
import styles from './styles.module.scss';

export const NotificationsCard = () => {
  const { t } = useTranslation();

  return (
    <Paper>
      <h3 className={commonStyles['primary-title']}>
        {t('pages.settings.cards.notifications.title')}
      </h3>
      <div className={styles['action-block']}>
        <div>
          <p className={commonStyles['secondary-title-small']}>
            {t('pages.settings.cards.notifications.enable-notifications')}
          </p>
          <p className={commonStyles['description']}>
            {t('pages.settings.cards.notifications.helper-text')}
          </p>
        </div>
        <div className={styles['switch']}>
          <Switch />
        </div>
      </div>
    </Paper>
  );
};
