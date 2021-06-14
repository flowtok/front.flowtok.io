import React, { FC, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { isRegisteredVar, tokenExistVar } from '../../api/cache';
import { useReactiveVar } from '@apollo/client';

type OAuthHandlerPropsT = any;

export const OAuthHandler: FC<OAuthHandlerPropsT> = ({}) => {
  const { token, registered } = useParams<{
    token: string;
    registered: string;
  }>();

  const isRegistered = useReactiveVar(isRegisteredVar);
  const tokenExist = useReactiveVar(tokenExistVar);

  useEffect(() => {
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
