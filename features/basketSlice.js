import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const counterSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state) => {
      state.value += 1
    },
    removeFromBasket: (state,action) => {
      state.value -= 1
    },
    
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions
export default basketSlice.reducer