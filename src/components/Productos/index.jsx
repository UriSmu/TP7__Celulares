import Producto from "./Producto";
import { celulares, marcas } from "../../data";
import "./Productos.css";

const Productos = () => {

  return (
    <div className="productos-contenedor">
      {celulares.map((celu) => {
        const marca = marcas.find((m) => m.id === celu.marcaId)?.nombre;
        return (
          <Producto
            key={celu.id}
            id={celu.id}
            nombre={celu.nombre}
            descripcion={celu.descripcion}
            precio={celu.precio}
            fotos={celu.fotos}
            marca={marca}
          />
        );
      })}
    </div>
  );
};

export default Productos;
