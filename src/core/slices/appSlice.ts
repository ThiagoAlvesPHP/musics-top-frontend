import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type AppMode = 'light' | 'dark'

export type AppScreen = {
  width: number;
  height: number;
}

export type AppState = {
  mode: AppMode,
  scrollTop: number;
  screen: AppScreen;
}

export const DEFAULT_STORAGE_NAME = '@app:musics_top:mode'

export const isValidAppMode = (value: any): value is AppMode => value !== 'light' ||  value !== 'dark'

export const parseStoredAppMode = (value: string | null): AppMode => {
  if (!value) return 'light';

  try {
    return isValidAppMode(value) ? value : 'light';
  } catch {
    return 'light';
  }
};

const storedMode = parseStoredAppMode(localStorage.getItem(DEFAULT_STORAGE_NAME));

const initialState: AppState = {
  mode: storedMode,
  scrollTop: 0,
  screen: {
    width: 0,
    height: 0,
  },
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<AppMode>) => {
      state.mode = action.payload
      localStorage.setItem(DEFAULT_STORAGE_NAME, action.payload);
    },
    changeScrollTop: (state, action: PayloadAction<number>) => {
      state.scrollTop = action.payload
    },
    changeScreen: (state, action: PayloadAction<AppScreen>) => {
      state.screen.width = action.payload.width
      state.screen.height = action.payload.height
    },
  },
})

export const { changeMode, changeScrollTop, changeScreen } = appSlice.actions

export default appSlice.reducer
