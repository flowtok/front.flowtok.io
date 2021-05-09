import React from 'react';
import styles from './styles.module.scss';
import { SignUpDesktopTemplate } from '../../../components/templates/SignUpDesktopTempate';
import videoMp4 from '../../../assets/login/videos/login_video.mp4';
import videoOgv from '../../../assets/login/videos/login_video.ogv';
import videoWebm from '../../../assets/login/videos/login_video.webm';

type SignUpDesktopPropsT = any;

export default ({}: SignUpDesktopPropsT) => {
  return (
    <SignUpDesktopTemplate
      video={{
        mp4: videoMp4,
        ogv: videoOgv,
        webm: videoWebm,
      }}
      isReversed={true}
      isWhiteLogo={true}
    >
      <div>children</div>
    </SignUpDesktopTemplate>
  );
};
