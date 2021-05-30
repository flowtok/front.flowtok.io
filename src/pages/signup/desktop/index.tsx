import React from 'react';
import styles from './styles.module.scss';
import { SignUpDesktopTemplate } from '../../../components/templates/SignUpDesktopTempate';
import videoMp4 from '../../../assets/login/videos/login_video.mp4';
import videoOgv from '../../../assets/login/videos/login_video.ogv';
import videoWebm from '../../../assets/login/videos/login_video.webm';
import { NetworkButton } from '../../../components/atoms/NetworkButton';
import { TikTokProfile } from '../../../components/molecules/SignUp/TikTokProfile';
import avatar from '../../../assets/common/images/avatar_mock.png';
import { MainUserInfoForm } from '../../../components/molecules/SignUp/MainUserInfoForm';
import { TurnNotifications } from '../../../components/molecules/SignUp/TurnNotifications';
import { useTranslation } from 'react-i18next';

type SignUpDesktopPropsT = any;

export default ({}: SignUpDesktopPropsT) => {
  const { t } = useTranslation();
  return (
    <SignUpDesktopTemplate
      video={{
        mp4: videoMp4,
        ogv: videoOgv,
        webm: videoWebm,
      }}
    >
      <div className={styles['wrapper']}>
        <div className={styles['title']}>{t('header.signup.title')}</div>
        <div className={styles['container']}>
          <NetworkButton network={'fb'}>
            {t('pages.login.sign-in-fb')}
          </NetworkButton>
          <NetworkButton network={'gm'}>
            {t('pages.login.sign-in-fb')}
          </NetworkButton>
          <NetworkButton network={'vk'}>
            {t('pages.login.sign-in-fb')}
          </NetworkButton>
        </div>
        <div className={styles['container']}>
          <TikTokProfile
            profileData={{
              fullName: 'karinakrosssa',
              shortName: '@karinakross',
              avatar,
            }}
          />
        </div>
        <div className={styles['container']}>
          <MainUserInfoForm />
        </div>
        <div className={styles['container']}>
          <TurnNotifications bonusLabel={'+1.00 ₽'} />
        </div>
      </div>
    </SignUpDesktopTemplate>
  );
};
