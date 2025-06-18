import "./Producto.css";
import { Link } from "react-router-dom";

const Producto = ({ id, nombre, descripcion, precio, fotos = [], marca }) => {
  const imagenPrincipal =
    fotos.length > 0
      ? fotos[0]
      : "https://via.placeholder.com/200x200?text=Sin+imagen";

  return (
    <div className="producto-card">
      <div className="producto-imagen-contenedor">
        <img
          src={imagenPrincipal}
          alt={nombre || "Producto"}
          className="producto-imagen"
        />
      </div>

      <div className="producto-detalles">
        <div className="producto-texto">
          <h3 className="producto-nombre">
            {nombre || "Nombre no disponible"}
          </h3>
          {marca && (
            <p className="producto-marca">
              Marca: <span>{marca}</span>
            </p>
          )}
          {descripcion && <p className="producto-descripcion">{descripcion}</p>}
          {precio !== undefined && (
            <p className="producto-precio">
              Precio: <strong>${precio}</strong>
            </p>
          )}
        </div>

        <div className="producto-boton-contenedor">
          <Link to={`/productos/${id}`} className="producto-boton">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Producto;
