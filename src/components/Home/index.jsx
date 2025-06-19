import Carousel from '../Carousel';
import Producto from '../Productos/Producto';
import { celulares, marcas } from '../../data/index.js';
import './Home.css';

const Home = () => {
  const images = [
    "https://www.cronista.com/files/image/524/524091/643e7257537eb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuODf5TZjLNP6IN-4BxR-26iNqluLKKsE3Xg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3M5NLmNQNqdbZWPOApzcGBRb5y05S_yW7qQ&s",
    "https://i0.wp.com/www.madboxpc.com/wp-content/uploads/2022/04/motorola-plazavespucio_store.webp?fit=997%2C633&ssl=1&w=640"
  ];

  // Selecciona 6 celulares aleatorios
  const getRandomCelulares = (arr, n) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  // Añadir nombre de marca a cada celular
  const celularesAleatorios = getRandomCelulares(celulares, 6).map(celular => ({
    ...celular,
    marca: marcas.find(m => m.id === celular.marcaId)?.nombre || "Sin marca"
  }));

  return (
    <div>
      <Carousel images={images} />
      <h2 className="home-titulo">¡Bienvenido a CeluLand! Todas las tiendas, en un mismo lugar.</h2>
      <h4 className="home-subtitulo">Algunos de nuestros productos</h4>
      <div className="productos-destacados">
        {celularesAleatorios.map(producto => (
          <Producto key={producto.id} {...producto} />
        ))}
      </div>
    </div>
  );
};

export default Home;