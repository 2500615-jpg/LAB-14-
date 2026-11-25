// Name: Ammanullah | Registration No: 2500615
import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './wishlistSlice.js'

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
})