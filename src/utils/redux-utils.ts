import {Dispatch} from "react";
import app from "../redux/app-reducer/app-reducer";


export const commonThunkHandler = async (operation: any, dispatch: Dispatch<any>, isLoader?: boolean) => {
   // make tryException flow for thunks
   try {
      if (isLoader) dispatch(app.actions.setIsLoader(true))
      await operation() // perform an operation
      if (isLoader) dispatch(app.actions.setIsLoader(false))
   }
   catch (error) {
      console.error(error)
   }
}