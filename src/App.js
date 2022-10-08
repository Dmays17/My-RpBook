import {BrowserRouter as Router,Link,Routes,Route}from 'react-router-dom'
import './App.css';
import RecipeDetails from './component/RecipeDetails'
import MyBook from './component/MyBook';
import WorldBook from './component/WorldBook';
import MyBookForm from './component/MyBookForm';
import LoginForm from './component/LoginForm';
import Recipe from './component/Recipe';
import React, { useState } from 'react';
function App() {
    const adminUser = {
      name: "",
      username: "admin",
      password: "admin123"
    }
  
    const [user, setUser] = useState({name: "", username: ""});
    const [error, setError] = useState("");
  
    const Login = details => {
      console.log(details);
  
      if (details.username == adminUser.username && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        username: details.username
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match")
    }
  }  
  
    const Logout = () => {
      setUser({ name:"", username: ""})
    }
  
  
  return (
    <div>
    <div className="NavBar">
      <Router>
      <header>
      <div className="headerandimg">
      <img src={require("./Logo.jpeg")} alt='logo' /><h1>Welcome to MyRPBook!</h1>
       
      </div> 
      <div className='nav-links'>

            <ul>
            
              
                <li className='link1'>
                  
                   <Link to="/MyBook" >MyBook</Link>
                    
                </li>
                <li className='link2'>
                  
                   <Link to="/WorldBook" >WorldBook</Link>
                   
                </li>
            </ul>
            
        </div>
        </header>

      <div>
        <Routes>
          
          <Route path="/MyBook"element={<MyBook/>}/>
          <Route path="/WorldBook"element={<WorldBook/>}/> 
          <Route path="/MyBookForm" element={<MyBookForm/>}/>
          <Route path="/WorldBook/Recipe" element={<Recipe/>}/>
        </Routes>
      </div>
       </Router> 
    </div>
    
    </div>
    );
  }


export default App;
