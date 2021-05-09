import React from 'react';
import styles from './styles.module.scss';
import { SignUpDesktopTemplate } from '../../../components/templates/SignUpDesktopTempate';
import videoMp4 from '../../../assets/login/videos/login_video.mp4';
import videoOgv from '../../../assets/login/videos/login_video.ogv';
import videoWebm from '../../../assets/login/videos/login_video.webm';
import { NetworkButton } from '../../../components/atoms/NetworkButton';
import { Divider } from '../../../components/atoms/Divider';
import { TikTokProfile } from '../../../components/molecules/SignUp/TikTokProfile';
import avatar from '../../../assets/common/images/avatar_mock.png';
import { MainUserInfoForm } from '../../../components/molecules/SignUp/MainUserInfoForm';
import { TurnNotifications } from '../../../components/molecules/SignUp/TurnNotifications';

type SignUpDesktopPropsT = any;

export default ({}: SignUpDesktopPropsT) => {
  return (
    <SignUpDesktopTemplate
      video={{
        mp4: videoMp4,
        ogv: videoOgv,
        webm: videoWebm,
      }}
    >
      <div className={styles['wrapper']}>
        <div className={styles['container']}>
          <NetworkButton network={'fb'}>Войти через Facebook</NetworkButton>
          <NetworkButton network={'gm'}>Войти через Google</NetworkButton>
          <NetworkButton network={'vk'}>Войти через VK</NetworkButton>
        </div>
        <div className={styles['container']}>
          <TikTokProfile
            profileData={{
              fullName: 'karinakrosssafsdgdsfgdfqwqwewq',
              shortName: '@karinakross',
              avatar,
            }}
          />
        </div>
        <div className={styles['container']}>
          <MainUserInfoForm />
        </div>
        <Divider direction={'horizontal'} />
        <div className={styles['container']}>
          <TurnNotifications />
        </div>
      </div>
    </SignUpDesktopTemplate>
  );
};
