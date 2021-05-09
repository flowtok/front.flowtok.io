import { useTranslation } from 'react-i18next';
import { PageTemplate } from 'components/templates/Page';
import styles from './styles.module.scss';
import { NetworkButton } from '../../../components/atoms/NetworkButton';
import { Divider } from '../../../components/atoms/Divider';
import { TikTokProfile } from '../../../components/molecules/SignUp/TikTokProfile';
import { SignUpForm } from '../../../components/molecules/SignUp/SignUpForm';
import avatar from '../../../assets/common/images/avatar_mock.png';
import { TurnNotifications } from '../../../components/molecules/SignUp/TurnNotifications';

export default () => {
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
        <div>
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
            <SignUpForm />
          </div>
          <Divider direction={'horizontal'} />
          <div className={styles['container']}>
            <TurnNotifications />
          </div>
          <Divider direction={'horizontal'} />
        </div>
      </div>
    </PageTemplate>
  );
};
