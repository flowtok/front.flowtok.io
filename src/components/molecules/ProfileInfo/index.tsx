import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Avatar } from '../../atoms/Avatar';
import check from '../../../assets/common/icons/check.svg';
import { useMediaQuery } from 'react-responsive';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ProfileDataT } from '../SignUp/TikTokProfile';

type TikTokProfileInfoPropsT = {
  profileData: Maybe<ProfileDataT>;
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

  const { userImage, name, tagName } = { ...profileData };

  return (
    <div className={styles['row']}>
      <Avatar image={String(userImage)} size={isDesktopLarge ? '' : 48} />
      <div className={styles['column']}>
        <div className={styles['title-group']}>
          <span className={styles['title']}>{String(name)}</span>
          {activatedIcon}
        </div>
        <div className={styles['subtitle']}>{String(tagName)}</div>
      </div>
    </div>
  );
};
