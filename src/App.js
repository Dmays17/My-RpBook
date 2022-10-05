import {BrowserRouter as Router,Link,Routes,Route}from 'react-router-dom'
import './App.css';
import WorldBook from './component/WorldBook'
import {Routes,Route} from 'react-router-dom'
import RecipeDetails from './component/RecipeDetails'

import MyBook from './component/MyBook';
import WorldBook from './component/WorldBook';
import MyBookForm from './component/MyBookForm';
import LoginForm from './component/LoginForm';
import Recipe from './component/Recipe';
function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<WorldBook />}/>
        <Route path="/:title" element={<RecipeDetails/>}/>
      </Routes>
    <div className="NavBar">
      <Router>
      <header>
      
      <div>
      <img src="src\Logo.jpeg" alt='logo' />
            <ul>
            
              
                <li>
                   <Link to="/MyBook" >MyBook</Link> 
                </li>
                <li>
                   <Link to="/WorldBook" >WorldBook</Link> 
                </li>
            </ul>
            
        </div>
        </header>

      <div>
        <Routes>
          <Route path='/'element={<LoginForm/>}/>
          <Route path="/MyBook"element={<MyBook/>}/>
          <Route path="/WorldBook"element={<WorldBook/>}/> 
          <Route path="/MyBookForm" element={<MyBookForm/>}/>
          <Route path="/WorldBook/Recipe" element={<Recipe/>}/>
        </Routes>
      </div>
        </Router>
    </div>
  );
}

export default App;
