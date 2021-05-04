import { useTranslation } from 'react-i18next';
import { Paper } from '../../../atoms/Paper';
import commonStyles from '../styles.module.scss';
import { Divider } from '../../../atoms/Divider';
import styles from './styles.module.scss';
import { Link } from '../../../atoms/Link';

export const SupportCard = () => {
  const { t } = useTranslation();

  return (
    <Paper>
      <h3 className={commonStyles['primary-title']}>
        {t('pages.settings.cards.withdrawal.support-title')}
      </h3>
      <div className={styles['saved-block']}>
        <p className={commonStyles['description']}>
          {t('pages.settings.cards.withdrawal.support-helper-text')}
        </p>
        <div className={styles['support-methods']}>
          <div className={styles['support-method']}>
            <p>{t('pages.settings.cards.withdrawal.support-methods.post')}</p>
            <Link url="@flowtokcom" value="@flowtokcom" />
          </div>
          <Divider />
          <div className={styles['support-method']}>
            <p>
              {t('pages.settings.cards.withdrawal.support-methods.telegram')}
            </p>
            <Link url="flowtokcom@gmail.com" value="flowtokcom@gmail.com" />
          </div>
        </div>
      </div>
    </Paper>
  );
};
