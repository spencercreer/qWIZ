import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Timer from './components/Timer';
import Question from './components/Question';
import Score from './components/Score';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        {/* <img src={logo} alt="logo" /> */}
        <div>qWIZ</div>
        {/* <SignupForm />
        <LoginForm /> */}
        <Timer />
        <Question />
        <Score />
      </header>
    </div>
  );
}

export default App;
