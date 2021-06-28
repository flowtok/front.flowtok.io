import React, { FC, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProfilePage from '../../pages/profile';
import TasksPage from '../../pages/tasks';
import SettingsPage from '../../pages/settings';
import HomePage from '../../pages/home';
import { useMutation, useReactiveVar } from '@apollo/client';
import { currentUserVar } from '../../api/cache';
import { VerificationPopup } from '../molecules/VerificationPopup';
import { FindTikTok, MutationFindTickTokArgs } from '../../models/models';
import { FIND_ACCOUNT_TIKTOK, VERIFY_TIK_TOK } from '../../api/mutations';

type BloggerLayoutPropsT = any;

const BloggerLayout: FC<BloggerLayoutPropsT> = ({}) => {
  const user = useReactiveVar(currentUserVar);
  const [isVerify, setVerify] = useState<boolean>(false);

  const [findAccountTikTok, { data }] = useMutation(VERIFY_TIK_TOK, {
    onCompleted: (data) => {
      setVerify(data?.data.verifyTikTok);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  useEffect(() => {
    if (!isVerify) {
      const interval = setInterval(() => {
        findAccountTikTok();
      }, 10000);
      return () => clearInterval(interval);
    }
  }, []);

  const renderVerifyPopUp = () => {
    if (!isVerify) {
      return <VerificationPopup isOpen={!user?.verifiedTikTok ?? false} />;
    }
  };

  return (
    <>
      <Switch>
        <Route path="/profile">{user && <ProfilePage user={user} />}</Route>
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
      {renderVerifyPopUp()}
    </>
  );
};

export default BloggerLayout;
