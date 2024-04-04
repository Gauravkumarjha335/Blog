import { configureStore } from '@reduxjs/toolkit'
import  useReducer  from './User/Userslice'
export const store = configureStore({
  reducer: {
    user : useReducer,
  },
})