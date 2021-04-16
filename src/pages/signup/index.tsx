import { useTranslation } from 'react-i18next';
import { PageTemplate } from 'components/templates/Page';
import { Switch } from 'components/atoms/Switch';
import { useState } from 'react';
import { Input } from '../../components/atoms/Input';
import styles from './styles.module.scss';
import { NetworkButton } from '../../components/atoms/NetworkButton';
import { Divider } from '../../components/atoms/Divider';

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
          <Input error={'Ссылка некорректна'} />
          <div className={styles['row']}></div>
        </div>
        <Switch
          label={isBonus ? '+ 1.00 ₽' : ''}
          onChange={onSwitch}
          defaultChecked={isBonus}
        />
      </div>
    </PageTemplate>
  );
};
