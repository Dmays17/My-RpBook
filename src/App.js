import React, {useState} from 'react';
import './App.css';

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
      
    </div>
  );
}

export default App;
