import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const SignUpDesktop = React.lazy(() => import('./desktop/index'));
const SignUpMobile = React.lazy(() => import('./mobile/index'));

export default () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const registerType = localStorage.getItem('registerType');
  const [isVerify, setVerify] = useState<boolean>(false);

  if (isDesktop) {
    return (
      <SignUpDesktop
        registerType={registerType}
        isVerify={isVerify}
        setVerify={setVerify}
      />
    );
  } else {
    return (
      <SignUpMobile
        registerType={registerType}
        isVerify={isVerify}
        setVerify={setVerify}
      />
    );
  }
};
