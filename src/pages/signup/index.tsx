import { useTranslation } from 'react-i18next';
import { PageTemplate } from 'components/templates/Page';
import { Switch } from 'components/atoms/Switch';
import { useState } from 'react';
import styles from './styles.module.scss';
import { NetworkButton } from '../../components/atoms/NetworkButton';
import { Divider } from '../../components/atoms/Divider';
import { TikTokProfile } from '../../components/molecules/SignUp/TikTokProfile';
import { Form } from '../../components/molecules/SignUp/Form';
import avatar from '../../assets/common/images/avatar_mock.png';

export default () => {
  const { t } = useTranslation();

  const [isBonus, setIsBonus] = useState(true);

  const onSwitch = () => {
    setIsBonus((prev) => !prev);
  };

  return (
    <PageTemplate
      headerProps={{
        title: t('header.signup.title'),
        withAvatar: false,
        withBackArrow: true,
      }}
      extendedStyleProps={{
        paddingTop: 0,
      }}
    >
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
              fullName: 'karinakross',
              shortName: '@karinakross',
              avatar,
            }}
          />
        </div>
        <Divider direction={'horizontal'} />
        <div className={styles['container']}>
          <Form />
        </div>
        <Divider direction={'horizontal'} />
        <Switch
          label={isBonus ? '+ 1.00 ₽' : ''}
          onChange={onSwitch}
          defaultChecked={isBonus}
        />
      </div>
    </PageTemplate>
  );
};
