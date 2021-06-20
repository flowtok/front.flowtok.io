import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import { Button } from 'components/atoms/Button';
import ClockIcon from 'assets/common/icons/clock.svg';
import commonStyles from '../styles.module.scss';
import styles from './styles.module.scss';
import { useState } from 'react';
import { HistoryPopUp } from './HistoryPopUp';
import { WithdrawalPopUp } from './WithdrawalPopUp';
import { useMediaQuery } from 'react-responsive';
import { HistoryItemType, HistoryPayment } from '../../../../models/models';
import { PopUp } from '../../PopUp';
import {
  DonePopUpContent,
  ErrorPopUpContent,
} from '../../PaymentMethodNotifications';

export interface WalletCardProps {
  balance: string;
}

export const WalletCard = ({ balance }: WalletCardProps) => {
  const [isOpenHistoryPopUp, setOpenHistoryPopUp] = useState<boolean>(false);
  const [isOpenWithdrawalPopUp, setOpenWithdrawalPopUp] = useState<boolean>(
    false
  );
  const [isOpenSuccessPopUp, setOpenSuccessPopUp] = useState<boolean>(false);
  const [isOpenErrorPopUp, setOpenErrorPopUp] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');

  const { t } = useTranslation();

  /*will be deleted*/
  const history: HistoryPayment[] = [
    { value: '9 112.90', date: '30.08.2021', type: HistoryItemType.Inc },
    { value: '1 112.90', date: '30.08.2020', type: HistoryItemType.Dec },
    { value: '112.90', date: '30.08.2023', type: HistoryItemType.Dec },
  ];

  const handleResultByPayOut = (isSuccess: boolean, message: string) => {
    if (isSuccess) {
      setOpenWithdrawalPopUp(false);
      setOpenSuccessPopUp(true);
    } else {
      setOpenErrorPopUp(true);
    }
    setStatusMessage(message);
  };

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
        handleResult={(status, message) =>
          handleResultByPayOut(status, message)
        }
        balance={balance}
        isUseProfile={true}
        isOpen={isOpenWithdrawalPopUp}
        close={() => setOpenWithdrawalPopUp(false)}
      />
      <PopUp
        size="s"
        isOpen={isOpenSuccessPopUp}
        close={() => setOpenSuccessPopUp(false)}
      >
        <DonePopUpContent title={statusMessage} />
      </PopUp>
      <PopUp
        size="s"
        isOpen={isOpenErrorPopUp}
        close={() => setOpenErrorPopUp(false)}
      >
        <ErrorPopUpContent title={statusMessage} />
      </PopUp>
      {/*uncomment component for see notification popup */}
      {/*<VerificationPopup isOpen={true} />*/}
    </>
  );
};
