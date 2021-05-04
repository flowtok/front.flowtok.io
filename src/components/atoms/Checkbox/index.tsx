import React, { FC, HTMLProps } from 'react';
import styles from './styles.module.scss';
import CheckIcon from 'assets/common/icons/check.svg';
type CheckBoxPropsT = {
  isChecked: boolean;
  onClickAction?: () => void;
};

export const Checkbox: FC<CheckBoxPropsT & HTMLProps<HTMLInputElement>> = ({
  isChecked,
  onClickAction,
}) => {
  const style = isChecked ? styles[`checkbox_active`] : styles[`checkbox`];
  return (
    <div
      className={style}
      onClick={() => (onClickAction ? onClickAction() : null)}
    >
      <img src={CheckIcon} />
    </div>
  );
};
