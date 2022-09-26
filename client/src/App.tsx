import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HighscoresPage from "./pages/HighscoresPage";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/highscores" element={<HighscoresPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
