// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

// RootState 타입을 추론합니다.
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch 타입을 정의합니다.
export type AppDispatch = typeof store.dispatch;
