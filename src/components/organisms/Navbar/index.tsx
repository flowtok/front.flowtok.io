import React, { forwardRef } from 'react';
import { NavbarMobile } from './mobile';
import { useMediaQuery } from 'react-responsive';
import { NavbarDesktop } from './desktop';
import { NavbarDesktopLarge } from './desktopLarge';
import { useGetNavbarDataQuery } from '../../../types/graphql';
import { QueryHandler } from '../../handlers/QueryHandler';
import { ErrorHandler } from '../../handlers/ErrorHandler';

type NavbarPropsT = any;

export const Navbar = forwardRef<HTMLDivElement, NavbarPropsT>(({}, ref) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1440px)' });
  const { loading, data, error } = useGetNavbarDataQuery();

  const getNavbarComponent = () => {
    if (isDesktopLarge) {
      return (
        <NavbarDesktopLarge
          profileData={data?.me}
          generalSettings={{
            vk: process.env.REACT_APP_NETWORK_VK,
            telegram: process.env.REACT_APP_NETWORK_TELEGRAM,
            instagram: process.env.REACT_APP_NETWORK_INSTAGRAM,
          }}
          ref={ref}
        />
      );
    } else if (isDesktop) {
      return (
        <NavbarDesktop
          profileData={data?.me}
          generalSettings={{
            vk: process.env.REACT_APP_NETWORK_VK,
            telegram: process.env.REACT_APP_NETWORK_TELEGRAM,
            instagram: process.env.REACT_APP_NETWORK_INSTAGRAM,
          }}
          ref={ref}
        />
      );
    } else {
      return <NavbarMobile ref={ref} />;
    }
  };

  return (
    <ErrorHandler>
      <QueryHandler loading={loading} error={error}>
        {getNavbarComponent()}
      </QueryHandler>
    </ErrorHandler>
  );
});
