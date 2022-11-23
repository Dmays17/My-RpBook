import {BrowserRouter as Router,Link,Routes,Route}from 'react-router-dom'
import './App.css';
import RecipeDetails from './component/RecipeDetails'
import MyBook from './component/MyBook';
import WorldBook from './component/WorldBook';
import MyBookForm from './component/MyBookForm';
import Recipe from './component/Recipe';
import React, { useState } from 'react';
function App() {

  return (
    <div>
    <div className="NavBar">
      <Router>
      <header>
      <div className="headerandimg">
      <img src={require("./Logo.jpeg")} alt='logo' />
       
      </div> 
      <div className='nav-links'>

            <ul>
            
              
                <li className='link1'>
                  
                   <Link to="/" >MyBook</Link>
                    
                </li>
                <li className='link2'>
                  
                   <Link to="/WorldBook" >WorldBook</Link>
                   
                </li>
            </ul>
            
        </div>
        </header>

      <div>
        <Routes>
          
          <Route path="/"element={<MyBook/>}/>
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
