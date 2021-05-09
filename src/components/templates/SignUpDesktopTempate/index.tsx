import React, { FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import logo from '../../../assets/common/icons/logo_desktop.svg';

type SignUpTemplatePropsT = {
  video: {
    mp4: string;
    ogv: string;
    webm: string;
  };
  isReversed?: boolean;
  isWhiteLogo?: boolean;
};

export const SignUpDesktopTemplate: FC<SignUpTemplatePropsT> = ({
  children,
  isReversed,
  isWhiteLogo,
  video,
}) => {
  const { mp4, ogv, webm } = video;

  return (
    <div
      className={cn(styles['wrapper'], { [styles['reversed']]: isReversed })}
    >
      <img
        src={logo}
        alt=""
        className={cn(styles['logo'], { [styles['white']]: isWhiteLogo })}
      />
      <div className={styles['child-container']}>{children}</div>

      <div className={styles['video-wrap']}>
        <video
          controls={false}
          loop
          muted={true}
          autoPlay={false}
          className={styles['video']}
        >
          <source src={mp4} type='video/ogg; codecs="theora, vorbis"' />
          <source src={ogv} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
          <source src={webm} type='video/webm; codecs="vp8, vorbis"' />
        </video>
      </div>
    </div>
  );
};
