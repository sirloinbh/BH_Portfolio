// src/features/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// 다른 슬라이스 리듀서를 여기에 임포트합니다.

const rootReducer = combineReducers({
  user: userReducer,
  // 다른 리듀서를 여기에 추가합니다.
});

export default rootReducer;
