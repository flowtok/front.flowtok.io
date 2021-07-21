import React from 'react';
import styles from './styles.module.scss';
import { AuthenticationTemplate } from '../../../components/templates/AuthenticationTemplate';
import videoMp4 from '../../../assets/login/videos/login_video.mp4';
import videoOgv from '../../../assets/login/videos/login_video.ogv';
import videoWebm from '../../../assets/login/videos/login_video.webm';
import {
  NetworkButton,
  NetworkT,
} from '../../../components/atoms/NetworkButton';
import { TikTokProfile } from '../../../components/molecules/SignUp/TikTokProfile';
import { MainUserInfoForm } from '../../../components/molecules/SignUp/MainUserInfoForm';
import { TurnNotifications } from '../../../components/molecules/SignUp/TurnNotifications';
import { useTranslation } from 'react-i18next';

export type SignUpPropsT = {
  registerType: string | null;
  tikTokIsFound: boolean;
  setTikTokIsFound: (flag: boolean) => void;
};

export default ({
  registerType,
  tikTokIsFound,
  setTikTokIsFound,
}: SignUpPropsT) => {
  const { t } = useTranslation();

  return (
    <AuthenticationTemplate
      video={{
        mp4: videoMp4,
        ogv: videoOgv,
        webm: videoWebm,
      }}
    >
      <div className={styles['wrapper']}>
        <div className={styles['title']}>{t('header.signup.title')}</div>
        <div className={styles['container']}>
          <NetworkButton
            network={String(registerType) as NetworkT}
            preset={'colored'}
          >
            {t(`pages.signup.buttons.sign-up-${registerType}`)}
          </NetworkButton>
        </div>
        <div className={styles['container']}>
          <TikTokProfile
            setTikTokIsFound={(isFound) => {
              setTikTokIsFound(isFound);
            }}
          />
        </div>
        <div className={styles['container']}>
          <MainUserInfoForm tikTokIsFound={tikTokIsFound} />
        </div>
        <div className={styles['container']}>
          <TurnNotifications bonusLabel={'+1.00 ₽'} />
        </div>
      </div>
    </AuthenticationTemplate>
  );
};
