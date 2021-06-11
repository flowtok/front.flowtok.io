import React, { forwardRef } from 'react';
import { NavbarMobile } from './mobile';
import { useMediaQuery } from 'react-responsive';
import { NavbarDesktop } from './desktop';
import { NavbarDesktopLarge } from './desktopLarge';
import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { GeneralSettings } from '../../../models/models';
import { QueryHandler } from '../../templates/QueryHandler';
import { currentUserVar } from '../../../api/cache';

const DATA = gql`
  query getData {
    generalSettings {
      facebook
      telegram
      instagram
    }
  }
`;

export const Navbar = forwardRef<HTMLDivElement>(({}, ref) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isDesktopLarge = useMediaQuery({ query: '(min-width: 1440px)' });
  const { loading, error, data } = useQuery(DATA);
  const user = useReactiveVar(currentUserVar);

  const getNavbarComponent = (
    data: { generalSettings: GeneralSettings } | undefined
  ) => {
    if (data?.generalSettings && user) {
      if (isDesktopLarge) {
        return (
          <NavbarDesktopLarge
            user={user}
            generalSettings={data.generalSettings}
            ref={ref}
          />
        );
      } else if (isDesktop) {
        return (
          <NavbarDesktop
            user={user}
            generalSettings={data.generalSettings}
            ref={ref}
          />
        );
      } else {
        return <NavbarMobile ref={ref} />;
      }
    }
  };

  return (
    <QueryHandler loading={loading} error={error}>
      {getNavbarComponent(data)}
    </QueryHandler>
  );
});
