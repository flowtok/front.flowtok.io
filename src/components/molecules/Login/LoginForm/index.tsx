import React, { FC } from 'react';
import styles from './styles.module.scss';
import { NetworkButton } from '../../../atoms/NetworkButton';
import { Link } from 'react-router-dom';
import { Button } from '../../../atoms/Button';
import { useTranslation } from 'react-i18next';

type SignUpFormPropsT = any;

export const LoginForm: FC<SignUpFormPropsT> = ({}) => {
  const { t } = useTranslation();
  return (
    <div className={styles['sign-in']}>
      <div className={styles['title']}>{t('pages.login.enter')}</div>
      <div className={styles['column']}>
        <NetworkButton network={'vk'}>
          {t('pages.login.sign-in-vk')}
        </NetworkButton>
        <NetworkButton network={'fb'}>
          {t('pages.login.sign-in-fb')}
        </NetworkButton>
        <NetworkButton network={'gm'}>
          {t('pages.login.sign-in-google')}
        </NetworkButton>
        <div className={styles['label']}>{t('pages.login.no-account')}</div>
        <Link to={'/signup'} className={styles['sign-up-link']}>
          <Button
            preset={'black'}
            className={styles['sign-up-btn']}
            radius={48}
            size={'sm'}
          >
            {t('pages.login.sign-up')}
          </Button>
        </Link>
      </div>
    </div>
  );
};
