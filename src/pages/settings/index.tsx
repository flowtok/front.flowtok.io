import React from 'react';
import { useMediaQuery } from 'react-responsive';

import SettingsDesktop from './desktop';
import SettingsMobile from './mobile/';

export default () => {
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1024px)' });

  if (isDesktopLarge) {
    return <SettingsDesktop />;
  } else {
    return <SettingsMobile />;
  }
};
