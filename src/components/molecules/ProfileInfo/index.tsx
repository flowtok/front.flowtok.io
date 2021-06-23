import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Avatar } from '../../atoms/Avatar';
import check from '../../../assets/common/icons/check.svg';
import { useMediaQuery } from 'react-responsive';

type TikTokProfileInfoPropsT = {
  profileData: {
    fullName: string;
    shortName: string;
    avatar: string;
  };
  isActivated?: boolean;
};

export const ProfileInfo: FC<TikTokProfileInfoPropsT> = ({
  profileData,
  isActivated = false,
}) => {
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1440px)' });
  let activatedIcon = null;
  if (isActivated) {
    activatedIcon = (
      <span className={styles['active-icon']}>
        <img src={check} alt={''} />
      </span>
    );
  }

  return (
    <div className={styles['row']}>
      <Avatar image={profileData.avatar} size={isDesktopLarge ? '' : 48} />
      <div className={styles['column']}>
        <div className={styles['title-group']}>
          <span className={styles['title']}>{profileData.fullName}</span>
          {activatedIcon}
        </div>
        <div className={styles['subtitle']}>{profileData.shortName}</div>
      </div>
    </div>
  );
};
