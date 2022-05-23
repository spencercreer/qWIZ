import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import QuizPage from './components/QuizPage';

import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          {/* <Route
            path='/'
            element={<HomePage />}
          /> */}
          <Route
            path='/login'
            element={<LoginForm />}
          />
          <Route
            path='/signup'
            element={<SignupForm />}
          />
          <Route
            path='/quiz'
            element={<QuizPage />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
