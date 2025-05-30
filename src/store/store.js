import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});
