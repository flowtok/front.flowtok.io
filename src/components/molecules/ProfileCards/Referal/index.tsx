import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import { Button } from 'components/atoms/Button';
import { Divider } from 'components/atoms/Divider';
import commonStyles from '../styles.module.scss';
import CopyIcon from 'assets/common/icons/copy.svg';
import styles from './styles.module.scss';
import { useMediaQuery } from 'react-responsive';

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
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1440px)' });
  let desktopStyle = {};
  if (isDesktop) {
    desktopStyle = { fontSize: 11, lineHeight: 'auto' };
  }
  if (isDesktopLarge) {
    desktopStyle = { fontSize: 17, lineHeight: 'unset' };
  }
  return (
    <Paper className={styles.ref}>
      <div>
        <h3 className={commonStyles['title-primary']}>
          {t('pages.profile.ref.primary')}
        </h3>
        <div className={styles['copy-block']}>
          <div className={styles['field']}>
            <p>{refUrl}</p>
          </div>
          <Button
            radius={isDesktop ? 11 : 42}
            style={desktopStyle}
            className={styles['copy-button']}
          >
            {isDesktop ? (
              t('button-values.copy')
            ) : (
              <img src={CopyIcon} alt="" />
            )}
          </Button>
        </div>
      </div>
      {isDesktop ? <Divider direction="vertical" /> : <Divider />}
      <div>
        <div className={styles['stats-block']}>
          <div>
            <p className={commonStyles['title-secondary']}>
              {t('pages.profile.ref.stats.referals')}
            </p>
            <p className={commonStyles['value-secondary']}>{refsCount}</p>
          </div>
          {isDesktop ? <Divider /> : <Divider direction="vertical" />}
          <div>
            <p className={commonStyles['title-secondary']}>
              {t('pages.profile.ref.stats.total-earnings')}
            </p>
            <p className={commonStyles['value-secondary']}>
              {totalEarningsFromRefs}
            </p>
          </div>
        </div>
      </div>
    </Paper>
  );
};
