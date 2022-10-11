import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import Products from './components/Products';

function App() {
  return (
    <>

    <Navbar/>
    <Routes>
    

    <Route exact path= '/' element = {<Home/>}/>
    <Route path= '/products' element = {<Products/>}/>
    
    </Routes>
    
    
    </>
    
  );
}

export default App;
