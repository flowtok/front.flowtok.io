import styles from './styles.module.scss';
import { Checkbox } from '../../../../atoms/Checkbox';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import deleteIcon from '../../../../../assets/common/icons/delete.svg';

export interface MethodsBtnGroupProps {
  value: string;
  title: string;
  canDelete?: boolean;
  isSelected: boolean;
  selectAction: () => void;
}

export const SavedMethod = ({
  title,
  value,
  isSelected,
  canDelete,
  selectAction,
}: MethodsBtnGroupProps) => {
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1440px)' });
  const style = isSelected
    ? styles[`saved_method-active`]
    : styles[`saved_method`];

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
    <div className={styles['method-container']}>
      <div className={style} onClick={() => selectAction()}>
        <div>
          <Checkbox isChecked={isSelected} />
          <p>{getTitleMethodByType(title)}</p>
        </div>
        <div>{'...'.concat(value.slice(-4))}</div>
      </div>
      {isDesktopLarge && canDelete && (
        <button className={styles['delete-method']}>
          <img src={deleteIcon} alt={''} />
        </button>
      )}
    </div>
  );
};
