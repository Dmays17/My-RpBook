import {BrowserRouter as Router,Link,Routes,Route}from 'react-router-dom'
import './App.css';
import MyBook from './component/MyBook';
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
                
            </ul>
            
        </div>
        </header>

      <div>
        <Routes>
          <Route path="/"element={<MyBook/>}/>
          {/* <Route path="/mybook"element={<mybook/>}/> */}
          
        </Routes>
      </div>
        </Router>
    </div>
  );
}

export default App;
