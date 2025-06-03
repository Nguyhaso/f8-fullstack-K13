import {configureStore} from "@reduxjs/toolkit";
import scoreReducer from './slicer/score.ts'
import questionIndexReducer from "./slicer/questionIndex.ts";
import selectedOptionReducer from "./slicer/selectedOption.ts";

const store = configureStore({
  reducer: {
    score: scoreReducer,
    questionIndex: questionIndexReducer,
    selectedOption: selectedOptionReducer,
  }
});
export default store;