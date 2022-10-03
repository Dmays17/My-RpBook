import {BrowserRouter as Router,Link,Routes,Route}from 'react-router-dom'
import './App.css';
import MyBook from './component/MyBook';
import WorldBook from './component/WorldBook';
import MyBookForm from './component/MyBookForm';
function App() {
  return (
    <div className="NavBar">
      <Router>
      <header>
      <div>
        
            <ul>
                <li>
                   <Link to="/" >Home</Link> 
                </li>
                <li>
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
        </Routes>
      </div>
        </Router>
    </div>
  );
}

export default App;
