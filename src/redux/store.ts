import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import productSlice from "./features/book/productSlice";
import cartSlice from "./features/cart/cartSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
