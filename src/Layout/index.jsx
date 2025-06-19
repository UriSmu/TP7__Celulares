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
        <Link to="/">
            <img
              src="https://www.logomaker.com/api/main/imageop/zjHl2lgeccIQlz7qJEHyxj...tyq...e+1RCjRu...wjkZfzJLpl4...yHVC3aci4P85Px5x9FMJ30tYLZV...12R+UocchBNh9j+FOYJWWXxrzFkRVetRQi54L3uQQKrY9l84yaU085VN5wybf3XnTXLUfNc7G5+U4qZ+Fctw2CuMCnZtry4kZP0XdNvOC4ckhJejQ...ZQ2GjCHM1WOOi8DYPVR24Y224PYPRYtddLVMNoUmVyVVfQjrVPCppbGYlDSEJ6rBoYJJEnJW018uh3ttiBD...hlu3gIj1++xtsqYFXLxIlzVbyZd+K9I5EuKWK3G7OerCk1+Zlj2HbIWvu5yQ3t62hAfkGVPaY+PARH+CIk0Vw7YeLOJgV7KX+Pbw8Chb1DgBAj2Lw5c69yMidjYs+Hh1RcXpnNeHA6jmFlzJoI85zvyfVITXhvgIr3QoNhT6s3I06Hi2Jk91U7BYyVeuFpMWs92RvdchUcjslTHRR0NP9kbOEeJLiEBeINC6usmEAQVjAl2nuvmLlTufRXg20WiVPjEnXaGr1sYiU3j7dR02+g0WiRKNfZzjVotINA8+7...uFkZa4uWnkGZiexZM6TEcB8m2fuvfv+WubZl1Q1EUeBghnmXeZ8yVgM7anJF0LWwAkzukg4kkp+XqfQ...j6B3g9muo6MWz0jm37dki+IQvIXsZvRg...sYX0yt2vgM6t...dC4Q8Xfpkf7KvLWayqIw8koqMgTUfX1IBhhJGgtGVxx2RTOuVx5+9T5JTAr0SzwxinlILEATrc...pkG9n8HiItON2vSc9vG...IT7bIr9IokL0YwHXmphl...amfw3JYcxdriIbdGT4ZS0R...XWRC6z6xRMLExdRFrKwo4NCLyUsQzTjz8dVPeCfUSccgvxgulUz3EQeArTPM+B79WRyDXIyg...zPzgOxw5GHF+gG9JpnG6vPQ9iEkyYyEeFBG2ARJQUZvtY1...50k73nup3Vo7B0BzjKfxGnRW9ypUIlDXveWenigpNxcFfTfOG0IGHVsfmPpgnVcCP5PwRzNwS...HgmEDrod0gZhAi7C+515sG2Fzk...zSjHqCaI1fhcdc963bptVBdSkRKn8bj...TvUQvdMSg3kMvkmtorT5yZg0EHPCO4LL8l8im7x...HqfEjSnt2gGwuHZ+lbnouJ1o2uOOHYs1EobYCD43FzZ3WU8B1KwGl0wTiASQj1yZGwMaBT1QC...YwBhZdxa44quMljRKLcnZI8dHx0k1xuQv8R...S9ZXpZ9N5uS6GUIi549zJIDq5CPtBnT0c+NjDPa86Tcl5+OHSS8SNGaFALiWrU7BFaf7vyDUV9wngobCdwd3...giKIim8tX2yQfvHlhpmp8FRC9gXhCshU+cL1P4TsrVgWGDQVKKaYFAqdQS5ytcCJ60s4X5jfgvG6w+BPqIl24tsixYIJ4...5XTlxC3PrieT3hi2vnpdx+s7C0flKQGUW0vQwbx99xt1OxL6RnKRqQJMccYLcYTm4vDsXdG9lQGr3pLyeZGi9VdfOmPSSZuj+x44JqowH1IsEx6dvCkM9qmLt1ZylYh3XW0aETJxRxTOu4u4Y3y1umFOpOvG+ZsPup1sjG5TBp51bcdyXMcKhcJI9CBucDy1Rdg2dR9LjHmc0Xi+HbA3JTjdA2DrJ5X9ySd6C...NFciql06algAJNbtnW7hnqmidVUu6z2ub0zzDC4lZz7Oeatvo5k6YSJbw==" 
              alt="CeluLand Logo"
              className="logo"
              style={{ height: '40px', cursor: 'pointer' }} // ajusta el tamaño si quieres
            />
          </Link>
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
            <li>📍 Av. Rivadavia 5335, Capital</li>
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