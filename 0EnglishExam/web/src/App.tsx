import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import {BrowserRouter, Routes, Route} from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
