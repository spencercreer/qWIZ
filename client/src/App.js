import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        {/* <img src={logo} alt="logo" /> */}
        <div>qWIZ</div>
        <SignupForm />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
