import { forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useGetNavbarDataQuery } from '@/types/graphql';
import { QueryHandler } from '@components/handlers/QueryHandler';
import { ErrorHandler } from '../../handlers/ErrorHandler';
import { NavbarDesktopLarge } from './desktopLarge';
import { NavbarDesktop } from './desktop';
import { NavbarMobile } from './mobile';

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
