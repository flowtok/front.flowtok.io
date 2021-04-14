import React, { FC, HTMLProps, useState } from 'react';
import styles from './styles.module.scss';

type SwitchPropsT = {
  hasLabel: boolean;
};

export const Switch: FC<SwitchPropsT & HTMLProps<HTMLInputElement>> = ({
  hasLabel,
  ...rest
}) => {
  const [isBonus, setIsBonus] = useState(hasLabel);

  const onSwitch = () => {
    if (hasLabel) {
      setIsBonus((prev) => !prev);
    }
  };

  return (
    <div className={styles['switch-wrapper']}>
      <input
        className={styles['switch-checkbox']}
        type="checkbox"
        id="switch"
        defaultChecked={isBonus}
        onChange={onSwitch}
        {...rest}
      />
      <label className={styles['switch-track']} htmlFor="switch">
        <span className={styles['switch-circle']} />
      </label>
      {isBonus && hasLabel && <div className={styles['label']}>+1.00 ₽</div>}
    </div>
  );
};
