import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./feature/cartSlice"
import registerReducer from "./feature/registerSlice"
import loginReducer from "./feature/loginSlice"
import { baseApi } from './api/baseApi'
import { persistReducer, persistStore } from 'redux-persist'
import userReducer from "./feature/userSlice" 
import storage from 'redux-persist/lib/storage'


const persistUserConfig = {
  key:'user',
  storage
}

const persistedUserReducer = persistReducer(persistUserConfig,userReducer)
// console.log(persistedUserReducer)


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
    cart: cartReducer,
    register: registerReducer,
    login: loginReducer,
    user:persistedUserReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}).concat(baseApi.middleware),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch