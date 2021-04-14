import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from './pages/home';
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
    <>
      {isLoader && <div>Loading...</div>}
      <Switch>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route path={'/'}>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
