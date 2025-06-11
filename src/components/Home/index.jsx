import Carousel from '../Carousel'

const Home = () => {
    const images = [
      "https://www.cronista.com/files/image/524/524091/643e7257537eb.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuODf5TZjLNP6IN-4BxR-26iNqluLKKsE3Xg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3M5NLmNQNqdbZWPOApzcGBRb5y05S_yW7qQ&s",
      "https://i0.wp.com/www.madboxpc.com/wp-content/uploads/2022/04/motorola-plazavespucio_store.webp?fit=997%2C633&ssl=1&w=640"
    ];
  
    return (
      <div>
        <Carousel images={images} />
        <h2>Bienvenido a CeluLand! Todas las tiendas, en un mismo lugar.</h2>
        <>
          {/*ACÁ DEBERÍAN HABER 6 CELULARES ALEATORIOS DE LOS QUE HAY EN LA BASE DE DATOS. CADA VEZ SON DIFERENTES (es random)!!*/}
        </>
      </div>
    );
  };
  
  export default Home;