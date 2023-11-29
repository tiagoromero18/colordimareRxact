# colordimare React


---------------- how my app.js look like Santiago ----------------------------
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js'
import Shop from './pages/shoppingcart.js'
import Admin from './pages/admin.js'
import Products from './pages/products.js'
import About from './pages/about.js'
import ProductInd from './pages/productInd.js';
import AddNewPro from './pages/addNewPro.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import OlvideContrasena from './pages/olvideMiContrasena.js';
import CambioContrasena from './pages/cambioDeContrasena.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="home" element={<Home />} />
        <Route path="shoppingcart" element={<Shop />} />
        <Route path="admin" element={<Admin />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="productInd" element={<ProductInd/>} />
        <Route path="addNewPro" element={<AddNewPro/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="olvideMiContrasena" element={<OlvideContrasena/>} />
        <Route path="cambioDeContrasena" element={<CambioContrasena/>} />

      </Routes>
    </BrowserRouter>
  );
}
