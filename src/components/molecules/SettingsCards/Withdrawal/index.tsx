import { useTranslation } from 'react-i18next';
import { Paper } from '../../../atoms/Paper';
import commonStyles from '../styles.module.scss';
import { Divider } from '../../../atoms/Divider';
import styles from './styles.module.scss';
import { MethodsBtnGroup } from './MethodsBtnGroup';
import { useState } from 'react';
import { SavedMethod } from './SavedMethod';
import { AddWithdrawalPopUp } from '../../AddWithdrawalPopUp';
import { PaymentMethod, WalletType } from '../../../../types/types.temp';

export const WithdrawalCard = () => {
  const { t } = useTranslation();

  const [addedWallet, setAddedWallet] = useState<WalletType | null>(null);
  const [isOpenPopUp, setOpenPopUp] = useState<boolean>(false);

  /*will be deleted*/
  const savedMethods: PaymentMethod[] = [];

  const baseDescription = (
    <p className={commonStyles['description']}>
      {t('pages.settings.cards.withdrawal.helper-text')}
    </p>
  );

  const renderSavedMethods = () => {
    if (!savedMethods.length) return baseDescription;
    return (
      <div className={styles['saved-methods_container']}>
        {savedMethods.map((method, key) => (
          <SavedMethod
            isSelected={true}
            selectAction={() => console.log(key)}
            value={method.value.toString()}
            title={method.type}
            key={'saved-method-' + key}
            canDelete={true}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Paper>
        <div className={styles['withdrawal-container']}>
          <h3 className={commonStyles['primary-title']}>
            {t('pages.settings.cards.withdrawal.title')}
          </h3>
          <div className={styles['saved-block']}>
            <p className={commonStyles['secondary-title-small']}>
              {t('pages.settings.cards.withdrawal.saved-list')}
            </p>
            <div className={styles['saved-methods']}>
              {renderSavedMethods()}
            </div>
          </div>
          <Divider />
          <div className={styles['add-method-block']}>
            <p className={commonStyles['secondary-title-small']}>
              {t('pages.settings.cards.withdrawal.add-new-method')}
            </p>
            <div className={styles['btn-group']}>
              <MethodsBtnGroup
                onClickAction={(type: WalletType) => {
                  setAddedWallet(type);
                  setOpenPopUp(true);
                }}
              />
            </div>
          </div>
        </div>
      </Paper>
      {addedWallet && (
        <AddWithdrawalPopUp
          addNewWallet={(value) => console.log(value)}
          isOpen={isOpenPopUp}
          method={addedWallet}
          close={() => setOpenPopUp(false)}
        />
      )}
    </>
  );
};
