import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import { Button } from 'components/atoms/Button';
import { Divider } from 'components/atoms/Divider';
import commonStyles from '../styles.module.scss';
import CopyIcon from 'assets/common/icons/copy.svg';
import styles from './styles.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from '../../../../api/cache';
import { useState } from 'react';
import { formatNumber } from '../../../../utils/FormatHelper';
import { useCopyToClipboard } from '../../../../hooks/useCopyToClipboard';

export interface ReferalCardProps {
  refUrl: string;
  refsCount: number;
  totalEarningsFromRefs: number;
}

export const ReferalCard = ({
  refUrl,
  refsCount,
  totalEarningsFromRefs,
}: ReferalCardProps) => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const user = useReactiveVar(currentUserVar);
  const [copy, isCopied] = useCopyToClipboard(1000);

  let copyBtn = (
    <Button
      onClick={() => copy(user ? user.refLink : '')}
      radius={isDesktop ? null : 42}
      className={styles['copy-button']}
    >
      {isDesktop ? t('button-values.copy') : <img src={CopyIcon} alt="" />}
    </Button>
  );

  if (isCopied) {
    copyBtn = (
      <Button
        preset="success_gray"
        radius={isDesktop ? null : 42}
        className={styles['copy-button']}
        disabled={true}
      >
        {isDesktop ? t('button-values.copied') : <img src={CopyIcon} alt="" />}
      </Button>
    );
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
          {copyBtn}
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
              {formatNumber(Number(totalEarningsFromRefs))}
            </p>
          </div>
        </div>
      </div>
    </Paper>
  );
};
