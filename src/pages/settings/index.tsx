import React from 'react';
import { useMediaQuery } from 'react-responsive';

import SettingsDesktop from './desktop';
import SettingsMobile from './mobile/';

export default () => {
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1920px)' });

  if (isDesktopLarge) {
    return <SettingsDesktop />;
  }
  return <SettingsMobile />;
};
