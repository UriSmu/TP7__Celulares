import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import { useState } from 'react'
import './App.css'

import Layout from './Layout'
import Celular from './components/Productos/ProductoPorId.jsx'
import ProductoPorMarca from './components/Productos/ProductoPorMarca.jsx'
import Contacto from './components/Contacto'
import Home from './components/Home'
import Productos from './components/Productos'
import QuienesSomos from './components/QuienesSomos'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/quienes-somos" element={<QuienesSomos/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/productos/:celularId" element={<Celular/>}/>
          <Route path="/productos/marca/:marcaId" element={<ProductoPorMarca/>}/>
          <Route path="*" element={<><h1>404</h1><h3>Error! La página a la que busca acceder no existe</h3></>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
