import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import { Button } from 'components/atoms/Button';
import ClockIcon from 'assets/common/icons/clock.svg';
import commonStyles from '../styles.module.scss';
import styles from './styles.module.scss';
import { useState } from 'react';
import { HistoryItemComponent } from './HistoryItem';
import { HistoryPopUp } from './HistoryPopUp';
import { WithdrawalPopUp } from './WithdrawalPopUp';
import { useMediaQuery } from 'react-responsive';
import { VerificationPopup } from '../../VerificationPopup';
import { HistoryItem, HistoryItemType } from '../../../../models/models';

export interface WalletCardProps {
  balance: string;
}

export const WalletCard = ({ balance }: WalletCardProps) => {
  const [isOpenHistoryPopUp, setOpenHistoryPopUp] = useState<boolean>(false);
  const [isOpenWithdrawalPopUp, setOpenWithdrawalPopUp] = useState<boolean>(
    false
  );

  const { t } = useTranslation();

  /*will be deleted*/
  const history: HistoryItem[] = [
    { value: '9 112.90', date: '30.08.2021', type: HistoryItemType.Inc },
    { value: '1 112.90', date: '30.08.2020', type: HistoryItemType.Dec },
    { value: '112.90', date: '30.08.2023', type: HistoryItemType.Dec },
  ];
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  let historyButton = null;
  if (!isDesktop) {
    historyButton = (
      <button
        className={styles.history}
        onClick={() => setOpenHistoryPopUp(true)}
      >
        <img src={ClockIcon} alt={''} />
      </button>
    );
  }
  return (
    <>
      <Paper className={styles.wallet}>
        {historyButton}
        <h3 className={commonStyles['title-primary']}>
          {t('pages.profile.wallet.primary')}
        </h3>
        <p className={commonStyles['title-secondary']}>
          {t('pages.profile.wallet.secondary')}
        </p>
        <p className={commonStyles['value-primary']}>{balance}</p>
        <Button
          className={styles['pay-off-button']}
          radius={null}
          onClick={() => setOpenWithdrawalPopUp(true)}
        >
          {t('pages.profile.wallet.pay-off-button-text')}
        </Button>
      </Paper>
      <HistoryPopUp
        isOpen={isOpenHistoryPopUp}
        close={() => setOpenHistoryPopUp(false)}
        historyList={history}
      />
      <WithdrawalPopUp
        isUseProfile={true}
        isOpen={isOpenWithdrawalPopUp}
        close={() => setOpenWithdrawalPopUp(false)}
      />
      {/*uncomment component for see notification popup */}
      {/*<VerificationPopup isOpen={true} />*/}
    </>
  );
};
