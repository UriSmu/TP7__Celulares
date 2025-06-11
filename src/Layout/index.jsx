import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <nav>
        <Link to="/">Home</Link>
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

export default Layout;