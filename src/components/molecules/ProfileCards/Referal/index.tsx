import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import { GradientButton } from 'components/atoms/GradientButton';
import { Divider } from 'components/atoms/Divider';
import commonStyles from '../styles.module.scss';
import CopyIcon from 'assets/common/icons/copy.svg';
import styles from './styles.module.scss';

export interface ReferalCardProps {
  refUrl: string;
  refsCount: number;
  totalEarningsFromRefs: string;
}

export const ReferalCard = ({
  refUrl,
  refsCount,
  totalEarningsFromRefs,
}: ReferalCardProps) => {
  const { t } = useTranslation();

  return (
    <Paper className={styles.ref}>
      <h3 className={commonStyles['title-primary']}>
        {t('pages.profile.ref.primary')}
      </h3>
      <div className={styles['copy-block']}>
        <div className={styles['field']}>
          <p>{refUrl}</p>
        </div>
        <GradientButton className={styles['copy-button']}>
          <img src={CopyIcon} />
        </GradientButton>
      </div>
      <Divider />
      <div className={styles['stats-block']}>
        <div>
          <p className={commonStyles['title-secondary']}>
            {t('pages.profile.ref.stats.referals')}
          </p>
          <p className={commonStyles['value.secondary']}>{refsCount}</p>
        </div>
        <Divider direction="vertical" />
        <div>
          <p className={commonStyles['title-secondary']}>
            {t('pages.profile.ref.stats.total-earnings')}
          </p>
          <p className={commonStyles['value.secondary']}>
            {totalEarningsFromRefs}
          </p>
        </div>
      </div>
    </Paper>
  );
};
