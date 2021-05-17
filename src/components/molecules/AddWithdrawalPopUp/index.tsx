import React, { forwardRef, PropsWithChildren } from 'react';
import { PopUp } from '../PopUp';
import styles from './styles.module.scss';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
    formState: { errors, touchedFields },
  } = useForm<FormDataT>({
    reValidateMode: 'onChange',
  });

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

  const patterns = new Map();
  patterns.set('card', /(\d{4}([ ]|)\d{4}([ ]|)\d{4}([ ]|)\d{4})/);
  patterns.set(
    'qiwi',
    /(([+]|)\d{1}([ ]|)([(]|)\d{3}([)]|)([ ]|)\d{3}([ ]|)\d{4})/
  );
  patterns.set(
    'phone-number',
    /(([+]|)\d{1}([ ]|)([(]|)\d{3}([)]|)([ ]|)\d{3}([ ]|)\d{4})/
  );
  patterns.set('yandex', /(\d{14})/);
  patterns.set('webmoney-r', /(([R]|)\d{12})/);
  patterns.set('webmoney-z', /(([Z]|)\d{12})/);

  return (
    <PopUp isOpen={isOpen} close={close} title={getTitleMethodByType(method)}>
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
        <Button type="submit" preset={'success'}>
          {t('button-values.add')}
        </Button>
      </form>
    </PopUp>
  );
});
