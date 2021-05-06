import React, { forwardRef, PropsWithChildren } from 'react';
import { PopUp } from '../PopUp';
import styles from './styles.module.scss';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import commonStyles from '../ProfileCards/styles.module.scss';

type FormDataT = {
  value: string;
};

interface AddWithdrawalPopUpProps {
  isOpen: boolean;
  method: string;
  close: () => void;
}

export const AddWithdrawalPopUp = forwardRef<
  HTMLDivElement,
  PropsWithChildren<AddWithdrawalPopUpProps>
>(({ isOpen, method, close }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataT>();

  const onSubmit = (data: FormDataT) => console.log(data);
  const { t } = useTranslation();

  const getTitleMethodByType = (type: string) => {
    if (type === 'yandex') return t('payment-methods.yandex');
    if (type === 'qiwi') return t('payment-methods.qiwi');
    if (type === 'webmoney-r') return t('payment-methods.webmoney-r');
    if (type === 'webmoney-z') return t('payment-methods.webmoney-z');
    if (type === 'card') return t('payment-methods.card');
    return t('payment-methods.phone-number');
  };

  const masks = new Map();
  masks.set('card', '9999 9999 9999 9999');
  masks.set('qiwi', '+9 (999) 999 9999');
  masks.set('phone-number', '+9 (999) 999 9999');
  masks.set('yandex', '99999999999999');
  masks.set('webmoney-r', 'R999999999999');
  masks.set('webmoney-z', 'Z999999999999');

  let errMessageBlock = null;

  if (errors.value) {
    errMessageBlock = (
      <span className={commonStyles['error-message']}>
        {errors.value && t('validation-messages.required')}
      </span>
    );
  }

  return (
    <PopUp isOpen={isOpen} close={close} title={getTitleMethodByType(method)}>
      <form
        className={styles['popup-wrapper']}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles['popup-input']}>
          <Input
            {...register('value', { required: true })}
            mask={masks.get(method)}
          />
          {errMessageBlock}
        </div>
        <Button type="submit" preset={'success'}>
          {t('button-values.add')}
        </Button>
      </form>
    </PopUp>
  );
});
