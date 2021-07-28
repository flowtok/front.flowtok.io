import React, { forwardRef, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from 'assets/common/icons/logo.svg';
import { ProfileIcon } from '../Icons/ProfileIcon';
import { TasksIcon } from '../Icons/TasksIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { Avatar } from '../../../atoms/Avatar';
import { Divider } from '../../../atoms/Divider';
import { NotifyCircle } from '../../../atoms/NotifyCircle';
import { NetworkButton } from '../../../atoms/NetworkButton';
import { GeneralSettings } from '../../../../types/types.temp';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ProfileDataT } from '../../../molecules/SignUp/TikTokProfile';
import { useAdaptiveCssValue } from '../../../../hooks/useAdaptiveCssValue';

interface DesktopProps {
  generalSettings: GeneralSettings;
  profileData: Maybe<ProfileDataT>;
}

export const NavbarDesktop = forwardRef<
  HTMLDivElement,
  PropsWithChildren<DesktopProps>
>(({ generalSettings, profileData }, ref) => {
  const { pathname } = useLocation();

  const { userImage } = { ...profileData };
  const sizes = {
    desktop: 41,
  };
  return (
    <div className={styles['wrapper']} ref={ref}>
      <img src={logo} className={styles['logo']} alt="" />
      <div className={styles['sidebar-container']}>
        <div>
          <div className={styles['account']}>
            <Avatar image={userImage ?? ''} size={useAdaptiveCssValue(sizes)} />
          </div>
          <Divider />
          <div className={styles['nav']}>
            <Link to="/profile" className={styles['row-item']}>
              <ProfileIcon color={'#000'} isActive={pathname === '/profile'} />
            </Link>
            <NotifyCircle value={3}>
              <Link to="/tasks" className={styles['row-item']}>
                <TasksIcon color={'#000'} isActive={pathname === '/tasks'} />
              </Link>
            </NotifyCircle>
            <Link to="/settings" className={styles['row-item']}>
              <SettingsIcon
                color={'#000'}
                isActive={pathname === '/settings'}
              />
            </Link>
          </div>
        </div>
        <Divider />
        <div className={styles['networks']}>
          <NetworkButton
            href={generalSettings?.vk ?? ''}
            preset="light"
            network={'vk-light'}
          />
          <NetworkButton
            href={generalSettings?.telegram ?? ''}
            preset="light"
            network={'t-light'}
          />
          <NetworkButton
            href={generalSettings?.instagram ?? ''}
            preset="light"
            network={'i-light'}
          />
        </div>
      </div>
    </div>
  );
});
