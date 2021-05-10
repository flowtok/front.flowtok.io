import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import { ProfileIcon } from '../Icons/ProfileIcon';
import { TasksIcon } from '../Icons/TasksIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { useTranslation } from 'react-i18next';

export const NavbarMobile = forwardRef<HTMLDivElement>(({}, ref) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <div className={styles['wrapper']} ref={ref}>
      <div className={styles['row']}>
        <Link to="/profile" className={styles['row-item']}>
          <ProfileIcon isActive={pathname === '/profile'} />
          <p className={styles['label']}>{t('header.profile.title')}</p>
        </Link>
        <Link to="/tasks" className={styles['row-item']}>
          <TasksIcon isActive={pathname === '/tasks'} />
          <p className={styles['label']}>{t('header.tasks.title')}</p>
        </Link>
        <Link to="/settings" className={styles['row-item']}>
          <SettingsIcon isActive={pathname === '/settings'} />
          <p className={styles['label']}>{t('header.settings.title')}</p>
        </Link>
      </div>
    </div>
  );
});
