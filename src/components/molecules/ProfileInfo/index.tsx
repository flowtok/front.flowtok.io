import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Avatar } from '../../atoms/Avatar';
import check from '../../../assets/common/icons/check.svg';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ProfileDataT } from '../SignUp/TikTokProfile';
import { useTranslation } from 'react-i18next';
import {
  InitialAdaptiveValues,
  useAdaptiveCssValue,
} from '../../../hooks/useAdaptiveCssValue';

type TikTokProfileInfoPropsT = {
  profileData: Maybe<ProfileDataT>;
  isActivated?: boolean;
  onChangeAccount?: () => void;
  withChangeLink?: boolean;
  avatarSizes?: InitialAdaptiveValues;
  size?: 'small' | 'large';
};
export const ProfileInfo: FC<TikTokProfileInfoPropsT> = ({
  profileData,
  onChangeAccount,
  withChangeLink,
  avatarSizes,
  isActivated = false,
  size = 'small',
}) => {
  const { t } = useTranslation();
  const { userImage, name, tagName } = { ...profileData };
  const sizes = avatarSizes
    ? avatarSizes
    : {
        mobile: 48,
        desktop: 48,
        largeDesktop: 52,
      };

  return (
    <div className={`${styles['row']} ${styles[size]}`}>
      <div className={styles['left']}>
        <Avatar image={String(userImage)} size={useAdaptiveCssValue(sizes)} />
        <div className={styles['column']}>
          <div className={styles['title-group']}>
            <span className={styles['title']}>{String(name)}</span>
            {isActivated && (
              <span className={styles['active-icon']}>
                <img src={check} alt={''} />
              </span>
            )}
          </div>
          <div className={styles['subtitle']}>{String(tagName)}</div>
        </div>
      </div>
      {withChangeLink && (
        <div className={styles['right']}>
          <div className={styles['link']} onClick={onChangeAccount}>
            {t('pages.signup.buttons.change')}
          </div>
        </div>
      )}
    </div>
  );
};
