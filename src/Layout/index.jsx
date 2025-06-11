import { Link, Outlet } from "react-router-dom";

import Contacto from './src/components/Contacto'
import Home from './src/components/Home'
import Productos from './src/components/Productos'
import QuienesSomos from './src/components/QuienesSomos'

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/quienes-somos">Quienes Somos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <h4>Esto es un footer!</h4>
      </footer>
    </>
  );
};
