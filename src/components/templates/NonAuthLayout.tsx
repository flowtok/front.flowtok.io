import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/home';
import LoginPage from '../../pages/login';
import SignUpPage from '../../pages/signup';

type NonAuthLayoutPropsT = any;

export const NonAuthLayout: FC<NonAuthLayoutPropsT> = ({}) => {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
