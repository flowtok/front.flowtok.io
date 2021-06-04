import React, { forwardRef } from 'react';
import { NavbarMobile } from './mobile';
import { useMediaQuery } from 'react-responsive';
import { NavbarDesktop } from './desktop';
import { NavbarDesktopLarge } from './desktopLarge';
import { gql, useQuery } from '@apollo/client';
import { User } from '../../../models/models';
import { QueryHandler } from '../../templates/QueryHandler';

interface GeneralSettings {
  facebook: string;
  telegram: string;
  instagram: string;
}

const DATA = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      name
      tagname
      user_image
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
        return <NavbarDesktop ref={ref} />;
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
