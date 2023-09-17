import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProduct {
  status: boolean;
  priceRange: number;
  isAddedToCart: boolean;
}

const initialState: IProduct = {
  status: false,
  priceRange: 550,
  isAddedToCart: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toToggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
    toggleIsAddedToCart: (state) => {
      state.isAddedToCart = !state.isAddedToCart;
    },
  },
});

export const { toToggleState, setPriceRange, toggleIsAddedToCart } =
  productSlice.actions;

export default productSlice.reducer;
