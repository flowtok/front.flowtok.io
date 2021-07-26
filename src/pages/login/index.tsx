import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useReactiveVar } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { tokenExistVar } from '../../graphql/local-state';

const LoginDesktop = React.lazy(() => import('./desktop/index'));
const LoginMobile = React.lazy(() => import('./mobile/index'));

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const tokenExist = useReactiveVar(tokenExistVar);

  if (tokenExist) return <Redirect to={'/signup'} />;

  if (isDesktop) {
    return <LoginDesktop />;
  } else {
    return <LoginMobile />;
  }
};
