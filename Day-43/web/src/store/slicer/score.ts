import {createSlice} from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: 0,
  reducers: {
    incrementScore: (state: number) => {
      return state + 1;
    },
    resetScore:()=> 0
  }
})
export const { incrementScore, resetScore } = scoreSlice.actions

export default scoreSlice.reducer;
