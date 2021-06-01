import React, { FC } from 'react';
import { QueryResult } from '@apollo/client';
import { ApolloError } from '@apollo/client/errors';

export type QueryHandlerPropsT = {
  error?: ApolloError;
  loading: boolean;
};

export const QueryHandler: FC<QueryHandlerPropsT> = ({
  children,
  error,
  loading,
}) => {
  if (loading) return <>Loading...</>;

  if (error) return <>Error: {error.message}</>;

  return <>{children}</>;
};
