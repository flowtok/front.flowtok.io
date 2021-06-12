import React, { forwardRef, PropsWithChildren, useState } from 'react';
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
import { useMutation } from '@apollo/client';
import {
  MutationPayOutArgs,
  PaymentMethod,
  WalletType,
} from '../../../../../models/models';
import { PAY_OUT } from '../../../../../api/mutations';
import { PaymentMethods } from '../PaymentMethods';

type FormDataT = {
  value: string;
};

interface WithdrawalPopUpProps {
  isOpen: boolean;
  close: () => void;
  isUseProfile?: boolean;
}

export const WithdrawalPopUp = forwardRef<
  HTMLDivElement,
  PropsWithChildren<WithdrawalPopUpProps>
>(({ isOpen, close, isUseProfile = false }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormDataT>();

  const [
    isOpenAddWithdrawalPopUp,
    setOpenAddWithdrawalPopUp,
  ] = useState<boolean>(false);

  /*will be deleted*/
  const savedMethods: PaymentMethod[] = [
    { type: WalletType.Yandex, value: '213443245' },
    { type: WalletType.Card, value: '1234 1212 3123 4124' },
    { type: WalletType.Phone, value: '8 918 43-12-123' },
  ];

  const [addedWallet, setAddedWallet] = useState<WalletType | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<
    PaymentMethod | undefined
  >(savedMethods[0]);
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1440px)' });

  const getSize = () => {
    if (isDesktopLarge) return isUseProfile ? 'sm' : 's';
    return '';
  };
  const [payOut] = useMutation<string, MutationPayOutArgs>(PAY_OUT);

  const onSubmit = (data: FormDataT) => {
    if (selectedMethod?.type) {
      payOut({
        variables: {
          input: {
            type: selectedMethod.type,
            value: data.value,
          },
        },
      }).then((data) => {
        console.log(data);
      });
    }
  };

  const finalClassName = classNames(
    styles['form-container'],
    styles[`form-container_${getSize()}`]
  );

  return (
    <PopUp
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
                savedMethods={savedMethods}
                selectedMethod={selectedMethod}
                setSelectedMethod={setSelectedMethod}
              />
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
        />
      )}
    </PopUp>
  );
});
