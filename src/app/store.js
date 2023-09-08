import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./../reducers/withdrawSlice";

export default configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});
