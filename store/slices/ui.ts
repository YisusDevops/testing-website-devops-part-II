import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiSliceProps {
  showAlert: boolean;
  showModal: boolean;
}

const initialState: UiSliceProps = {
  showAlert: false,
  showModal: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleAlert: (state, action: PayloadAction) => {
      state.showAlert = !state.showAlert;
    },
    toggleModal: (state, action: PayloadAction) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { toggleAlert, toggleModal } = uiSlice.actions;

export default uiSlice.reducer;
