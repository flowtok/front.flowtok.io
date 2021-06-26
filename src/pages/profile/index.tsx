import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ProfileDesktop from './desktop/index';
import ProfileMobile from './mobile/index';
import { User } from '../../models/models';

interface ProfileProps {
  user: User;
}

export default ({ user }: ProfileProps) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  if (isDesktop) {
    return <ProfileDesktop {...user} />;
  } else {
    return <ProfileMobile {...user} />;
  }
};
