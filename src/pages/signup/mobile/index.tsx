import { useTranslation } from 'react-i18next';
import { PageTemplate } from 'components/templates/Page';
import React from 'react';
import {
  NetworkButton,
  NetworkT,
} from '../../../components/atoms/NetworkButton';
import { Divider } from '../../../components/atoms/Divider';
import { TikTokProfile } from '../../../components/molecules/SignUp/TikTokProfile';
import { MainUserInfoForm } from '../../../components/molecules/SignUp/MainUserInfoForm';
import { TurnNotifications } from '../../../components/molecules/SignUp/TurnNotifications';
import { SignUpPropsT } from '../desktop';
import styles from './styles.module.scss';

export default ({
  registerType,
  setTikTokIsFound,
  tikTokIsFound,
}: SignUpPropsT) => {
  const { t } = useTranslation();

  return (
    <PageTemplate
      headerProps={{
        title: t('header.signup.title'),
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
          <TikTokProfile
            setTikTokIsFound={(isFound) => {
              setTikTokIsFound(isFound);
            }}
          />
        </div>
        <Divider direction={'horizontal'} />
        <div className={styles['container']}>
          <MainUserInfoForm tikTokIsFound={tikTokIsFound} />
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
