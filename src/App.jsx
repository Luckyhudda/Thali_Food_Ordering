import { Route, Routes } from 'react-router-dom'
import './App.css'
import MasterLayout from './layout/MasterLayout'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HomePage from './conponents/Home/HomePage';
import CartPage from './pages/CartPage';

function App() {
 
  return (
    <Routes>
      <Route path='/' element={<MasterLayout/>} >
      <Route index path='/' element={<HomePage/>} />
      <Route path='/cart' element={<CartPage/>} />
        
        </Route> 
    </Routes>
  )
}

export default App
