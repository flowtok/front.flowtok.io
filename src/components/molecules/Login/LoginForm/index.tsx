import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NetworkButton } from '../../../atoms/NetworkButton';
import styles from './styles.module.scss';

type SignUpFormPropsT = any;

export const LoginForm: FC<SignUpFormPropsT> = ({}) => {
  const loginHandler = (network: string) => {
    localStorage.setItem('registerType', network);
    // document.location.href = `${process.env.REACT_APP_API_URL}/oauth/${network}/blog/${process.env.REACT_APP_DOMAIN}`;
    document.location.href = `${process.env.REACT_APP_API_URL}/oauth/${network}/blog/${process.env.REACT_APP_MOBILE_DOMAIN}`;
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
