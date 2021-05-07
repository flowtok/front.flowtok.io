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
import { SavedMethod } from '../../../SettingsCards/Withdrawal/SavedMethod';
import { MethodsBtnGroup } from '../../../SettingsCards/Withdrawal/MethodsBtnGroup';

type FormDataT = {
  value: string;
};

interface WithdrawalPopUpProps {
  isOpen: boolean;
  close: () => void;
}

export const WithdrawalPopUp = forwardRef<
  HTMLDivElement,
  PropsWithChildren<WithdrawalPopUpProps>
>(({ isOpen, close }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataT>();

  const onSubmit = (data: FormDataT) => console.log(data);

  const [
    isOpenAddWithdrawalPopUp,
    setOpenAddWithdrawalPopUp,
  ] = useState<boolean>(false);

  const [currentMethod, setMethod] = useState<string>('');

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
          {savedMethods.map((method, key) => (
            <SavedMethod
              key={'method-' + key}
              value={method.value.toString()}
              title={method.type}
            />
          ))}
        </>
      );
    }
    return (
      <>
        <p className={commonStyles['secondary-title-small']}>
          {t('pages.settings.cards.withdrawal.add-new-method')}
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
    <PopUp
      isOpen={isOpen}
      close={() => close()}
      title={t('pages.profile.wallet.popup-withdrawal')}
    >
      <form
        className={styles['form-withdrawal']}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles['payment-method']}>{renderPaymentMethod()}</div>
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
            error={errors.value}
            {...register('value', {
              required: t('validation-messages.required').toString(),
              min: {
                value: 100,
                message: t('validation-messages.min-output').toString(),
              },
              max: 999999999,
            })}
            placeholder={t('pages.profile.wallet.main-sum')}
          />
        </div>
        <Button
          type="submit"
          preset={'success'}
          className={styles['success-btn']}
        >
          {t('button-values.success')}
        </Button>
      </form>
      <AddWithdrawalPopUp
        isOpen={isOpenAddWithdrawalPopUp}
        method={currentMethod}
        close={() => setOpenAddWithdrawalPopUp(false)}
      />
    </PopUp>
  );
});
