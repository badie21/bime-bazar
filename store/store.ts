import { configureStore } from '@reduxjs/toolkit';

import { useDispatch, useSelector } from 'react-redux';
import { reducers } from '@/slices';

import type { TypedUseSelectorHook } from 'react-redux';
import { rtkQueryErrorLogger } from '@/services/errorHandling';
import { bimeApi } from '@/services/bime';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(bimeApi.middleware, rtkQueryErrorLogger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
