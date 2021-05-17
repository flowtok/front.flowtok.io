import styles from './styles.module.scss';
import { Checkbox } from '../../../../atoms/Checkbox';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface MethodsBtnGroupProps {
  value: string;
  title: string;
}

export const SavedMethod = ({ title, value }: MethodsBtnGroupProps) => {
  const [isChecked, setChecked] = useState<boolean>(false);
  const style = isChecked
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
    <div className={style} onClick={() => setChecked(!isChecked)}>
      <div>
        <Checkbox isChecked={isChecked} />
        <p>{getTitleMethodByType(title)}</p>
      </div>
      <div>{'...'.concat(value.slice(-4))}</div>
    </div>
  );
};
