import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilterInputsProps, StockItemProps } from "@/interfaces";

interface StockSliceProps {
  stock: StockItemProps[] | [];
  filteredStock: StockItemProps[] | [];
  savedStock: StockItemProps[] | [];
  resetFilter: boolean;
  minPrice?: number;
  maxPrice?: number;
}

const initialState: StockSliceProps = {
  stock: [],
  filteredStock: [],
  savedStock: [],
  resetFilter: false,
};

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setStock: (state, action: PayloadAction<StockItemProps[]>) => {
      state.stock = action.payload;
    },

    setFilterStock: (state, action: PayloadAction<FilterInputsProps>) => {
      state.filteredStock = [];
      const { bedrooms, bathrooms, parking, price_range } = action.payload;
      state.stock.filter((item) => {
        // @ts-ignore
        if (item.Bedrooms >= bedrooms && item.Bathrooms >= bathrooms && item.Parking >= parking && item["Sale Price"] >= price_range) {
          state.filteredStock = [...state.filteredStock, item];
        }
      });
    },

    setSavedStock: (state, action: PayloadAction<StockItemProps>) => {
      state.savedStock = [...state.savedStock, action.payload];
    },

    removeSavedStock: (state, action: PayloadAction<StockItemProps>) => {
      state.savedStock = state.savedStock.filter(
        (item) => item.Title !== action.payload.Title,
      );
    },

    resetFilter: (state) => {
      state.filteredStock = [...state.stock];
      state.resetFilter = true;
    },
  },
});

export const {
  setStock,
  setFilterStock,
  resetFilter,
  setSavedStock,
  removeSavedStock,
} = stockSlice.actions;

export const selectStock = (state: { stock: StockSliceProps }) =>
  state.stock.stock;

export const selectMinPrice = createSelector([selectStock], (stock) => {
  if (stock.length === 0) return 0;
  return Math.min(...stock.map((item) => item["Sale Price"]));
});

export const selectMaxPrice = createSelector([selectStock], (stock) => {
  if (stock.length === 0) return 0;
  return Math.max(...stock.map((item) => item["Sale Price"]));
});
export default stockSlice.reducer;
