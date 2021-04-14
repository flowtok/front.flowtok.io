import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import SignUpPage from './pages/signup';
import TasksPage from './pages/tasks';
import LoginPage from './pages/login';
import { RootStateT } from './redux/store';
import { initialize } from './redux/app-reducer/app-reducer';

export const App = () => {
  const dispatch = useDispatch();
  const isLoader = useSelector((state: RootStateT) => state.app.isLoader);
  const isInit = useSelector((state: RootStateT) => state.app.isInit);

  useEffect(() => {
    if (!isInit) dispatch(initialize());
  }, [dispatch, isInit]);

  if (!isInit || isLoader) return <div>Loading...</div>;

  return (
    <div>
      {isLoader && <div>Loading...</div>}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/tasks">
          <TasksPage />
        </Route>
      </Switch>
    </div>
  );
};
