import {createSlice} from "@reduxjs/toolkit";

const questionIndexSlice = createSlice({
  name: "questionIndex",
  initialState: 0,
  reducers: {
    nextQuestion: (state: number) => {
      return state + 1;
    },
    resetQuestion: () => {
      return 0
    }
  }
})
export const { nextQuestion, resetQuestion } = questionIndexSlice.actions

export default questionIndexSlice.reducer;
