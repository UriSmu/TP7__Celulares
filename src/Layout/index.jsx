import { Link, Outlet, useNavigate } from "react-router-dom";
import { marcas } from "../data"; // Ajusta la ruta según corresponda
import './Layout.css'

const Layout = () => {
  const navigate = useNavigate();

  const handleMarcaChange = (e) => {
    const marcaId = e.target.value;
    if (marcaId) {
      navigate(`/productos/marca/${marcaId}`);
    } else {
      navigate('/productos');
    }
  };

  return (
    <>
      <header className="main-header">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <button className="dropbtn">Productos</button>
            <div className="dropdown-content">
              <Link to="/productos">Todos</Link>
              {marcas.map(m => (
                <Link key={m.id} to={`/productos/marca/${m.id}`}>{m.nombre}</Link>
              ))}
            </div>
          </div>
          <Link to="/quienes-somos">Quienes Somos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="main-footer">
        <section>
          <h4>Contacto</h4>
          <ul>
            <li>📞 Tel: 11-1234-5678</li>
            <li>✉️ Email: contacto@celuland.com</li>
          </ul>
        </section>

        <section>
          <h4>Locales</h4>
          <ul>
            <li>📍 Av. Siempreviva 123, Springfield</li>
            <li>📍 Maipú 456, Capital</li>
            <li>📍 Ruta 7 km 123, Provincia</li>
            <li>📍 Yatay 240, Capital</li>
            <li>📍 Calle 47 456, La Plata</li>
          </ul>
        </section>

        <section>
          <h4>Legal</h4>
          <button>Botón de arrepentimiento</button>
          <p>Tenés derecho a cancelar tu compra dentro de los 10 días.</p>
        </section>

        <small>© 2025 CeluLand - Todos los derechos reservados.</small>
      </footer>
    </>
  );
};

export default Layout;