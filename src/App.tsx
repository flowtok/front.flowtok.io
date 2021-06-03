import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import SignUpPage from './pages/signup';
import TasksPage from './pages/tasks';
import LoginPage from './pages/login';
import SettingsPage from './pages/settings';
import { DonePopUpContent } from './components/molecules/PaymentMethodNotifications';
import { PopUp } from './components/molecules/PopUp';

export const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/*<PopUp isOpen={true} size={'s'}>*/}
      {/*  <DonePopUpContent />*/}
      {/*</PopUp>*/}
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
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
