import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { StockItemProps } from "@/interfaces";

const initialState: StockItemProps = {
  Id: 0,
  DateListed: "",
  Title: "",
  Description: "",
  "Sale Price": 0,
  ThumbnailURL: "",
  PictureURL: "",
  Location: "",
  Sqft: 0,
  Bedrooms: 0,
  Bathrooms: 0,
  Parking: 0,
  YearBuilt: 0,
};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    setHouse: (_, action: PayloadAction<StockItemProps>) => {
      return action.payload;
    },
  },
});

export const { setHouse } = houseSlice.actions;

export default houseSlice.reducer;
