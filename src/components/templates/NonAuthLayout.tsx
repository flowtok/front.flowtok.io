import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/home';
import LoginPage from '../../pages/login';
import SignUpPage from '../../pages/signup';
import { OAuthHandler } from './OAuthHandler';

type NonAuthLayoutPropsT = any;

export const NonAuthLayout: FC<NonAuthLayoutPropsT> = ({}) => {
  return (
    <Switch>
      <Route path="/oauth/:token?/:registered?">
        <OAuthHandler />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/">
        <Redirect to={'/'} />
      </Route>
    </Switch>
  );
};
