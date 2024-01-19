import { configureStore } from "@reduxjs/toolkit";
import { houseSlice } from "@/store/slices/house";
import { stockSlice } from "@/store/slices/stock";
import { uiSlice } from "@/store/slices/ui";
export const makeStore = () => {
  return configureStore({
    reducer: {
      house: houseSlice.reducer,
      stock: stockSlice.reducer,
      ui: uiSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
