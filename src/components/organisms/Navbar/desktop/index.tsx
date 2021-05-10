import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from 'assets/common/icons/logo.svg';
import avatar from 'assets/common/images/avatar_mock.png';
import { ProfileIcon } from '../Icons/ProfileIcon';
import { TasksIcon } from '../Icons/TasksIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { Avatar } from '../../../atoms/Avatar';
import { Divider } from '../../../atoms/Divider';
import { Notification } from '../../../atoms/Notifacation';
import { NetworkButton } from '../../../atoms/NetworkButton';

export const NavbarDesktop = forwardRef<HTMLDivElement>(({}, ref) => {
  const { pathname } = useLocation();

  return (
    <div className={styles['wrapper']} ref={ref}>
      <div className={styles['account']}>
        <img src={logo} className={styles['logo']} />
        <Avatar image={avatar} size={41} />
      </div>
      <Divider />
      <div className={styles['nav']}>
        <Link to="/profile" className={styles['row-item']}>
          <ProfileIcon color={'#000'} isActive={pathname === '/profile'} />
        </Link>
        <Notification value={3}>
          <Link to="/task" className={styles['row-item']}>
            <TasksIcon color={'#000'} isActive={pathname === '/tasks'} />
          </Link>
        </Notification>
        <Link to="/settings" className={styles['row-item']}>
          <SettingsIcon color={'#000'} isActive={pathname === '/settings'} />
        </Link>
      </div>
      <Divider />
      <div className={styles['networks']}>
        <NetworkButton preset="light" network={'vk-light'} />
        <NetworkButton preset="light" network={'t-light'} />
        <NetworkButton preset="light" network={'i-light'} />
      </div>
    </div>
  );
});
