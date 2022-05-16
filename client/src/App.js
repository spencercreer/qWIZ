import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Timer from './components/Timer';
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
      </header>
    </div>
  );
}

export default App;
