import { forwardRef, PropsWithChildren } from 'react';
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

  return (
    <PopUp isOpen={isOpen} close={close} title={getTitleMethodByType(method)}>
      <form
        className={styles['popup-wrapper']}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles['popup-input']}>
          <Input {...register('value')} />
        </div>
        <Button preset={'success'}>{t('button-values.add')}</Button>
      </form>
    </PopUp>
  );
});
