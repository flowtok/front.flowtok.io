import { useTranslation } from 'react-i18next';
import { Paper } from '../../../atoms/Paper';
import commonStyles from '../styles.module.scss';
import { Divider } from '../../../atoms/Divider';
import styles from './styles.module.scss';
import { MethodsBtnGroup } from './MethodsBtnGroup';
import { useState } from 'react';
import { PopUp } from '../../PopUp';
import { Input } from '../../../atoms/Input';
import { SavedMethod } from './SavedMethod';
import { Button } from '../../../atoms/Button';
import { useForm } from 'react-hook-form';
import { AddWithdrawalPopUp } from '../../AddWithdrawalPopUp';

type FormDataT = {
  value: string;
};

export const WithdrawalCard = () => {
  const { t } = useTranslation();

  const [currentMethod, setMethod] = useState<string>('');
  const [isOpenPopUp, setOpenPopUp] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataT>();

  const onSubmit = (data: FormDataT) => console.log(data);

  /*will be deleted*/
  const savedMethods = [
    { type: 'yandex', value: 213443245 },
    { type: 'card', value: 213443245 },
    { type: 'phone-number', value: 213443245 },
  ];

  const getTitleMethodByType = (type: string) => {
    if (type === 'yandex') return t('payment-methods.yandex');
    if (type === 'qiwi') return t('payment-methods.qiwi');
    if (type === 'webmoney-r') return t('payment-methods.webmoney-r');
    if (type === 'webmoney-z') return t('payment-methods.webmoney-z');
    if (type === 'card') return t('payment-methods.card');
    return t('payment-methods.phone-number');
  };

  const baseDescription = (
    <p className={commonStyles['description']}>
      {t('pages.settings.cards.withdrawal.helper-text')}
    </p>
  );

  const masks = new Map();
  masks.set('card', '9999 9999 9999 9999');
  masks.set('qiwi', '+9 (999) 999 9999');
  masks.set('phone-number', '+9 (999) 999 9999');
  masks.set('yandex', '99999999999999');
  masks.set('webmoney-r', 'R999999999999');
  masks.set('webmoney-z', 'Z999999999999');

  const renderSavedMethods = () => {
    if (!savedMethods.length) return baseDescription;
    return savedMethods.map((method, key) => (
      <SavedMethod
        value={method.value.toString()}
        title={method.type}
        key={'saved-method-' + key}
      />
    ));
  };

  return (
    <>
      <Paper>
        <h3 className={commonStyles['primary-title']}>
          {t('pages.settings.cards.withdrawal.title')}
        </h3>
        <div className={styles['saved-block']}>
          <p className={commonStyles['secondary-title-small']}>
            {t('pages.settings.cards.withdrawal.saved-list')}
          </p>
          <div className={styles['saved-methods']}>{renderSavedMethods()}</div>
        </div>
        <Divider />
        <div className={styles['add-method-block']}>
          <p className={commonStyles['secondary-title-small']}>
            {t('pages.settings.cards.withdrawal.add-new-method')}
          </p>
          <div className={styles['btn-group']}>
            <MethodsBtnGroup
              onClickAction={(type: string) => {
                setMethod(type);
                setOpenPopUp(true);
              }}
            />
          </div>
        </div>
      </Paper>
      <AddWithdrawalPopUp
        isOpen={isOpenPopUp}
        method={currentMethod}
        close={() => setOpenPopUp(false)}
      />
      {/*<PopUp*/}
      {/*  isOpen={isOpenPopUp}*/}
      {/*  close={() => setOpenPopUp(false)}*/}
      {/*  title={getTitleMethodByType(currentMethod)}*/}
      {/*>*/}
      {/*  <form*/}
      {/*    className={styles['popup-wrapper']}*/}
      {/*    onSubmit={handleSubmit(onSubmit)}*/}
      {/*  >*/}
      {/*    <div className={styles['popup-input']}>*/}
      {/*      <Input*/}
      {/*        mask={masks.get(currentMethod)}*/}
      {/*        {...register('value', { required: true })}*/}
      {/*      />*/}
      {/*      {errors.value && t('validation-messages.required')}*/}
      {/*    </div>*/}
      {/*    <Button type="submit" preset={'success'}>*/}
      {/*      {t('button-values.add')}*/}
      {/*    </Button>*/}
      {/*  </form>*/}
      {/*</PopUp>*/}
    </>
  );
};
