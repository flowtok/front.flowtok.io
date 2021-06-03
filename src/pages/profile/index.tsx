import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ProfileDesktop from './desktop/index';
import ProfileMobile from './mobile/index';
import { gql, useQuery } from '@apollo/client';
import { QueryUserArgs, User } from '../../models/models';
import { QueryHandler } from '../../components/templates/QueryHandler';

const USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      balance
      avg_views
      price
      good_rate
      held_money
      total_earnings
      ref_link
      ref_count
      ref_earnings
      history {
        value
        date
        type
      }
    }
  }
`;

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const { loading, error, data } = useQuery<{ user: User }, QueryUserArgs>(
    USER,
    {
      variables: {
        id: '1',
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
