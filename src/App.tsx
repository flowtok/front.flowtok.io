import React, { Suspense, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthLayout } from './components/templates/AuthLayout';

import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import SignUpPage from './pages/signup';
import TasksPage from './pages/tasks';
import LoginPage from './pages/login';
import SettingsPage from './pages/settings';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from './api/cache';

export const App = () => {
  const user = useReactiveVar(currentUserVar);
  const userFromStorage = localStorage.getItem('user');

  useEffect(() => {
    if (userFromStorage !== undefined) {
      if (typeof userFromStorage === 'string') {
        currentUserVar(JSON.parse(userFromStorage));
      }
    }
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/profile" /> : <HomePage />}
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/profile" /> : <LoginPage />}
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/profile">{user && <ProfilePage user={user} />}</Route>
          <Route path="/tasks">
            <TasksPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
