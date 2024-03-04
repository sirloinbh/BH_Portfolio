// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 상태의 타입을 정의합니다.
interface UserState {
  name: string;
  email: string;
}

// 초기 상태 값을 정의합니다.
const initialState: UserState = {
  name: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
    clearUser: state => {
      state.name = '';
      state.email = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
