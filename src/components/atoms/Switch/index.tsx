import React, { FC, HTMLProps } from 'react';
import generateUniqueId from 'uniqid';
import styles from './styles.module.scss';

type SwitchPropsT = {
  label?: string;
};

export const Switch: FC<SwitchPropsT & HTMLProps<HTMLInputElement>> = ({
  label,
  ...rest
}) => {
  const switchId = generateUniqueId();

  return (
    <div className={styles['switch-wrapper']}>
      <input
        className={styles['switch-checkbox']}
        type="checkbox"
        id={switchId}
        {...rest}
      />
      <label className={styles['switch-track']} htmlFor={switchId}>
        <span className={styles['switch-circle']} />
      </label>
      {label && <div className={styles['label']}>{label}</div>}
    </div>
  );
};
