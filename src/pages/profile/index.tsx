import React from 'react';
import { useMediaQuery } from 'react-responsive';

import ProfileDesktop from './desktop/index';
import ProfileMobile from './mobile/index';

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  if (isDesktop) {
    return <ProfileDesktop />;
  }
  return <ProfileMobile />;
};
