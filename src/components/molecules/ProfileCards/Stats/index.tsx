import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { Paper } from 'components/atoms/Paper';
import { Divider } from 'components/atoms/Divider';
import commonStyles from '../styles.module.scss';
import styles from './styles.module.scss';

export interface StatsCardProps {
  viewsMedian: string;
  payOffPerVideo: string;
  rating: number;
}

export const StatsCard = ({
  viewsMedian,
  payOffPerVideo,
  rating,
}: StatsCardProps) => {
  const { t } = useTranslation();

  return (
    <Paper className={styles.stats}>
      <h3 className={commonStyles['title-primary']}>
        {t('pages.profile.stats.primary')}
      </h3>
      <div className={styles.data}>
        <div className={styles.block}>
          <p className={commonStyles['title-secondary']}>
            {t('pages.profile.stats.views-median')}
          </p>
          <p className={commonStyles['value-secondary']}>{viewsMedian}</p>
        </div>
        <Divider direction="vertical" />
        <div className={styles.block}>
          <p className={commonStyles['title-secondary']}>
            {t('pages.profile.stats.pay-off-per-video')}
          </p>
          <p className={commonStyles['value-secondary']}>{payOffPerVideo}</p>
        </div>
        <Divider direction="vertical" />
        <div className={styles.block}>
          <p className={commonStyles['title-secondary']}>
            {t('pages.profile.stats.rating')}
          </p>
          <p
            className={classNames(
              commonStyles['value-secondary'],
              commonStyles['rating-positive']
            )}
          >
            {rating}
          </p>
        </div>
      </div>
    </Paper>
  );
};
