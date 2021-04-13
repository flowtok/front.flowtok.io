import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { NetworkButton } from '../../components/atoms/NetworkButton';
import { Link } from 'react-router-dom';
import { BlackButton } from '../../components/atoms/BlackButton';

export default () => {
  const { t } = useTranslation();
  return (
    <div className={styles['wrapper']}>
      <div className={styles['sign-in']}>
        <div className={styles['title']}>{t('login.enter')}</div>
        <div className={styles['column']}>
          <NetworkButton network={'vk'}>{t('login.sign-in-vk')}</NetworkButton>
          <NetworkButton network={'fb'}>{t('login.sign-in-fb')}</NetworkButton>
          <NetworkButton network={'gm'}>
            {t('login.sign-in-google')}
          </NetworkButton>
          <div className={styles['label']}>{t('login.no-account')}</div>
          <div className={styles['sign-up-btn']}>
            <Link to={'/reg'}>
              <BlackButton>{t('login.sign-up')}</BlackButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
