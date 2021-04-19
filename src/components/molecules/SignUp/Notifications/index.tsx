import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { Switch } from '../../../atoms/Switch';
import { useTranslation } from 'react-i18next';

type NotificationsPropsT = any;

export const Notifications: FC<NotificationsPropsT> = ({}) => {
  const { t } = useTranslation();
  const [isBonus, setIsBonus] = useState(true);

  const onSwitch = () => {
    setIsBonus((prev) => !prev);
  };
  return (
    <div className={styles['row']}>
      <div className={styles['column']}>
        <div className={styles['title']}>
          {t('pages.signup.notifications.title')}
        </div>
        <div className={styles['desc']}>
          {t('pages.signup.notifications.desc')}
        </div>
      </div>
      {/*<div className={styles['column']}>*/}
      <Switch
        // label={isBonus ? '+ 1.00 ₽' : ''}
        onChange={onSwitch}
        defaultChecked={isBonus}
      />
      {/*</div>*/}
    </div>
  );
};
