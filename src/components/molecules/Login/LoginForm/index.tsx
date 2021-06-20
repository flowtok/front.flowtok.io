import React, { FC } from 'react';
import styles from './styles.module.scss';
import { NetworkButton } from '../../../atoms/NetworkButton';
import { useTranslation } from 'react-i18next';

type SignUpFormPropsT = any;

export const LoginForm: FC<SignUpFormPropsT> = ({}) => {
  const loginHandler = (network: string) => {
    localStorage.setItem('registerType', network);
    document.location.href = `${process.env.REACT_APP_API_URL}/oauth/${network}/blog/127.0.0.1:3000`;
    localStorage.setItem('registered', 'false');
  };

  const { t } = useTranslation();
  return (
    <div className={styles['sign-in']}>
      <div className={styles['title']}>{t('pages.login.enter')}</div>
      <div className={styles['column']}>
        <NetworkButton network={'vk'} onClick={() => loginHandler('vk')}>
          {t('pages.login.sign-in-vk')}
        </NetworkButton>
        <NetworkButton network={'fb'} onClick={() => loginHandler('fb')}>
          {t('pages.login.sign-in-fb')}
        </NetworkButton>
        <NetworkButton network={'gm'} onClick={() => loginHandler('google')}>
          {t('pages.login.sign-in-google')}
        </NetworkButton>
      </div>
    </div>
  );
};
