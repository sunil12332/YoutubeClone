import {  configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import { combineReducers } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const reducer = combineReducers({
  // here we will be adding reducers
  app:appSlice,
  search:searchSlice,
  chat:chatSlice
})


const store=configureStore({
    reducer
});


export default store;