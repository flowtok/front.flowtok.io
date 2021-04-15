import React, { FC, HTMLProps } from 'react';
import styles from './styles.module.scss';

type SwitchPropsT = {
  label?: string;
};

export const Switch: FC<SwitchPropsT & HTMLProps<HTMLInputElement>> = ({
  label,
  ...rest
}) => {
  return (
    <div className={styles['switch-wrapper']}>
      <input
        className={styles['switch-checkbox']}
        type="checkbox"
        id="switch"
        {...rest}
      />
      <label className={styles['switch-track']} htmlFor={'switch'}>
        <span className={styles['switch-circle']} />
      </label>
      {label && <div className={styles['label']}>{label}</div>}
    </div>
  );
};
