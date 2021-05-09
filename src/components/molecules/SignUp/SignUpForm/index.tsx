import React, { FC } from 'react';
import styles from './styles.module.scss';
import { NetworkButton } from '../../../atoms/NetworkButton';
import { Divider } from '../../../atoms/Divider';
import { TikTokProfile } from '../TikTokProfile';
import avatar from '../../../../assets/common/images/avatar_mock.png';
import { MainUserInfoForm } from '../MainUserInfoForm';
import { TurnNotifications } from '../TurnNotifications';

type SignUpFormPropsT = any;

export const SignUpForm: FC<SignUpFormPropsT> = ({}) => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <NetworkButton network={'fb'}>Войти через Facebook</NetworkButton>
        <NetworkButton network={'gm'}>Войти через Google</NetworkButton>
        <NetworkButton network={'vk'}>Войти через VK</NetworkButton>
      </div>
      <Divider direction={'horizontal'} />
      <div className={styles['container']}>
        <TikTokProfile
          profileData={{
            fullName: 'karinakrosssafsdgdsfgdfqwqwewq',
            shortName: '@karinakross',
            avatar,
          }}
        />
      </div>
      <Divider direction={'horizontal'} />
      <div className={styles['container']}>
        <MainUserInfoForm />
      </div>
      <Divider direction={'horizontal'} />
      <div className={styles['container']}>
        <TurnNotifications />
      </div>
      <Divider direction={'horizontal'} />
    </div>
  );
};
