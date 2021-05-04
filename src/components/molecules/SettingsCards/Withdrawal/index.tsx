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

export const WithdrawalCard = () => {
  const { t } = useTranslation();

  const [currentMethod, setMethod] = useState<string>('');
  const [isOpenPopUp, setOpenPopUp] = useState<boolean>(false);

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

  const renderSavedMethods = () => {
    if (!savedMethods.length) return baseDescription;
    return savedMethods.map((method) => (
      <SavedMethod
        value={method.value.toString()}
        title={getTitleMethodByType(method.type)}
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
      <PopUp
        isOpen={isOpenPopUp}
        close={() => setOpenPopUp(false)}
        title={getTitleMethodByType(currentMethod)}
      >
        <div className={styles['popup-wrapper']}>
          <Input state="correct" />
          <Button preset={'success'}>{t('button-values.add')}</Button>
        </div>
      </PopUp>
    </>
  );
};
