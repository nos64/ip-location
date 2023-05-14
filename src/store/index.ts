import { configureStore } from '@reduxjs/toolkit';
import mapInfoReducer from './mapInfoSlice';

const store = configureStore({
  reducer: {
    info: mapInfoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
