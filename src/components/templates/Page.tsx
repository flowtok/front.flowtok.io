import { PropsWithChildren } from 'react';
import { Header } from 'components/organisms/Header';

export const PageTemplate = ({ children }: PropsWithChildren<any>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
