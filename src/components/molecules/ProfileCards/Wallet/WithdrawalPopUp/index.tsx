import React, {
  forwardRef,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Divider } from '../../../../atoms/Divider';
import { PopUp } from '../../../PopUp';
import styles from './styles.module.scss';
import commonStyles from '../../styles.module.scss';
import { Button } from '../../../../atoms/Button';
import { Input } from '../../../../atoms/Input';
import { AddWithdrawalPopUp } from '../../../AddWithdrawalPopUp';
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  MutationPayOutArgs,
  PaymentMethod,
  WalletType,
} from '../../../../../models/models';
import { ADD_WALLET, PAY_OUT } from '../../../../../api/mutations';
import { PaymentMethods } from '../PaymentMethods';
import { WALLETS } from '../../../../../api/queries';
import { trimMoney } from '../../../../../utils/string';

type FormDataT = {
  value: number;
};

interface WithdrawalPopUpProps {
  isOpen: boolean;
  close: () => void;
  isUseProfile?: boolean;
  balance: string;
  handleResult: (status: boolean, message: string) => void;
}

export const WithdrawalPopUp = forwardRef<
  HTMLDivElement,
  PropsWithChildren<WithdrawalPopUpProps>
>(({ isOpen, close, isUseProfile = false, balance = '0', handleResult }) => {
  const { t } = useTranslation();
  const [addWallet] = useMutation<string, MutationPayOutArgs>(ADD_WALLET);
  const [payOut] = useMutation<string, MutationPayOutArgs>(PAY_OUT);
  const [runQuery, { called, loading, data }] = useLazyQuery(WALLETS);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = useForm<FormDataT>();

  const [
    isOpenAddWithdrawalPopUp,
    setOpenAddWithdrawalPopUp,
  ] = useState<boolean>(false);

  const [addedWallet, setAddedWallet] = useState<WalletType | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<
    PaymentMethod | undefined
  >(data?.wallets[0]);
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1440px)' });
  const [activeBtnSum, setActiveBtnSum] = useState<boolean>(false);
  const getSize = () => {
    if (isDesktopLarge) return isUseProfile ? 'sm' : 's';
    return '';
  };

  const onSubmit = (data: FormDataT) => {
    if (selectedMethod?.type) {
      payOut({
        variables: {
          input: {
            type: selectedMethod.type,
            value: data.value,
          },
        },
      }).then((data: any) => {
        handleResult(data?.data?.payOut?.success, data?.data?.payOut?.message);
      });
    }
  };

  const addNewWallet = (data: { type: WalletType; value: string }) => {
    if (data.type) {
      addWallet({
        variables: {
          input: {
            type: data.type,
            value: +data.value,
          },
        },
      }).then(() => {
        runQuery();
        setOpenAddWithdrawalPopUp(false);
      });
    }
  };

  useEffect(() => {
    runQuery();
  }, []);

  useEffect(() => {
    if (activeBtnSum) {
      setValue('value', +trimMoney(balance).toString(), {
        shouldValidate: true,
        shouldDirty: true,
      });
    } else {
      setValue('value', 0, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [activeBtnSum]);

  const finalClassName = classNames(
    styles['form-container'],
    styles[`form-container_${getSize()}`]
  );

  return (
    <PopUp
      closeOnDocumentClick={true}
      isCross={true}
      isOpen={isOpen}
      close={() => close()}
      title={t('pages.profile.wallet.popup-withdrawal')}
      size={getSize()}
    >
      <form
        className={styles['form-withdrawal']}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={finalClassName}>
          <div className={styles['fields-group']}>
            <div className={styles['payment-method']}>
              <PaymentMethods
                setOpenAddWithdrawalPopUp={setOpenAddWithdrawalPopUp}
                setAddedWallet={setAddedWallet}
                savedMethods={data?.wallets}
                selectedMethod={selectedMethod}
                setSelectedMethod={setSelectedMethod}
              />
            </div>
            <Divider />
            <div className={styles['balance-info']}>
              <p className={commonStyles['secondary-title-small']}>
                {t('pages.profile.wallet.balance-info')}
              </p>
              <p>{balance}</p>
            </div>
            <div className={styles['sum']}>
              <p className={commonStyles['secondary-title-small']}>
                {t('pages.profile.wallet.balance-sum')}
              </p>
            </div>
            <div className={styles['popup-inputs']}>
              <Button
                preset={activeBtnSum ? 'border-gradient' : 'white'}
                className={styles['all-sum']}
                type={'button'}
                onClick={() => setActiveBtnSum(!activeBtnSum)}
              >
                {t('pages.profile.wallet.all-sum')}
              </Button>
              <Input
                visited={touchedFields.value}
                error={errors.value}
                {...register('value', {
                  required: t('validation-messages.required').toString(),
                  min: {
                    value: 100,
                    message: t('validation-messages.min-output').toString(),
                  },
                })}
                placeholder={t('pages.profile.wallet.main-sum')}
              />
            </div>
          </div>
          <Button
            type="submit"
            preset={errors.value ? 'success_gray' : 'black'}
            className={styles['success-btn']}
          >
            {t('button-values.success')}
          </Button>
        </div>
      </form>
      {addedWallet && (
        <AddWithdrawalPopUp
          isOpen={isOpenAddWithdrawalPopUp}
          method={addedWallet}
          close={() => setOpenAddWithdrawalPopUp(false)}
          addNewWallet={(value) => addNewWallet({ type: addedWallet, value })}
        />
      )}
    </PopUp>
  );
});
