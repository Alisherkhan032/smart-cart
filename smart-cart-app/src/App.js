import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Cart from './Components/pages/Cart';
import Contact from './Components/pages/Contact';
import LoginSignup from './Components/pages/LoginSignup';
import Shop from './Components/pages/Shop';
import ShopCategory from './Components/pages/ShopCategory'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/men' element={<ShopCategory category = "men" />} />
        <Route path='/women' element={<ShopCategory category = "women" />} />
        <Route path='/kids' element={<ShopCategory category = "kids" />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='//login-signup' element={<LoginSignup />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
