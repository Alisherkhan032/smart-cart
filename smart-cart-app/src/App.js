import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory'
import kid_banner from './Components/Assets/Banners/banner_kid.png'
import men_banner from './Components/Assets/Banners/banner_men.png'
import women_banner from './Components/Assets/Banners/banner_women.png'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './pages/Login'
import Product from './pages/Product';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/men' element={<ShopCategory category = "Men" banner = {men_banner}/>} />
        <Route path='/women' element={<ShopCategory category = "Women" banner = {women_banner} />} />
        <Route path='/kid' element={<ShopCategory category = "Kid" banner = {kid_banner}/>} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login-signup' element={<LoginSignup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
