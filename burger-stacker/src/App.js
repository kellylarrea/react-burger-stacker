import logo from './logo.svg';
import './App.css';
import BurgerStacker from './components/BurgerStacker';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import IngredientList from './IngredientList'


function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element ={<BurgerStacker />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
