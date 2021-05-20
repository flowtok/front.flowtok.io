import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import { Button } from 'components/atoms/Button';
import ClockIcon from 'assets/common/icons/clock.svg';
import commonStyles from '../styles.module.scss';
import styles from './styles.module.scss';
import { useState } from 'react';
import { BalanceType, HistoryItem } from './HistoryItem';
import { HistoryPopUp } from './HistoryPopUp';
import { WithdrawalPopUp } from './WithdrawalPopUp';
import { useMediaQuery } from 'react-responsive';
import { VerificationPopup } from '../../VerificationPopup';

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
    { value: '9 112.90', date: '30.08.2021', type: BalanceType.inc },
    { value: '1 112.90', date: '30.08.2020', type: BalanceType.dec },
    { value: '112.90', date: '30.08.2023', type: BalanceType.dec },
  ];
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1920px)' });
  let radius;
  let historyButton = null;
  if (!isDesktop) {
    historyButton = (
      <button
        className={styles.history}
        onClick={() => setOpenHistoryPopUp(true)}
      >
        <img src={ClockIcon} />
      </button>
    );
  }
  if (isDesktop) {
    radius = 11;
  }
  if (isDesktopLarge) {
    radius = 20;
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
          radius={radius}
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
