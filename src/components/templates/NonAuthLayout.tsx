import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/home';
import LoginPage from '../../pages/login';
import SignUpPage from '../../pages/signup';
import { AuthHandler } from './AuthHandler';

type NonAuthLayoutPropsT = any;

const NonAuthLayout: FC<NonAuthLayoutPropsT> = ({}) => {
  const token = localStorage.getItem('token');
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        {token ? <SignUpPage /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/auth/">
        <AuthHandler />
      </Route>
      <Route path="/">
        <Redirect to={'/'} />
      </Route>
    </Switch>
  );
};

export default NonAuthLayout;
