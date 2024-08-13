import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { products } from '../../data/products'



// Define the initial state using that type
const initialState = {
  products: [] as any,
  selestedItems:0,
  totalPrice:0,
  tax:0,
  taxRate:0.1,
  grandTotal:0

}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state,action) =>{
      const isExist = state.products.find(product => product.id === action.payload.id)

      if(!isExist){
        state.products.push({...action.payload,quantity:1})
      }
    }
  },
})

export const {addToCart} = cartSlice.actions


export default cartSlice.reducer