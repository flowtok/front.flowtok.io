import { useWindowResize } from './useWindowResize';
import { useState } from 'react';
import {
  computeLargeDesktopAdaptiveValue,
  computeTabletAdaptiveValue,
  MAX_TABLET_CONTAINER,
  MIN_LARGE_DESKTOP_CONTAINER,
  MIN_TABLET_CONTAINER,
} from '../utils/mixins';

export type InitialAdaptiveValues = {
  mobile?: number;
  desktop?: number;
  largeDesktop?: number;
};

export const useAdaptiveCssValue = ({
  mobile = 0,
  desktop = 0,
  largeDesktop = 0,
}: InitialAdaptiveValues) => {
  const getCurrentValue = (width: number) => {
    if (width > MIN_LARGE_DESKTOP_CONTAINER) {
      return computeLargeDesktopAdaptiveValue(largeDesktop, width);
    } else if (width > MAX_TABLET_CONTAINER) {
      return desktop;
    } else if (width > MIN_TABLET_CONTAINER) {
      return computeTabletAdaptiveValue(mobile, width);
    } else {
      return mobile;
    }
  };

  const onWindowResize = (width: number) => {
    setValue(getCurrentValue(width));
  };

  const [value, setValue] = useState<number>(
    getCurrentValue(window.innerWidth)
  );

  useWindowResize(onWindowResize);

  return value;
};
