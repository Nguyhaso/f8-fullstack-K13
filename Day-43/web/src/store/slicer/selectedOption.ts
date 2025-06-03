import {createSlice} from "@reduxjs/toolkit";

const selectedOptionSlice = createSlice({
  name: "selectedOption",
  initialState: null,
  reducers:{
    selectedOption: (_state, action) => action.payload,
    clearSelectedOption: ()=>null
  }
})
export default selectedOptionSlice.reducer;
export const {selectedOption, clearSelectedOption} = selectedOptionSlice.actions;