import React, { forwardRef } from 'react';
import { NavbarMobile } from './mobile';
import { useMediaQuery } from 'react-responsive';
import { NavbarDesktop } from './desktop';
import { NavbarDesktopLarge } from './desktopLarge';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from '../../../api/cache';

export const Navbar = forwardRef<HTMLDivElement>(({}, ref) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1440px)' });
  const user = useReactiveVar(currentUserVar);

  const getNavbarComponent = () => {
    if (user) {
      if (isDesktopLarge) {
        return (
          <NavbarDesktopLarge
            user={user}
            generalSettings={{
              facebook: 'https://www.facebook.com/',
              telegram: 'https://web.telegram.org',
              instagram: 'https://www.instagram.com/',
            }}
            ref={ref}
          />
        );
      } else if (isDesktop) {
        return (
          <NavbarDesktop
            user={user}
            generalSettings={{
              facebook: 'https://www.facebook.com/',
              telegram: 'https://web.telegram.org',
              instagram: 'https://www.instagram.com/',
            }}
            ref={ref}
          />
        );
      } else {
        return <NavbarMobile ref={ref} />;
      }
    }
  };

  return <>{getNavbarComponent()}</>;
});
