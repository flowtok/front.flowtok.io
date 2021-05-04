import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ProfileIcon } from './Icons/ProfileIcon';
import { TasksIcon } from './Icons/TasksIcon';
import { SettingsIcon } from './Icons/SettingsIcon';
import { useTranslation } from 'react-i18next';

export const Navbar = forwardRef<HTMLDivElement>(({}, ref) => {
  const { t } = useTranslation();
  return (
    <div className={styles['wrapper']} ref={ref}>
      <div className={styles['row']}>
        <Link to="/profile" className={styles['row-item']}>
          <ProfileIcon />
          <p className={styles['label']}>{t('header.profile.title')}</p>
        </Link>
        <Link to="/tasks" className={styles['row-item']}>
          <TasksIcon />
          <p className={styles['label']}>{t('header.tasks.title')}</p>
        </Link>
        <Link to="/settings" className={styles['row-item']}>
          <SettingsIcon />
          <p className={styles['label']}>{t('header.settings.title')}</p>
        </Link>
      </div>
    </div>
  );
});
