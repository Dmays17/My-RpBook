import {BrowserRouter as Router,Link,Routes,Route}from 'react-router-dom'
import './App.css';
import MyBook from './component/MyBook';
import WorldBook from './component/WorldBook';
import MyBookForm from './component/MyBookForm';
import LoginForm from './component/LoginForm';

function App() {
 
  return (
    <div className="NavBar">
      <Router>
      <header>
      
      <div>
      <img src={'logo'} alt='logo'/>
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
        </Routes>
      </div>
        </Router>
    </div>
  );
}

export default App;
