import { useTranslation } from 'react-i18next';
import { Paper } from '../../../atoms/Paper';
import commonStyles from '../styles.module.scss';
import { Divider } from '../../../atoms/Divider';
import styles from './styles.module.scss';
import { CustomLink } from '../../../atoms/CustomLink';

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
            <CustomLink
              iSTargetBlank={true}
              url="flowtokcom@gmail.com"
              value="flowtokcom@gmail.com"
            />
          </div>
          <Divider />
          <div className={styles['support-method']}>
            <p>
              {t('pages.settings.cards.withdrawal.support-methods.telegram')}
            </p>
            <CustomLink
              iSTargetBlank={true}
              url="@flowtokcom"
              value="@flowtokcom"
            />
          </div>
        </div>
      </div>
    </Paper>
  );
};
