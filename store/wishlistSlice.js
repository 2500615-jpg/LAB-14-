// Name: Ammanullah | Registration No: 2500615
import { createSlice } from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { ids: [] },
  reducers: {
    // Add an id if it is missing; otherwise remove it.
    toggleWish(state, action) {
      const id = action.payload
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((wishId) => wishId !== id)
      } else {
        state.ids.push(id)
      }
    },
    // Remove all products from the wishlist.
    clearWish(state) {
      state.ids = []
    },
  },
})

export const { toggleWish, clearWish } = wishlistSlice.actions
export const selectWishIds = (state) => state.wishlist.ids
export default wishlistSlice.reducer