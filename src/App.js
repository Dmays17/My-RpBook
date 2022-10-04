
import './App.css';
import WorldBook from './component/WorldBook'
import {Routes,Route} from 'react-router-dom'
import RecipeDetails from './component/RecipeDetails'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WorldBook />}/>
        <Route path="/:title" element={<RecipeDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
