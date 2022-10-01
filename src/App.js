import React, {useState} from 'react';
import './App.css';
import LoginForm from './component/LoginForm';

function App() {
  const logUser = {
    email: "",
    password: "",
  }

  const [user, setUser] = useState({name: "", email: ""})

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("logout");
  }

  return (
    <div className="App">
      {(user.email !="") ? (
        <div className='welcome'>
          <h2>welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
          </div>
          ) : (
            <LoginForm />
          )}
    </div>
  );
}

function App(){
  return (
    <div className = "App">

    </div>
  );
}

export default App;
