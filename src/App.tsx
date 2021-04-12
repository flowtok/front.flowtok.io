import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateT } from './redux/store';
import { initialize } from './redux/app-reducer/app-reducer';
import { Route, Switch } from 'react-router-dom';

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
        <Route path={'/'} component={() => <div>Hello world!</div>} />
      </Switch>
    </div>
  );
};
