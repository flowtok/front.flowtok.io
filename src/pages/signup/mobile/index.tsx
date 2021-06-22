import { useTranslation } from 'react-i18next';
import { PageTemplate } from 'components/templates/Page';
import styles from './styles.module.scss';
import {
  NetworkButton,
  NetworkT,
} from '../../../components/atoms/NetworkButton';
import { Divider } from '../../../components/atoms/Divider';
import { TikTokProfile } from '../../../components/molecules/SignUp/TikTokProfile';
import avatar from '../../../assets/common/images/avatar_mock.png';
import { MainUserInfoForm } from '../../../components/molecules/SignUp/MainUserInfoForm';
import { TurnNotifications } from '../../../components/molecules/SignUp/TurnNotifications';
import React from 'react';
import { SignUpPropsT } from '../desktop';

export default ({ registerType }: SignUpPropsT) => {
  const { t } = useTranslation();

  return (
    <PageTemplate
      headerProps={{
        title: t('header.signup.title'),
        withAvatar: false,
        withBackArrow: true,
        withSeparator: true,
      }}
      extendedStyleProps={{
        paddingTop: 0,
      }}
    >
      <div className={styles['wrapper']}>
        <div className={styles['container']}>
          <NetworkButton
            network={String(registerType) as NetworkT}
            preset={'colored'}
          >
            {t(`pages.signup.buttons.sign-up-${registerType}`)}
          </NetworkButton>
        </div>
        <Divider direction={'horizontal'} />
        <div className={styles['container']}>
          <TikTokProfile handleVerify={() => console.log('dsa')} />
        </div>
        <Divider direction={'horizontal'} />
        <div className={styles['container']}>
          <MainUserInfoForm isVerify={true} />
        </div>
        <Divider direction={'horizontal'} />
        <div className={styles['container']}>
          <TurnNotifications />
        </div>
        <Divider direction={'horizontal'} />
      </div>
    </PageTemplate>
  );
};
