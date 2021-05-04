import styles from './styles.module.scss';
import { Checkbox } from '../../../../atoms/Checkbox';
import { useState } from 'react';

export interface MethodsBtnGroupProps {
  value: string;
  title: string;
}

export const SavedMethod = ({ title, value }: MethodsBtnGroupProps) => {
  const [isChecked, setChecked] = useState<boolean>(false);
  const style = isChecked
    ? styles[`saved_method-active`]
    : styles[`saved_method`];
  return (
    <div className={style} onClick={() => setChecked(!isChecked)}>
      <div>
        <Checkbox isChecked={isChecked} />
        <p>{title}</p>
      </div>
      <div>{'...'.concat(value.slice(-4))}</div>
    </div>
  );
};
