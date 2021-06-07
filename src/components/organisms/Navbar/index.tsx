import React, { forwardRef } from 'react';
import { NavbarMobile } from './mobile';
import { useMediaQuery } from 'react-responsive';
import { NavbarDesktop } from './desktop';
import { NavbarDesktopLarge } from './desktopLarge';
import { gql, useQuery } from '@apollo/client';
import { GeneralSettings, User } from '../../../models/models';
import { QueryHandler } from '../../templates/QueryHandler';

const DATA = gql`
  query getData($id: ID!) {
    user(id: $id) {
      name
      tagName
      userImage
    }
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
  const { loading, error, data } = useQuery(DATA, {
    variables: {
      id: '1',
    },
  });

  const getNavbarComponent = (
    data: { user: User; generalSettings: GeneralSettings } | undefined
  ) => {
    if (data?.user) {
      if (isDesktopLarge) {
        return <NavbarDesktopLarge data={data} ref={ref} />;
      } else if (isDesktop) {
        return <NavbarDesktop data={data} ref={ref} />;
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
