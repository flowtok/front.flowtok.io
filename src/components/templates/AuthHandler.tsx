import React, { FC, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { isRegisteredVar, tokenExistVar } from '../../api/cache';
import { useReactiveVar } from '@apollo/client';

type OAuthHandlerPropsT = any;

export const AuthHandler: FC<OAuthHandlerPropsT> = ({}) => {
  debugger;

  const { token, registered } = useParams<{
    token: string;
    registered: string;
  }>();

  const isRegistered = useReactiveVar(isRegisteredVar);
  const tokenExist = useReactiveVar(tokenExistVar);

  useEffect(() => {
    console.log('token: ', token);
    console.log('registered: ', registered);
    if (token) {
      localStorage.setItem('token', token);
      tokenExistVar(true);
    }
    localStorage.setItem('registered', registered);
    if (registered === 'true') {
      isRegisteredVar(true);
    }
  }, [token, registered]);

  if (tokenExist) {
    if (isRegistered) {
      return <Redirect to={'/profile'} />;
    } else {
      return <Redirect to={'/signup'} />;
    }
  } else {
    return <>Loading</>;
  }
};
