import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from 'assets/common/icons/logo_desktop.svg';
import AvatarMock from '../../../../assets/common/images/avatar_mock.png';
import { ProfileInfo } from '../../../molecules/ProfileInfo';
import { Divider } from '../../../atoms/Divider';
import { ProfileIcon } from '../Icons/ProfileIcon';
import { Notification } from '../../../atoms/Notifacation';
import { TasksIcon } from '../Icons/TasksIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { useTranslation } from 'react-i18next';
import { NetworkButton } from '../../../atoms/NetworkButton';

export const NavbarDesktopLarge = forwardRef<HTMLDivElement>(({}, ref) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  /*will be deleted*/
  const blogger = {
    fullName: 'karinakrossssssssssssss',
    shortName: '@karinakross',
    avatar: AvatarMock,
  };
  return (
    <div className={styles['wrapper']} ref={ref}>
      <div>
        <img src={logo} className={styles['logo']} />
        <div className={styles['account']}>
          <ProfileInfo profileData={{ ...blogger }} isActivated={true} />
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
          <Notification value={3}>
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
          </Notification>
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
          <NetworkButton preset="light" network={'vk-large'} />
          <NetworkButton preset="light" network={'t-large'} />
          <NetworkButton preset="light" network={'i-large'} />
        </div>
      </div>
      <div className={styles['copyright']}>© FlowTok. All Rights Reserved.</div>
    </div>
  );
});
