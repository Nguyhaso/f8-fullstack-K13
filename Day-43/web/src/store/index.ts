import {configureStore} from "@reduxjs/toolkit";
import scoreReducer from './slicer/score.ts'
import questionIndexReducer from "./slicer/questionIndex.ts";

const store = configureStore({
  reducer: {
    score: scoreReducer,
    questionIndex: questionIndexReducer,
  }
});
export default store;