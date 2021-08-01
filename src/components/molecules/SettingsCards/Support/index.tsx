import { useTranslation } from 'react-i18next';
import { Paper } from '../../../atoms/Paper';
import commonStyles from '../styles.module.scss';
import { Divider } from '../../../atoms/Divider';
import { CustomLink } from '../../../atoms/CustomLink';
import styles from './styles.module.scss';

export const SupportCard = () => {
  const { t } = useTranslation();

  return (
    <Paper>
      <div className={styles['support-container']}>
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
              <CustomLink target={'_blank'} href="flowtokcom@gmail.com">
                flowtokcom@gmail.com
              </CustomLink>
            </div>
            <Divider />
            <div className={styles['support-method']}>
              <p>
                {t('pages.settings.cards.withdrawal.support-methods.telegram')}
              </p>
              <CustomLink target={'_blank'} href="@flowtokcom">
                @flowtokcom
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};
