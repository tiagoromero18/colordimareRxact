# Color_Di_Mare
## Aplicación Web de Trajes de Baño
¡Bienvenido al repositorio de la aplicación web de trajes de baño! Este proyecto es una plataforma en línea para explorar y comprar una variedad de trajes de baño. Aquí encontrarás información sobre la estructura del proyecto y cómo ponerlo en funcionamiento.

## Contenido del Repositorio
src Carpeta: Contiene todos los componentes y páginas esenciales del aplicativo web.

* components: Aquí se encuentran los componentes reutilizables que se utilizan en diferentes partes del aplicativo.
* pages: Contiene las páginas principales del aplicativo, 
* App.js: contiene las rutas de todas las paginas
* index.js que renderiza la palicación la aplicación React.

* Puesta en Marcha
Para poner en funcionamiento esta aplicación web en tu entorno local, sigue estos pasos:
```
git clone https://github.com/tiagoromero18/colordimareRxact.git
```

Descarga la carpeta src y agragala a un app de React


Problemas y Sugerencias
Si encuentras algún problema o tienes sugerencias para mejorar la aplicación web, por favor, crea un issue en este repositorio. Estaremos encantados de recibir tus comentarios y trabajar en solucionar cualquier problema.

¡Gracias por tu interés en nuestra aplicación web de trajes de baño!

------ LAST CHANGE app.js ------
```
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
import Account from './pages/account.js'

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
        <Route path="account" element={<Account/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
