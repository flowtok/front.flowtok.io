import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProfilePage from '../../pages/profile';
import TasksPage from '../../pages/tasks';
import SettingsPage from '../../pages/settings';
import HomePage from '../../pages/home';
import { useMeQuery, User } from '../../types/graphql';
import { gql } from '@apollo/client';
import { VerificationPopup } from '../molecules/VerificationPopup';

type BloggerLayoutPropsT = any;

const BloggerRoutes: FC<BloggerLayoutPropsT> = () => {
  // const user = useReactiveVar(currentUserVar);

  const { loading, data, error } = useMeQuery();

  // const [isVerify, setVerify] = useState<boolean>(false);
  //
  // const [findAccountTikTok] = useMutation(VERIFY_TIK_TOK, {
  //   onCompleted: (data) => {
  //     setVerify(data?.data.verifyTikTok);
  //   },
  //   onError: (error) => {
  //     console.log(error.message);
  //   },
  // });
  //
  // useEffect(() => {
  //   if (!isVerify) {
  //     const interval = setInterval(() => {
  //       findAccountTikTok();
  //     }, CHECK_VERIFICATION_INTERVAL);
  //     return () => clearInterval(interval);
  //   }
  // }, []);

  // const renderVerifyPopUp = () => {
  //   if (!isVerify) {
  //     return <VerificationPopup isOpen={true} />;
  //   }
  // };

  return (
    <>
      <Switch>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/tasks">
          <TasksPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/">
          <Redirect to={'/profile'} />
        </Route>
      </Switch>
      {/*<VerificationPopup isVerified={!!data?.me?.verifiedTikTok} />*/}
    </>
  );
};

export default BloggerRoutes;
