import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Photo_Section from './pages/Photo_Section';


function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='productdetails' element={<ProductDetails/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='photo_section' element={<Photo_Section/>}/>

     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
