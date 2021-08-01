import React from 'react';
import videoMp4 from '../../../assets/login/videos/login_video.mp4';
import videoOgv from '../../../assets/login/videos/login_video.ogv';
import videoWebm from '../../../assets/login/videos/login_video.webm';
import { LoginForm } from '../../../components/molecules/Login/LoginForm';
import styles from './styles.module.scss';

export default () => {
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
      <LoginForm />
    </div>
  );
};
