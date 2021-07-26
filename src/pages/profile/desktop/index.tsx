import React from 'react';
import styles from './styles.module.scss';
import {
  InProcessCard,
  ReferralCard,
  StatsCard,
  TotalEarningsCard,
  WalletCard,
} from '../../../components/molecules/ProfileCards';
import { HistoryItemComponent } from '../../../components/molecules/ProfileCards/Wallet/HistoryItem';
import { Divider } from '../../../components/atoms/Divider';
import { Paper } from '../../../components/atoms/Paper';
import { useTranslation } from 'react-i18next';
import commonStyles from '../../../components/molecules/SettingsCards/styles.module.scss';
import { PageTemplateDesktop } from '../../../components/templates/PageDesktop';
import { GetBloggerProfileDataQuery } from '../../../types/graphql';
import { EmptyHistory } from '../../../components/molecules/ProfileCards/Wallet/EmptyHistory';

export default ({ me }: GetBloggerProfileDataQuery) => {
  const { t } = useTranslation();

  const {
    balance,
    refCount,
    refEarning,
    refLink,
    heldMoney,
    historyPayment = [],
  } = { ...me };

  const renderHistoryList = () => {
    if (!historyPayment?.length) return <EmptyHistory />;
    return historyPayment?.map(
      (h, key) =>
        h && (
          <>
            <HistoryItemComponent item={h} key={'history-item-' + key} />
            {history.length !== 1 && <Divider />}
          </>
        )
    );
  };

  return (
    <PageTemplateDesktop>
      <div className={styles['wrapper']}>
        <div className={styles['top-papers']}>
          <WalletCard balance={balance} />
          <div className={styles['middle-group']}>
            <InProcessCard inProcessAmount={heldMoney} />
            <TotalEarningsCard totalEarnings={10} />
          </div>
          <Paper>
            <h3 className={commonStyles['primary-title']}>
              {t('pages.profile.wallet.popup-title')}
            </h3>
            <div className={styles['history-window']}>
              {renderHistoryList()}
            </div>
          </Paper>
        </div>
        <div className={styles['bottom-papers']}>
          <StatsCard viewsMedian={'3'} payOffPerVideo={'4'} rating={3} />
          <ReferralCard
            refUrl={refLink}
            refsCount={refCount}
            totalEarningsFromRefs={refEarning}
          />
        </div>
      </div>
    </PageTemplateDesktop>
  );
};
