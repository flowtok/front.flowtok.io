import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import createRootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = createRootReducer();

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootStateT = ReturnType<typeof rootReducer>;

export type BaseThunkT<
  A extends Action = Action,
  R = Promise<void>
> = ThunkAction<R, RootStateT, unknown, A>;
