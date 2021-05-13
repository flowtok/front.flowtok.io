import React, { forwardRef } from 'react';
import { NavbarMobile } from './mobile';
import { useMediaQuery } from 'react-responsive';
import { NavbarDesktop } from './desktop';
import { NavbarDesktopLarge } from './desktopLarge';

export const Navbar = forwardRef<HTMLDivElement>(({}, ref) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1920px)' });

  if (isDesktopLarge) {
    return <NavbarDesktopLarge ref={ref} />;
  } else if (isDesktop) {
    return <NavbarDesktop ref={ref} />;
  } else {
    return <NavbarMobile ref={ref} />;
  }
});
