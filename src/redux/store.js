import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/cart/cart.js'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})