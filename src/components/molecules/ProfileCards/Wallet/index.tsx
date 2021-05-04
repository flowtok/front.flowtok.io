import { useTranslation } from 'react-i18next';

import { Paper } from 'components/atoms/Paper';
import { Button } from 'components/atoms/Button';
import ClockIcon from 'assets/common/icons/clock.svg';
import commonStyles from '../styles.module.scss';
import styles from './styles.module.scss';
import { PopUp } from '../../PopUp';
import { useState } from 'react';
import { BalanceType, HistoryItem } from './HistoryItem';
import { Divider } from '../../../atoms/Divider';
import { SavedMethod } from '../../SettingsCards/Withdrawal/SavedMethod';
import { MethodsBtnGroup } from '../../SettingsCards/Withdrawal/MethodsBtnGroup';
import { AddWithdrawalPopUp } from '../../AddWithdrawalPopUp';
import { Input } from '../../../atoms/Input';
import { useForm } from 'react-hook-form';
import { NotificationPopUp } from '../../NotificationPopUp';

export interface WalletCardProps {
  balance: string;
}

type FormDataT = {
  value: string;
};

export const WalletCard = ({ balance }: WalletCardProps) => {
  const [isOpenHistoryPopUp, setOpenHistoryPopUp] = useState<boolean>(false);
  const [
    isOpenAddWithdrawalPopUp,
    setOpenAddWithdrawalPopUp,
  ] = useState<boolean>(false);
  const [isOpenWithdrawalPopUp, setOpenWithdrawalPopUp] = useState<boolean>(
    false
  );
  const [currentMethod, setMethod] = useState<string>('');

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataT>();

  const onSubmit = (data: FormDataT) => console.log(data);

  /*will be deleted*/
  const history: HistoryItem[] = [
    { value: '9 112.90', date: '30.08.2021', type: BalanceType.inc },
    { value: '1 112.90', date: '30.08.2020', type: BalanceType.dec },
    { value: '112.90', date: '30.08.2023', type: BalanceType.dec },
  ];
  /*will be deleted*/
  const savedMethods: any[] = [
    { type: 'yandex', value: 213443245 },
    { type: 'card', value: 213443245 },
    { type: 'phone-number', value: 213443245 },
  ];

  const renderPaymentMethod = () => {
    if (savedMethods.length) {
      return (
        <>
          <p className={commonStyles['secondary-title-small']}>
            {t('pages.settings.cards.withdrawal.saved-list')}
          </p>
          {savedMethods.map((method) => (
            <SavedMethod value={method.value.toString()} title={method.type} />
          ))}
        </>
      );
    }
    return (
      <>
        <p className={commonStyles['secondary-title-small']}>
          {t('pages.settings.cards.withdrawal.saved-list')}
        </p>
        <MethodsBtnGroup
          onClickAction={(type: string) => {
            setMethod(type);
            setOpenAddWithdrawalPopUp(true);
          }}
        />
      </>
    );
  };

  return (
    <>
      <Paper className={styles.wallet}>
        <button
          className={styles.history}
          onClick={() => setOpenHistoryPopUp(true)}
        >
          <img src={ClockIcon} />
        </button>
        <h3 className={commonStyles['title-primary']}>
          {t('pages.profile.wallet.primary')}
        </h3>
        <p className={commonStyles['title-secondary']}>
          {t('pages.profile.wallet.secondary')}
        </p>
        <p className={commonStyles['value-primary']}>{balance}</p>
        <Button
          className={styles['pay-off-button']}
          onClick={() => setOpenWithdrawalPopUp(true)}
        >
          {t('pages.profile.wallet.pay-off-button-text')}
        </Button>
      </Paper>
      <PopUp
        isOpen={isOpenHistoryPopUp}
        close={() => setOpenHistoryPopUp(false)}
        title={t('pages.profile.wallet.popup-title')}
      >
        <div>
          {history.map((h, key) => (
            <>
              <HistoryItem item={h} key={'history-item-' + key} />
              {history.length !== 1 && <Divider />}
            </>
          ))}
        </div>
      </PopUp>
      <PopUp
        isOpen={isOpenWithdrawalPopUp}
        close={() => setOpenWithdrawalPopUp(false)}
        title={t('pages.profile.wallet.popup-withdrawal')}
      >
        <form
          className={styles['form-withdrawal']}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles['payment-method']}>
            {renderPaymentMethod()}
          </div>
          <Divider />
          <div className={styles['balance-info']}>
            <p className={commonStyles['secondary-title-small']}>
              {t('pages.profile.wallet.balance-info')}
            </p>
            <p>15 236.00 ₽</p>
          </div>
          <div className={styles['sum']}>
            <p className={commonStyles['secondary-title-small']}>
              {t('pages.profile.wallet.balance-sum')}
            </p>
          </div>

          <div className={styles['popup-inputs']}>
            <Button preset={'white'} className={styles['all-sum']}>
              {t('pages.profile.wallet.all-sum')}
            </Button>
            <Input
              {...register('value')}
              placeholder={t('pages.profile.wallet.main-sum')}
            />
          </div>
          <Button preset={'success'} className={styles['success-btn']}>
            {t('button-values.success')}
          </Button>
        </form>
        <AddWithdrawalPopUp
          isOpen={isOpenAddWithdrawalPopUp}
          method={currentMethod}
          close={() => setOpenAddWithdrawalPopUp(false)}
        />
      </PopUp>
      {/*uncomment component for see notification popup */}
      {/*<NotificationPopUp isOpen={true} />*/}
    </>
  );
};
