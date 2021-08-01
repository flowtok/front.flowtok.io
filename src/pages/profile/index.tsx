import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useGetBloggerProfileDataQuery } from '../../types/graphql';
import { QueryHandler } from '../../components/handlers/QueryHandler';
import ProfileDesktop from './desktop/index';
import ProfileMobile from './mobile/index';

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const { data, loading, error } = useGetBloggerProfileDataQuery();

  return (
    <QueryHandler loading={loading} error={error}>
      {isDesktop ? <ProfileDesktop {...data} /> : <ProfileMobile {...data} />}
    </QueryHandler>
  );
};
