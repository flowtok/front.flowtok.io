import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ProfileDesktop from './desktop/index';
import ProfileMobile from './mobile/index';
import { useGetBloggerProfileDataQuery } from '../../types/graphql';
import { QueryHandler } from '../../components/templates/QueryHandler';

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const { data, loading, error } = useGetBloggerProfileDataQuery();

  return (
    <QueryHandler loading={loading} error={error}>
      {isDesktop ? <ProfileDesktop {...data} /> : <ProfileMobile {...data} />}
    </QueryHandler>
  );
};
