import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProfilePage from '../../pages/profile';
import TasksPage from '../../pages/tasks';
import SettingsPage from '../../pages/settings';
import HomePage from '../../pages/home';
import { useMeQuery } from '../../types/graphql';

const BloggerLayout: FC = () => {
  const { data } = useMeQuery();

  return (
    <>
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
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/">
          <Redirect to={'/profile'} />
        </Route>
      </Switch>
      {/*<VerificationPopup isVerified={!!data?.me?.verifiedTikTok} />*/}
    </>
  );
};

export default BloggerLayout;
