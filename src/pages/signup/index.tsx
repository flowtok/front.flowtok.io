import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from '../../api/cache';

const SignUpDesktop = React.lazy(() => import('./desktop/index'));
const SignUpMobile = React.lazy(() => import('./mobile/index'));

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const registerType = localStorage.getItem('registerType');
  const [tikTokIsFound, setTikTokIsFound] = useState<boolean>(false);
  const userData = useReactiveVar(currentUserVar);
  const tikTokProfileData = userData
    ? {
        name: userData.name,
        tagName: userData.tagName,
        userImage: userData.userImage,
      }
    : undefined;

  if (isDesktop) {
    return (
      <SignUpDesktop
        registerType={registerType}
        tikTokIsFound={tikTokIsFound}
        setTikTokIsFound={setTikTokIsFound}
      />
    );
  } else {
    return (
      <SignUpMobile
        registerType={registerType}
        tikTokIsFound={tikTokIsFound}
        setTikTokIsFound={setTikTokIsFound}
      />
    );
  }
};
