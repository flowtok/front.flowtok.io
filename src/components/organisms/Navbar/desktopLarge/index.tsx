import React, { forwardRef, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from 'assets/common/icons/logo_desktop.svg';
import { ProfileInfo } from '../../../molecules/ProfileInfo';
import { Divider } from '../../../atoms/Divider';
import { ProfileIcon } from '../Icons/ProfileIcon';
import { NotifyCircle } from '../../../atoms/NotifyCircle';
import { TasksIcon } from '../Icons/TasksIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { useTranslation } from 'react-i18next';
import { NetworkButton } from '../../../atoms/NetworkButton';
import { GeneralSettings } from '../../../../types/types.temp';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ProfileDataT } from '../../../molecules/SignUp/TikTokProfile';

interface DesktopLargeProps {
  generalSettings: GeneralSettings;
  profileData: Maybe<ProfileDataT>;
}

export const NavbarDesktopLarge = forwardRef<
  HTMLDivElement,
  PropsWithChildren<DesktopLargeProps>
>(({ generalSettings, profileData }, ref) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  return (
    <div className={styles['wrapper']} ref={ref}>
      <div>
        <img src={logo} className={styles['logo']} alt="" />
        <div className={styles['account']}>
          <ProfileInfo
            profileData={profileData}
            isActivated={true}
            avatarSizes={{
              largeDesktop: 120,
            }}
            size={'large'}
          />
        </div>
        <Divider />
        <div className={styles['nav']}>
          <Link to="/profile" className={styles['row-item']}>
            <ProfileIcon
              isLarge={true}
              color={'#000'}
              isActive={pathname === '/profile'}
            />
            <span
              style={pathname === '/profile' ? { color: '#7633F0' } : {}}
              className={styles['link-title']}
            >
              {t('header.profile.title')}
            </span>
          </Link>
          <NotifyCircle value={3}>
            <Link to="/tasks" className={styles['row-item']}>
              <TasksIcon
                color={'#000'}
                isActive={pathname === '/tasks'}
                isLarge={true}
              />
              <span
                style={pathname === '/tasks' ? { color: '#7633F0' } : {}}
                className={styles['link-title']}
              >
                {t('header.tasks.title')}
              </span>
            </Link>
          </NotifyCircle>
          <Link to="/settings" className={styles['row-item']}>
            <SettingsIcon
              color={'#000'}
              isActive={pathname === '/settings'}
              isLarge={true}
            />
            <span
              style={pathname === '/settings' ? { color: '#7633F0' } : {}}
              className={styles['link-title']}
            >
              {t('header.settings.title')}
            </span>
          </Link>
        </div>
        <Divider />
        <div className={styles['networks']}>
          <NetworkButton
            href={generalSettings?.vk ?? ''}
            preset="light"
            network={'vk-large'}
          />
          <NetworkButton
            href={generalSettings?.telegram ?? ''}
            preset="light"
            network={'t-large'}
          />
          <NetworkButton
            href={generalSettings?.instagram ?? ''}
            preset="light"
            network={'i-large'}
          />
        </div>
      </div>
      <div className={styles['copyright']}>© FlowTok. All Rights Reserved.</div>
    </div>
  );
});
