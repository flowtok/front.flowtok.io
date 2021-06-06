import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/home';

type AdvertiserLayoutPropsT = any;

export const AdvertiserLayout: FC<AdvertiserLayoutPropsT> = ({}) => {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
