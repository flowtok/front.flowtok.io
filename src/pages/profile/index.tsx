import React from 'react';
import { useMediaQuery } from 'react-responsive';

import ProfileDesktop from './desktop/index';
import ProfileMobile from './mobile/index';
import { gql, useQuery } from '@apollo/client';
import { QueryUserArgs, User } from '../../models/models';
import { QueryHandler } from '../../components/templates/QueryHandler';
import { USER } from '../../api/queries';

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const { loading, error, data } = useQuery<{ user: User }, QueryUserArgs>(
    USER,
    {
      variables: {
        id: '2',
      },
    }
  );

  if (!data?.user) return <></>;

  if (isDesktop) {
    return (
      <QueryHandler loading={loading} error={error}>
        <ProfileDesktop {...data?.user} />
      </QueryHandler>
    );
  } else {
    return <ProfileMobile />;
  }
};
