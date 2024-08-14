import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./feature/cartSlice"
import registerReducer from "./feature/registerSlice"
import { baseApi } from './api/baseApi'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
    cart: cartReducer,
    register: registerReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch