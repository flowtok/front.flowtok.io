import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { NetworkButton } from '../../components/atoms/NetworkButton';
import { Link } from 'react-router-dom';
import { BlackButton } from '../../components/atoms/BlackButton';
import videoMp4 from '../../assets/login/videos/login_video.mp4';
import videoOgv from '../../assets/login/videos/login_video.ogv';
import videoWebm from '../../assets/login/videos/login_video.webm';

export default () => {
  const { t } = useTranslation();
  return (
    <div className={styles['wrapper']}>
      <video
        controls={false}
        loop
        muted={true}
        autoPlay={false}
        className={styles['video']}
      >
        <source src={videoMp4} type='video/ogg; codecs="theora, vorbis"' />
        <source
          src={videoOgv}
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        <source src={videoWebm} type='video/webm; codecs="vp8, vorbis"' />
      </video>
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
