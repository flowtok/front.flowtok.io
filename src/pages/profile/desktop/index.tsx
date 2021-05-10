import React from 'react';
import styles from './styles.module.scss';
import {
  InProcessCard,
  ReferalCard,
  StatsCard,
  TotalEarningsCard,
  WalletCard,
} from '../../../components/molecules/ProfileCards';
import {
  BalanceType,
  HistoryItem,
} from '../../../components/molecules/ProfileCards/Wallet/HistoryItem';
import { Divider } from '../../../components/atoms/Divider';
import { Paper } from '../../../components/atoms/Paper';
import { useTranslation } from 'react-i18next';
import commonStyles from '../../../components/molecules/SettingsCards/styles.module.scss';
import { PageTemplateDesktop } from '../../../components/templates/PageDesktop';

const history: HistoryItem[] = [
  { value: '9 112.90', date: '30.08.2021', type: BalanceType.inc },
  { value: '1 112.90', date: '30.08.2020', type: BalanceType.dec },
  { value: '112.90', date: '30.08.2023', type: BalanceType.dec },
  { value: '112.90', date: '30.08.2023', type: BalanceType.inc },
  { value: '1 112.90', date: '30.08.2020', type: BalanceType.dec },
  { value: '112.90', date: '30.08.2023', type: BalanceType.dec },
  { value: '112.90', date: '30.08.2023', type: BalanceType.inc },
];

export default () => {
  const { t } = useTranslation();
  return (
    <PageTemplateDesktop>
      <div className={styles['wrapper']}>
        <div className={styles['top-papers']}>
          <WalletCard balance="15 236.00 ₽" />
          <div className={styles['middle-group']}>
            <InProcessCard inProcessAmount="6 703.50 ₽" />
            <TotalEarningsCard totalEarnings="164 520.30 ₽" />
          </div>
          <Paper>
            <h3 className={commonStyles['primary-title']}>
              {t('pages.profile.wallet.popup-title')}
            </h3>
            <div className={styles['history-window']}>
              {history.map((h, key) => (
                <>
                  <HistoryItem item={h} key={'history-item-' + key} />
                  {history.length !== 1 && <Divider />}
                </>
              ))}
            </div>
          </Paper>
        </div>
        <div className={styles['bottom-papers']}>
          <StatsCard viewsMedian="2.6М" payOffPerVideo="255 ₽" rating={4.6} />
          <ReferalCard
            refUrl="https://flowtok.com/ref/5f3eba819845264b903e746f"
            refsCount={17}
            totalEarningsFromRefs="890.00 ₽"
          />
        </div>
      </div>
    </PageTemplateDesktop>
  );
};
