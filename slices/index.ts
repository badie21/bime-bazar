import { bimeApi } from '@/services/bime';
import { combineReducers } from '@reduxjs/toolkit';
import OrderSlice from './orders';

export const reducers = combineReducers({
  orders: OrderSlice,
  [bimeApi.reducerPath]: bimeApi.reducer,
});
