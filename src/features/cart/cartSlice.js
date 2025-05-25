import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let { itemId, name, color, size, quantity } = action.payload;
      const existing = state.find(
        (product) =>
          product.itemId === itemId &&
          product.color === color &&
          product.size === size
      );

      if (!quantity) {
        quantity = 1;
      }

      if (existing) {
        existing.quantity = String(
          Number(existing.quantity) + Number(quantity)
        );

        if (existing.quantity > 4) {
          existing.quantity = "4";
        }
      } else {
        state.push({ itemId, name, color, size, quantity });
      }
    },

    updateCart: (state, action) => {
      const { itemId, color, size, quantity } = action.payload;
      const product = state.find(
        (product) =>
          product.itemId === itemId &&
          product.color === color &&
          product.size === size
      );
      if (product) {
        product.quantity = quantity;
      }
    },

    removeFromCart: (state, action) => {
      const { itemId, color, size } = action.payload;
      return state.filter(
        (product) =>
          product.itemId !== itemId ||
          product.color !== color ||
          product.size !== size
      );
    },

    removeAllFromCart: () => {
      return [];
    },
  },
});

export const { addToCart, updateCart, removeFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
