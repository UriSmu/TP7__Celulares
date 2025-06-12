import { useParams, Link } from "react-router-dom";
import { celulares, marcas } from "../../data";
import Producto from "./Producto";
import "./Productos.css";

const ProductoPorMarca = () => {
  const { marcaId } = useParams();

  // Buscar nombre de la marca para mostrar título o mensaje
  const marca = marcas.find(m => String(m.id) === marcaId);

  // Filtrar celulares que tengan la marcaId
  const celularesFiltrados = celulares.filter(c => String(c.marcaId) === marcaId);

  if (!marca) {
    return <p>Marca no encontrada</p>;
  }

  if (celularesFiltrados.length === 0) {
    return (
      <div>
        <h2>Productos de la marca {marca.nombre}</h2>
        <p>No hay productos disponibles para esta marca.</p>
        <Link to="/productos">Volver a Productos</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Productos de la marca {marca.nombre}</h2>
      <div className="productos-contenedor">
        {celularesFiltrados.map(celu => (
          <Producto
            key={celu.id}
            id={celu.id}
            nombre={celu.nombre}
            descripcion={celu.descripcion}
            precio={celu.precio}
            fotos={celu.fotos}
            marca={marca.nombre}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductoPorMarca;
