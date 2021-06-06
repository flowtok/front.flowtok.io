import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from '../../pages/profile';
import TasksPage from '../../pages/tasks';
import SettingsPage from '../../pages/settings';
import HomePage from '../../pages/home';

type BloggerLayoutPropsT = any;

export const BloggerLayout: FC<BloggerLayoutPropsT> = ({}) => {
  return (
    <Switch>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/tasks">
        <TasksPage />
      </Route>
      <Route path="/settings">
        <SettingsPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
