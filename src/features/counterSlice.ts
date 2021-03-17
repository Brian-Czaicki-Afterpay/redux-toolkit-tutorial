import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      console.log(current(state));
      state.value += 1;
      console.log(current(state));
    },
    decrement: (state) => {
      console.log(current(state));
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log(current(state));
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
