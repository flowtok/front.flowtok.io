import React, { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback: FC = () => <div>Something went wrong</div>;

export const ErrorHandler: FC = ({ children }) => {
  const onError = (
    error: Error,
    info: {
      componentStack: string;
    }
  ) => {
    console.error(
      'Error: ',
      error,
      '\n',
      'Component stack: ',
      info.componentStack
    );
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>
      {children}
    </ErrorBoundary>
  );
};
