import { commonThunkHandler } from "../../utils/redux-utils";
import { BaseThunkT } from "../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
   isInit: false,
   isLoader: false,
}

const app = createSlice({
   name: 'app',
   initialState: initialState,
   reducers: {
      setIsInit: (state: AppStateT, { payload }: PayloadAction<boolean>): AppStateT => ({
         ...state,
         isInit: payload,
      }),
      setIsLoader: (state: AppStateT, { payload }: PayloadAction<boolean>): AppStateT => ({
         ...state,
         isLoader: payload,
      }),
      exit: (state: AppStateT): AppStateT => ({
         ...state,
         isLoader: false,
         isInit: false,
      }),
   }
})
export default app


export const initialize = (): BaseThunkT => {
   // initializing of application (get necessary data, refresh tokens, etc)
   return async (dispatch) => {
      await commonThunkHandler(async () => {
         // ...
         dispatch(app.actions.setIsInit(true))
      }, dispatch)
   }
}

// types
export type AppStateT = typeof initialState
