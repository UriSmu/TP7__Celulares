import { useParams, useNavigate } from 'react-router-dom';
import { celulares } from '../../data';  // Ajusta la ruta según dónde tengas la data
import { useState } from 'react';
import './ProductoPorId.css';

const ProductoPorId = () => {
  const { celularId } = useParams();
  const navigate = useNavigate();

  // Buscar el producto por id (asegurate que el tipo coincida)
  const producto = celulares.find(p => p.id === Number(celularId) || p.id === celularId);

  // Estado para la imagen seleccionada
  const [imagenSeleccionada, setImagenSeleccionada] = useState(producto ? producto.fotos[0] : null);

  // Función para volver a la lista de productos
  const volver = () => {
    navigate('/productos');
  };

  // Manejar caso producto no encontrado
  if (!producto) {
    return (
      <div className="detalle-container">
        <button className="volver-btn" onClick={volver}>← Volver</button>
        <p>Producto no encontrado</p>
      </div>
    );
  }

  return (
    <div className="detalle-container">
      <button className="volver-btn" onClick={volver}>← Volver</button>

      <div className="detalle-card">
        <div className="detalle-imagenes">
          <img src={imagenSeleccionada} alt={producto.nombre} className="detalle-imagen-principal" />
          <div className="detalle-miniaturas">
            {producto.fotos.map((foto, i) => (
              <img
                key={i}
                src={foto}
                alt={`${producto.nombre} miniatura ${i + 1}`}
                className={`miniatura ${foto === imagenSeleccionada ? 'activa' : ''}`}
                onClick={() => setImagenSeleccionada(foto)}
              />
            ))}
          </div>
        </div>

        <div className="detalle-info">
          <h2>{producto.nombre}</h2>
          <p className="detalle-descripcion">{producto.descripcion}</p>
          <p className="detalle-precio">Precio: <strong>${producto.precio}</strong></p>
          <button className="comprar-btn">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductoPorId;