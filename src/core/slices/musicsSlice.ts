import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Music } from '../services/musics-top/musics'
import { Pagination } from '../services/types';

export type MusicsStatus = 'loading' | 'error' | 'success';

export type MusicsState = {
  data: Pagination<Music> | null;
  status: MusicsStatus,
  myMusicsData: Pagination<Music> | null;
  myMusicsStatus: MusicsStatus;
}

const initialState: MusicsState = {
  data: null,
  status: 'loading',
  myMusicsData: null,
  myMusicsStatus: 'loading',
}

export const musicsSlice = createSlice({
  name: 'musics',
  initialState,
  reducers: {
    changeData: (state, action: PayloadAction<Pagination<Music>>) => {
      state.data = action.payload;
    },
    changeStatus: (state, action: PayloadAction<MusicsStatus>) => {
      state.status = action.payload;
    },
    changeMyMusicsData: (state, action: PayloadAction<Pagination<Music>>) => {
      state.myMusicsData = action.payload;
    },
    changeMyMusicsStatus: (state, action: PayloadAction<MusicsStatus>) => {
      state.myMusicsStatus = action.payload;
    },
  },
})

export const { changeData, changeStatus, changeMyMusicsData, changeMyMusicsStatus } = musicsSlice.actions

export default musicsSlice.reducer
