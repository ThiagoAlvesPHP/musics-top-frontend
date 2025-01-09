import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../services/musics-top/auth';

export type UserState = {
  token: string | null;
  data: User | null;
}

export const DEFAULT_STORAGE_NAME_TOKEN = '@app:musics_top:token'
export const DEFAULT_STORAGE_NAME_USER = '@app:musics_top:user';

export const isValidToken = (value: any): value is string => typeof value === 'string';
export const isValidUser = (value: any): value is User => {
  if (typeof value !== 'object' || value === null) return false;

  const keys: Array<keyof User> = [
    'id',
    'name',
    'email',
    'email_verified_at',
    'is_admin',
    'created_at',
    'updated_at',
  ];

  return keys.every((key) => key in value && typeof value[key] !== 'undefined');
};

export const parseStoredToken = (value: string | null): string | null => {
  if (!value) return null;

  try {
    return isValidToken(value) ? value : null;
  } catch {
    return null;
  }
};

export const parseStoredUser = (value: string | null): User | null => {
  if (!value) return null;

  try {
    const parsed = JSON.parse(value);
    return isValidUser(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

const storedToken = parseStoredToken(localStorage.getItem(DEFAULT_STORAGE_NAME_TOKEN));
const storedUser = parseStoredUser(localStorage.getItem(DEFAULT_STORAGE_NAME_USER));

const initialState: UserState = {
  token: storedToken,
  data: storedUser,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem(DEFAULT_STORAGE_NAME_TOKEN, action.payload);
    },
    changeUser: (state, action: PayloadAction<User | null>) => {
      state.data = action.payload;

      localStorage.setItem(DEFAULT_STORAGE_NAME_USER, JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.token = null;
      state.data = null;

      localStorage.removeItem(DEFAULT_STORAGE_NAME_TOKEN);
      localStorage.removeItem(DEFAULT_STORAGE_NAME_USER);
    },
  },
})

export const { changeToken, changeUser, logout } = userSlice.actions

export default userSlice.reducer
