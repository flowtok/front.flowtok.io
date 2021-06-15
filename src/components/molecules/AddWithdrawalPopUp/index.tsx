import React, { forwardRef, PropsWithChildren } from 'react';
import { PopUp } from '../PopUp';
import styles from './styles.module.scss';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { WalletType } from '../../../models/models';

type FormDataT = {
  value: string;
};

interface AddWithdrawalPopUpProps {
  isOpen: boolean;
  method: WalletType;
  close: () => void;
  addNewWallet: (value: string) => void;
}

export const AddWithdrawalPopUp = forwardRef<
  HTMLDivElement,
  PropsWithChildren<AddWithdrawalPopUpProps>
>(({ isOpen, method, close, addNewWallet }, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormDataT>({
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: FormDataT) => addNewWallet(data.value);
  const { t } = useTranslation();

  const getTitleMethodByType = (type: WalletType | undefined | null) => {
    if (type === WalletType.Yandex) return t('payment-methods.yandex');
    if (type === WalletType.Qiwi) return t('payment-methods.qiwi');
    if (type === WalletType.Wmr) return t('payment-methods.webmoney-r');
    if (type === WalletType.Wmz) return t('payment-methods.webmoney-z');
    if (type === WalletType.Card) return t('payment-methods.card');
    return t('payment-methods.phone-number');
  };

  const masks = new Map();
  masks.set(WalletType.Card, '9999 9999 9999 9999');
  masks.set(WalletType.Qiwi, '+9 (999) 999 9999');
  masks.set(WalletType.Phone, '+9 (999) 999 9999');
  masks.set(WalletType.Yandex, '99999999999999');
  masks.set(WalletType.Wmr, 'R999999999999');
  masks.set(WalletType.Wmz, 'Z999999999999');

  const patterns = new Map();
  patterns.set(WalletType.Card, /(\d{4}([ ]|)\d{4}([ ]|)\d{4}([ ]|)\d{4})/);
  patterns.set(
    WalletType.Qiwi,
    /(([+]|)\d{1}([ ]|)([(]|)\d{3}([)]|)([ ]|)\d{3}([ ]|)\d{4})/
  );
  patterns.set(
    WalletType.Phone,
    /(([+]|)\d{1}([ ]|)([(]|)\d{3}([)]|)([ ]|)\d{3}([ ]|)\d{4})/
  );
  patterns.set(WalletType.Yandex, /(\d{14})/);
  patterns.set(WalletType.Wmr, /(([R]|)\d{12})/);
  patterns.set(WalletType.Wmz, /(([Z]|)\d{12})/);

  return (
    <PopUp
      isOpen={isOpen}
      close={close}
      title={getTitleMethodByType(method)}
      size="s"
    >
      <form
        className={styles['popup-wrapper']}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles['popup-input']}>
          <Input
            visited={touchedFields.value}
            error={errors.value}
            {...register('value', {
              required: t('validation-messages.required').toString(),
              pattern: {
                value: patterns.get(method),
                message: t('validation-messages.incorrect').toString(),
              },
            })}
            mask={masks.get(method)}
          />
        </div>
        <Button type="submit" preset={errors.value ? 'success_gray' : 'black'}>
          {t('button-values.add')}
        </Button>
      </form>
    </PopUp>
  );
});
