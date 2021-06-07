import React, { forwardRef, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from 'assets/common/icons/logo.svg';
import { ProfileIcon } from '../Icons/ProfileIcon';
import { TasksIcon } from '../Icons/TasksIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { Avatar } from '../../../atoms/Avatar';
import { Divider } from '../../../atoms/Divider';
import { Notification } from '../../../atoms/Notifacation';
import { NetworkButton } from '../../../atoms/NetworkButton';
import { GeneralSettings, User } from '../../../../models/models';

interface DesktopProps {
  data: { user: User; generalSettings: GeneralSettings };
}

export const NavbarDesktop = forwardRef<
  HTMLDivElement,
  PropsWithChildren<DesktopProps>
>(({ data }, ref) => {
  const { pathname } = useLocation();

  return (
    <div className={styles['wrapper']} ref={ref}>
      <img src={logo} className={styles['logo']} alt="" />
      <div className={styles['sidebar-container']}>
        <div>
          <div className={styles['account']}>
            <Avatar image={data.user?.userImage} size={41} />
          </div>
          <Divider />
          <div className={styles['nav']}>
            <Link to="/profile" className={styles['row-item']}>
              <ProfileIcon color={'#000'} isActive={pathname === '/profile'} />
            </Link>
            <Notification value={3}>
              <Link to="/tasks" className={styles['row-item']}>
                <TasksIcon color={'#000'} isActive={pathname === '/tasks'} />
              </Link>
            </Notification>
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
            href={data.generalSettings?.facebook ?? ''}
            preset="light"
            network={'vk-light'}
          />
          <NetworkButton
            href={data.generalSettings?.telegram ?? ''}
            preset="light"
            network={'t-light'}
          />
          <NetworkButton
            href={data.generalSettings?.instagram ?? ''}
            preset="light"
            network={'i-light'}
          />
        </div>
      </div>
    </div>
  );
});
