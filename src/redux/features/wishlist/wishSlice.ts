import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/globalTypes";

interface IWishlist {
  isList: boolean;
  books: IProduct[];
}

const initialState: IWishlist = {
  isList: false,
  books: [],
};

const wishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action: PayloadAction<IProduct>) => {
      const productToAdd = state.books.find(
        (product) => product._id === action.payload._id
      );
      if (!productToAdd) {
        state.books.push(action.payload);
      }
    },
    isInWishlist: (state, action: PayloadAction<IProduct>): void => {
      const productToCheck = state.books.find(
        (product) => product._id === action.payload._id
      );
      if (!productToCheck) {
        state.books.push(action.payload);
      }
    },
    removeWishlist: (state, action: PayloadAction<IProduct>) => {
      const indexToRemove = state.books.findIndex(
        (product) => product._id === action.payload._id
      );
      if (indexToRemove !== -1) {
        state.books.splice(indexToRemove, 1);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<IProduct>) => {
      state.books = state.books.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addWishlist, removeWishlist, removeFromWishlist, isInWishlist } =
  wishSlice.actions;

export default wishSlice.reducer;
