import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HighscoresPage from "./pages/HighscoresPage";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";

function App() {
  const [quiz, setQuiz] = useState<string>("");

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage setQuiz={setQuiz} />}/>
          <Route path="/quiz" element={<QuizPage quiz={quiz}/>} />
          <Route path="/highscores" element={<HighscoresPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
