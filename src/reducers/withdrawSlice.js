import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 9632587412,
  userName: "Jose",
};

export const counterSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    withdraw10k: (state) => {
      state.balance -= 10000;
    },
    withdraw5k: (state) => {
      state.balance -= 5000;
    },
  },
});

// Action creators are generated for each case reducer function
export const { withdraw10k, withdraw5k } = counterSlice.actions;

export default counterSlice.reducer;
