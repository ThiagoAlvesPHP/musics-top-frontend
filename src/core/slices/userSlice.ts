import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type UserState = {
  token: string | null;
}

const DEFAULT_STORAGE_NAME = '@app:musics_top:token'

const isValidToken = (value: any): value is string => typeof value === 'string';

const storedToken = localStorage.getItem(DEFAULT_STORAGE_NAME);

const initialState: UserState = {
  token: isValidToken(storedToken) && storedToken !== 'null' ? storedToken : null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem(DEFAULT_STORAGE_NAME, action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem(DEFAULT_STORAGE_NAME);
    },
  },
})

export const { changeToken, logout } = userSlice.actions

export default userSlice.reducer
