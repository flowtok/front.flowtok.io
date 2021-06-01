import React from 'react';
import styles from './styles.module.scss';
import {
  InProcessCard,
  ReferalCard,
  StatsCard,
  TotalEarningsCard,
  WalletCard,
} from '../../../components/molecules/ProfileCards';
import { HistoryItem } from '../../../components/molecules/ProfileCards/Wallet/HistoryItem';
import { Divider } from '../../../components/atoms/Divider';
import { Paper } from '../../../components/atoms/Paper';
import { useTranslation } from 'react-i18next';
import commonStyles from '../../../components/molecules/SettingsCards/styles.module.scss';
import { PageTemplateDesktop } from '../../../components/templates/PageDesktop';
import { User } from '../../../models/models';

export default ({
  balance,
  avg_views,
  ref_count,
  ref_earnings,
  total_earnings,
  good_rate,
  ref_link,
  price,
  held_money,
  history,
}: User) => {
  const { t } = useTranslation();

  return (
    <PageTemplateDesktop>
      <div className={styles['wrapper']}>
        <div className={styles['top-papers']}>
          <WalletCard balance={balance} />
          <div className={styles['middle-group']}>
            <InProcessCard inProcessAmount={held_money} />
            <TotalEarningsCard totalEarnings={total_earnings} />
          </div>
          <Paper>
            <h3 className={commonStyles['primary-title']}>
              {t('pages.profile.wallet.popup-title')}
            </h3>
            <div className={styles['history-window']}>
              {history?.map(
                (h, key) =>
                  h && (
                    <>
                      <HistoryItem item={h} key={'history-item-' + key} />
                      {history.length !== 1 && <Divider />}
                    </>
                  )
              )}
            </div>
          </Paper>
        </div>
        <div className={styles['bottom-papers']}>
          <StatsCard
            viewsMedian={avg_views}
            payOffPerVideo={price}
            rating={good_rate}
          />
          <ReferalCard
            refUrl={ref_link}
            refsCount={ref_count}
            totalEarningsFromRefs={ref_earnings}
          />
        </div>
      </div>
    </PageTemplateDesktop>
  );
};
