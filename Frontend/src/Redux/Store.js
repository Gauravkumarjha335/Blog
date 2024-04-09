import { configureStore, combineReducers } from '@reduxjs/toolkit'
import useReducer from './User/Userslice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themereducer from './Thems/Themslice'
import { theme } from 'flowbite-react';

const rootReducer = combineReducers({
  user: useReducer,
  theme: themereducer,

});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);