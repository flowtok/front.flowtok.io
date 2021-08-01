import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from '../../../atoms/Switch';
import styles from './styles.module.scss';

type TurnNotificationsPropsT = {
  bonusLabel?: string;
};

export const TurnNotifications: FC<TurnNotificationsPropsT> = ({
  bonusLabel,
}) => {
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

      <Switch
        onChange={onSwitch}
        defaultChecked={isBonus}
        label={isBonus ? bonusLabel : ''}
      />
    </div>
  );
};
