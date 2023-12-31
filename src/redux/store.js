import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

import {
  
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';




export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
