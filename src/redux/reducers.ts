import {combineReducers} from "@reduxjs/toolkit";
import app from "./app-reducer/app-reducer";

const createRootReducer = () => combineReducers({
 app: app.reducer
})

export default createRootReducer