import { useTranslation } from 'react-i18next';
import { Paper } from '../../../atoms/Paper';
import commonStyles from '../styles.module.scss';
import { Divider } from '../../../atoms/Divider';
import styles from './styles.module.scss';
import { MethodsBtnGroup } from './MethodsBtnGroup';
import { useState } from 'react';
import { SavedMethod } from './SavedMethod';
import { AddWithdrawalPopUp } from '../../AddWithdrawalPopUp';

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

  const baseDescription = (
    <p className={commonStyles['description']}>
      {t('pages.settings.cards.withdrawal.helper-text')}
    </p>
  );

  const renderSavedMethods = () => {
    if (!savedMethods.length) return baseDescription;
    return savedMethods.map((method) => (
      <SavedMethod value={method.value.toString()} title={method.type} />
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
    </>
  );
};
