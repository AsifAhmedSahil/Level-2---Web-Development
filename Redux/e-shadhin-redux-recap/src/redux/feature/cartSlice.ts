import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'



// Define the initial state using that type
const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
  },
})

export const {} = cartSlice.actions


export default cartSlice.reducer