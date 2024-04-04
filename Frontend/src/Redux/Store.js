import { configureStore, combineReducers } from '@reduxjs/toolkit';
import UserReducer from './User/Userslice';
export const store = configureStore({
  reducer: UserReducer,
});


