import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProfilePage from '../../pages/profile';
import TasksPage from '../../pages/tasks';
import SettingsPage from '../../pages/settings';
import HomePage from '../../pages/home';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from '../../api/cache';

type BloggerLayoutPropsT = any;

const BloggerLayout: FC<BloggerLayoutPropsT> = ({}) => {
  const user = useReactiveVar(currentUserVar);

  return (
    <Switch>
      <Route path="/profile">{user && <ProfilePage user={user} />}</Route>
      <Route path="/tasks">
        <TasksPage />
      </Route>
      <Route path="/settings">
        <SettingsPage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/">
        <Redirect to={'/profile'} />
      </Route>
    </Switch>
  );
};

export default BloggerLayout;
