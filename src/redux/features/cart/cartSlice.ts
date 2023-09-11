import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/globalTypes";

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<IProduct>) => {
      const existData = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existData) {
        existData.quantity = existData.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeFromTotal: (state, action: PayloadAction<IProduct>) => {
      const existData = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existData && existData.quantity! > 1) {
        existData.quantity = existData.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addCart, removeFromCart, removeFromTotal } = cartSlice.actions;

export default cartSlice.reducer;
