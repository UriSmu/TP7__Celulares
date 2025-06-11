//USÉ COMO BASE LO QUE ESTÁ EN LA CONSIGNA, Y LE PEDÍ A LA IA QUE AGREGUE MÁS CELULARES

export const marcas = [
  { id: 1, nombre: 'Apple' },
  { id: 2, nombre: 'Samsung' },
  { id: 3, nombre: 'Xiaomi' },
  { id: 4, nombre: 'Motorola' }
];

export const celulares = [
  {
    id: 1,
    nombre: 'iPhone 14 Pro',
    descripcion: 'Pantalla Super Retina XDR, chip A16 Bionic, cámara de 48 MP',
    precio: 1299,
    marcaId: 1,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwxR2plMrWrCqlMvoWvSZpeyp-XRETYC9Vw&s',
      'https://example.com/iphone14pro-2.jpg',
      'https://example.com/iphone14pro-3.jpg'
    ]
  },
  {
    id: 2,
    nombre: 'Samsung Galaxy S23',
    descripcion: 'Pantalla AMOLED 6.1", Snapdragon 8 Gen 2, cámara triple',
    precio: 999,
    marcaId: 2,
    fotos: [
      'https://example.com/galaxys23-1.jpg',
      'https://example.com/galaxys23-2.jpg',
      'https://example.com/galaxys23-3.jpg'
    ]
  },
  {
    id: 3,
    nombre: 'Xiaomi 13 Pro',
    descripcion: 'Pantalla AMOLED 6.73", cámara Leica, carga rápida 120W',
    precio: 899,
    marcaId: 3,
    fotos: [
      'https://example.com/xiaomi13pro-1.jpg',
      'https://example.com/xiaomi13pro-2.jpg',
      'https://example.com/xiaomi13pro-3.jpg'
    ]
  },
  {
    id: 4,
    nombre: 'Motorola Edge 40',
    descripcion: 'Pantalla pOLED, MediaTek Dimensity 8020, resistente al agua',
    precio: 699,
    marcaId: 4,
    fotos: [
      'https://example.com/edge40-1.jpg',
      'https://example.com/edge40-2.jpg',
      'https://example.com/edge40-3.jpg'
    ]
  },
  {
    id: 5,
    nombre: 'iPhone 13',
    descripcion: 'Pantalla OLED 6.1", chip A15 Bionic, cámara dual de 12 MP',
    precio: 899,
    marcaId: 1,
    fotos: [
      'https://example.com/iphone13-1.jpg',
      'https://example.com/iphone13-2.jpg',
      'https://example.com/iphone13-3.jpg'
    ]
  },
  {
    id: 6,
    nombre: 'Samsung Galaxy Z Fold 5',
    descripcion: 'Pantalla plegable AMOLED, Snapdragon 8 Gen 2, multitarea',
    precio: 1799,
    marcaId: 2,
    fotos: [
      'https://example.com/galaxyzfold5-1.jpg',
      'https://example.com/galaxyzfold5-2.jpg',
      'https://example.com/galaxyzfold5-3.jpg'
    ]
  },
  {
    id: 7,
    nombre: 'Xiaomi Redmi Note 12',
    descripcion: 'Pantalla AMOLED 6.67", Snapdragon 685, batería de 5000mAh',
    precio: 299,
    marcaId: 3,
    fotos: [
      'https://example.com/redminote12-1.jpg',
      'https://example.com/redminote12-2.jpg',
      'https://example.com/redminote12-3.jpg'
    ]
  },
  {
    id: 8,
    nombre: 'Motorola Moto G73',
    descripcion: 'Pantalla LCD 6.5", Dimensity 930, cámara de 50 MP',
    precio: 349,
    marcaId: 4,
    fotos: [
      'https://example.com/motog73-1.jpg',
      'https://example.com/motog73-2.jpg',
      'https://example.com/motog73-3.jpg'
    ]
  },
  {
    id: 9,
    nombre: 'iPhone SE (2022)',
    descripcion: 'Pantalla Retina 4.7", chip A15 Bionic, diseño compacto',
    precio: 429,
    marcaId: 1,
    fotos: [
      'https://example.com/iphonese2022-1.jpg',
      'https://example.com/iphonese2022-2.jpg',
      'https://example.com/iphonese2022-3.jpg'
    ]
  },
  {
    id: 10,
    nombre: 'Samsung Galaxy A54',
    descripcion: 'Pantalla AMOLED 6.4", Exynos 1380, batería de 5000mAh',
    precio: 449,
    marcaId: 2,
    fotos: [
      'https://example.com/galaxya54-1.jpg',
      'https://example.com/galaxya54-2.jpg',
      'https://example.com/galaxya54-3.jpg'
    ]
  },
  {
    id: 11,
    nombre: 'Xiaomi Poco X5 Pro',
    descripcion: 'Pantalla AMOLED 6.67", Snapdragon 778G, carga rápida 67W',
    precio: 379,
    marcaId: 3,
    fotos: [
      'https://example.com/pocox5pro-1.jpg',
      'https://example.com/pocox5pro-2.jpg',
      'https://example.com/pocox5pro-3.jpg'
    ]
  },
  {
    id: 12,
    nombre: 'Motorola Razr 40 Ultra',
    descripcion: 'Pantalla plegable AMOLED, Snapdragon 8+, diseño retro',
    precio: 1099,
    marcaId: 4,
    fotos: [
      'https://example.com/razr40ultra-1.jpg',
      'https://example.com/razr40ultra-2.jpg',
      'https://example.com/razr40ultra-3.jpg'
    ]
  },
  {
    id: 13,
    nombre: 'iPhone 15 Pro Max',
    descripcion: 'Pantalla Super Retina XDR, chip A17 Pro, titanio, cámara de 5x zoom óptico',
    precio: 1499,
    marcaId: 1,
    fotos: [
      'https://example.com/iphone15promax-1.jpg',
      'https://example.com/iphone15promax-2.jpg',
      'https://example.com/iphone15promax-3.jpg'
    ]
  },
  {
    id: 14,
    nombre: 'iPhone 14',
    descripcion: 'Pantalla OLED 6.1", chip A15 Bionic, cámara dual mejorada',
    precio: 799,
    marcaId: 1,
    fotos: [
      'https://example.com/iphone14-1.jpg',
      'https://example.com/iphone14-2.jpg',
      'https://example.com/iphone14-3.jpg'
    ]
  },
  {
    id: 15,
    nombre: 'iPhone 13 mini',
    descripcion: 'Pantalla OLED 5.4", chip A15 Bionic, formato compacto',
    precio: 699,
    marcaId: 1,
    fotos: [
      'https://example.com/iphone13mini-1.jpg',
      'https://example.com/iphone13mini-2.jpg',
      'https://example.com/iphone13mini-3.jpg'
    ]
  },
  {
    id: 16,
    nombre: 'iPhone 12',
    descripcion: 'Pantalla OLED 6.1", chip A14 Bionic, compatible con MagSafe',
    precio: 599,
    marcaId: 1,
    fotos: [
      'https://example.com/iphone12-1.jpg',
      'https://example.com/iphone12-2.jpg',
      'https://example.com/iphone12-3.jpg'
    ]
  },
  {
    id: 17,
    nombre: 'Samsung Galaxy S22 Ultra',
    descripcion: 'Pantalla AMOLED 6.8", S Pen integrado, cámara de 108 MP',
    precio: 1199,
    marcaId: 2,
    fotos: [
      'https://example.com/galaxys22ultra-1.jpg',
      'https://example.com/galaxys22ultra-2.jpg',
      'https://example.com/galaxys22ultra-3.jpg'
    ]
  },
  {
    id: 18,
    nombre: 'Samsung Galaxy Z Flip 5',
    descripcion: 'Pantalla plegable, diseño compacto, Snapdragon 8 Gen 2',
    precio: 999,
    marcaId: 2,
    fotos: [
      'https://example.com/galaxyzflip5-1.jpg',
      'https://example.com/galaxyzflip5-2.jpg',
      'https://example.com/galaxyzflip5-3.jpg'
    ]
  },
  {
    id: 19,
    nombre: 'Samsung Galaxy A34',
    descripcion: 'Pantalla AMOLED 6.6", chip Dimensity 1080, buena autonomía',
    precio: 399,
    marcaId: 2,
    fotos: [
      'https://example.com/galaxya34-1.jpg',
      'https://example.com/galaxya34-2.jpg',
      'https://example.com/galaxya34-3.jpg'
    ]
  },
  {
    id: 20,
    nombre: 'Samsung Galaxy M14',
    descripcion: 'Pantalla PLS LCD, Exynos 1330, batería 6000mAh',
    precio: 199,
    marcaId: 2,
    fotos: [
      'https://example.com/galaxym14-1.jpg',
      'https://example.com/galaxym14-2.jpg',
      'https://example.com/galaxym14-3.jpg'
    ]
  },
  {
    id: 21,
    nombre: 'Xiaomi 13 Ultra',
    descripcion: 'Pantalla AMOLED, Snapdragon 8 Gen 2, cámara cuádruple Leica',
    precio: 1099,
    marcaId: 3,
    fotos: [
      'https://example.com/xiaomi13ultra-1.jpg',
      'https://example.com/xiaomi13ultra-2.jpg',
      'https://example.com/xiaomi13ultra-3.jpg'
    ]
  },
  {
    id: 22,
    nombre: 'Xiaomi Redmi Note 11',
    descripcion: 'Pantalla AMOLED 6.43", Snapdragon 680, batería 5000mAh',
    precio: 249,
    marcaId: 3,
    fotos: [
      'https://example.com/redminote11-1.jpg',
      'https://example.com/redminote11-2.jpg',
      'https://example.com/redminote11-3.jpg'
    ]
  },
  {
    id: 23,
    nombre: 'Xiaomi Mi 11 Lite',
    descripcion: 'Pantalla AMOLED, Snapdragon 732G, diseño ultra delgado',
    precio: 349,
    marcaId: 3,
    fotos: [
      'https://example.com/mi11lite-1.jpg',
      'https://example.com/mi11lite-2.jpg',
      'https://example.com/mi11lite-3.jpg'
    ]
  },
  {
    id: 24,
    nombre: 'Poco F5',
    descripcion: 'Pantalla AMOLED 120Hz, Snapdragon 7+ Gen 2, cámara de 64 MP',
    precio: 479,
    marcaId: 3,
    fotos: [
      'https://example.com/pocof5-1.jpg',
      'https://example.com/pocof5-2.jpg',
      'https://example.com/pocof5-3.jpg'
    ]
  },
  {
    id: 25,
    nombre: 'Motorola Moto G Power (2023)',
    descripcion: 'Pantalla 6.5" HD+, batería 5000mAh, chip Helio G37',
    precio: 199,
    marcaId: 4,
    fotos: [
      'https://example.com/motogpower2023-1.jpg',
      'https://example.com/motogpower2023-2.jpg',
      'https://example.com/motogpower2023-3.jpg'
    ]
  },
  {
    id: 26,
    nombre: 'Motorola Edge 30 Ultra',
    descripcion: 'Pantalla pOLED 144Hz, Snapdragon 8+ Gen 1, cámara de 200 MP',
    precio: 899,
    marcaId: 4,
    fotos: [
      'https://example.com/edge30ultra-1.jpg',
      'https://example.com/edge30ultra-2.jpg',
      'https://example.com/edge30ultra-3.jpg'
    ]
  },
  {
    id: 27,
    nombre: 'Motorola Moto E13',
    descripcion: 'Pantalla 6.5", chip Unisoc T606, Android 13 Go',
    precio: 129,
    marcaId: 4,
    fotos: [
      'https://example.com/motoe13-1.jpg',
      'https://example.com/motoe13-2.jpg',
      'https://example.com/motoe13-3.jpg'
    ]
  },
  {
    id: 28,
    nombre: 'Motorola Razr 2023',
    descripcion: 'Pantalla plegable OLED, diseño compacto, carga rápida',
    precio: 999,
    marcaId: 4,
    fotos: [
      'https://example.com/razr2023-1.jpg',
      'https://example.com/razr2023-2.jpg',
      'https://example.com/razr2023-3.jpg'
    ]
  }  
];