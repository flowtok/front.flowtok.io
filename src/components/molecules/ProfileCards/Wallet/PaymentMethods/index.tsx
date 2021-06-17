import React, { FC } from 'react';
import styles from '../WithdrawalPopUp/styles.module.scss';
import commonStyles from '../../styles.module.scss';
import { SavedMethod } from '../../../SettingsCards/Withdrawal/SavedMethod';
import { MethodsBtnGroup } from '../../../SettingsCards/Withdrawal/MethodsBtnGroup';
import { useTranslation } from 'react-i18next';
import { PaymentMethod, WalletType } from '../../../../../models/models';

type PaymentMethodsPropsT = {
  savedMethods: Array<PaymentMethod>;
  setSelectedMethod: (method: PaymentMethod) => void;
  setAddedWallet: (method: WalletType) => void;
  selectedMethod?: PaymentMethod;
  setOpenAddWithdrawalPopUp: (flag: boolean) => void;
};

export const PaymentMethods: FC<PaymentMethodsPropsT> = ({
  savedMethods,
  setSelectedMethod,
  selectedMethod,
  setAddedWallet,
  setOpenAddWithdrawalPopUp,
}) => {
  const { t } = useTranslation();

  if (savedMethods?.length) {
    return (
      <div className={styles['methods-list']}>
        <p className={commonStyles['secondary-title-small']}>
          {t('pages.settings.cards.withdrawal.saved-list')}
        </p>
        {savedMethods.map((method, key) => (
          <SavedMethod
            key={'method-' + key}
            selectAction={() => setSelectedMethod(method)}
            isSelected={
              method.type === selectedMethod?.type &&
              method.value === selectedMethod?.value
            }
            value={method.value.toString()}
            title={method.type}
          />
        ))}
      </div>
    );
  }
  return (
    <div className={styles['methods-btn_group']}>
      <p className={commonStyles['secondary-title-small']}>
        {t('pages.settings.cards.withdrawal.add-new-method')}
      </p>
      <MethodsBtnGroup
        onClickAction={(type: WalletType) => {
          setAddedWallet(type);
          setOpenAddWithdrawalPopUp(true);
        }}
      />
    </div>
  );
};
