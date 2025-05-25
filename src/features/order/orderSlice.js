import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    placeOrder: (state, action) => {
      const { userId, cartItems, address, totalPrice, date } = action.payload;
      state.unshift({ userId, order: cartItems, address, totalPrice, date });
    },
  },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;