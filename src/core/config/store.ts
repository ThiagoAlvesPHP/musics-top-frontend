import { configureStore } from '@reduxjs/toolkit'

import { appSlice } from '@slices/appSlice'
import { userSlice } from '../slices/userSlice'
import { musicsSlice } from '../slices/musicsSlice'

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    user: userSlice.reducer,
    musics: musicsSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
