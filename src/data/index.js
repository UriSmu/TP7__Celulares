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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3XoD6b8H2UHRljoo78y8J29_tcLATtbwu4A&s',
      'https://tienda.personal.com.ar/images/i_Phone_14_Pro_Silver_ae80bf739a.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXzhbJ2-4gxJZxlD6ljNd9tlWFoI-Z8PVgQ&s'
    ]
  },
  {
    id: 2,
    nombre: 'Samsung Galaxy S23',
    descripcion: 'Pantalla AMOLED 6.1", Snapdragon 8 Gen 2, cámara triple',
    precio: 999,
    marcaId: 2,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePIvhMWyO4Id0dAfSVPuPpl_HasEcSjnNGw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkslW6-MDOkgKMHxwaZG7nYWRv406SGWmFwQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_NLEbHgY4OjLJCV463SGJ8tnKd3YwrwbRQ&s'
    ]
  },
  {
    id: 3,
    nombre: 'Xiaomi 13 Pro',
    descripcion: 'Pantalla AMOLED 6.73", cámara Leica, carga rápida 120W',
    precio: 899,
    marcaId: 3,
    fotos: [
      'https://images.precialo.com/products/xiaomi-redmi-note-13-pro-5g-dual-sim-256-gb-negro-estelar-8-gb-ram-1/5e149ac4-45ca-4872-bd51-745f32d42b4d.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-o1g1uPvycdZdlSuqhuC_atB6nZhUdg8f7g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeKtPOt-bkBkDK-vzCAZBJD6-R2HzKjF78w&s'
    ]
  },
  {
    id: 4,
    nombre: 'Motorola Edge 40',
    descripcion: 'Pantalla pOLED, MediaTek Dimensity 8020, resistente al agua',
    precio: 699,
    marcaId: 4,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQKNaMBTCYWGBFzxuTnNugWDTV68dyOYNFw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlEsduaaoYEVUu95nD2uefTl_V_uhJTLK8g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCq0gi1mLszJKxhgDgrlyeDRC2TCUFzpSjUQ&s'
    ]
  },
  {
    id: 5,
    nombre: 'iPhone 13',
    descripcion: 'Pantalla OLED 6.1", chip A15 Bionic, cámara dual de 12 MP',
    precio: 899,
    marcaId: 1,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QepmW7HaGB-oyvHffPS1QS-ELfS7gAopqw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUj40oPpTrwi2ddLYlPCpmwEnxC6L8zsZ5g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSegDflJ4kaUegjJO3tUE7YnDaDjHxot0M9A&s'
    ]
  },
  {
    id: 6,
    nombre: 'Samsung Galaxy Z Fold 5',
    descripcion: 'Pantalla plegable AMOLED, Snapdragon 8 Gen 2, multitarea',
    precio: 1799,
    marcaId: 2,
    fotos: [
      'https://tienda.personal.com.ar/images/720/webp/Samsung_Galaxy_Z_Fold5_512_GB_Icy_Blue1_fe360a17a3.png',
      'https://images-cdn.ubuy.co.id/6528167a139dd8477352bdd3-samsung-galaxy-z-fold-5-f9460-foldable.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbyHUHUNic3CV5u67l2jps4I5rAbvsfeuAA&s'
    ]
  },
  {
    id: 7,
    nombre: 'Xiaomi Redmi Note 12',
    descripcion: 'Pantalla AMOLED 6.67", Snapdragon 685, batería de 5000mAh',
    precio: 299,
    marcaId: 3,
    fotos: [
      'https://www.blogtecno.mx/wp-content/uploads/2024/07/D_NQ_NP_860370-MLU73572824681_122023-O.webp',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4FFdCNoEZNmpOHMa_TGUPhC0RwUGnpkVBQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV5wYgLouiwNhfJeEtL3ha7-LuA0IEBMdkNQ&s'
    ]
  },
  {
    id: 8,
    nombre: 'Motorola Moto G73',
    descripcion: 'Pantalla LCD 6.5", Dimensity 930, cámara de 50 MP',
    precio: 349,
    marcaId: 4,
    fotos: [
      'https://bioscomputacion.com.ar/img/Public/1161/98868-producto-motorola-moto-g73-5g-8gb-256gb-l.jpg',
      'https://ar.celulares.com/fotos/motorola-moto-g73-96685-g-alt.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGCh8oJQ-F_6ugMlae6DAQWvSSjunARUoWQ&s'
    ]
  },
  {
    id: 9,
    nombre: 'iPhone SE (2022)',
    descripcion: 'Pantalla Retina 4.7", chip A15 Bionic, diseño compacto',
    precio: 429,
    marcaId: 1,
    fotos: [
      'https://bioscomputacion.com.ar/img/Public/1161/99094-producto-se-2022.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fZMU43UXDTB860kzoFPXY2KSmJ1lf0LGFw&s',
      'https://lh4.googleusercontent.com/proxy/wt81HWe948Hgj7hDWiAzQ9qNdH0Bi7K2hEbmm1ysMdZx76Qhh96ucktWgYKoMGz8lIjJ4LpN8MU8CFuELtQ0ZK2hd_RSAMCWAbO6HAGHxbiM'
    ]
  },
  {
    id: 10,
    nombre: 'Samsung Galaxy A54',
    descripcion: 'Pantalla AMOLED 6.4", Exynos 1380, batería de 5000mAh',
    precio: 449,
    marcaId: 2,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUK_QGQRjwD0GjeuWYLjciGrqsiMXoDAQH4Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonJdcyHtuB0jDvcKmjeCMvDdRYhWOHN2bAA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodJCdYE8pw2O0CwQf8rTkQJY7Hlbt99bkHg&s'
    ]
  },
  {
    id: 11,
    nombre: 'Xiaomi Poco X5 Pro',
    descripcion: 'Pantalla AMOLED 6.67", Snapdragon 778G, carga rápida 67W',
    precio: 379,
    marcaId: 3,
    fotos: [
      'https://m.media-amazon.com/images/I/71BJz1Hyz6L._AC_SL1000_.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT783X7EhCHANkgzuhwv6IPd7DBnfU2T_YpTQ&s',
      'https://cdn-files.kimovil.com/default/0008/35/thumb_734830_default_big.jpg'
    ]
  },
  {
    id: 12,
    nombre: 'Motorola Razr 40 Ultra',
    descripcion: 'Pantalla plegable AMOLED, Snapdragon 8+, diseño retro',
    precio: 1099,
    marcaId: 4,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31NMe75yDMQu5J7LwJUpyHIbbS-t75aHTdw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1g71OnXTBcSWoAW5yBztIOq-yYFW7yWdBA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhBpeoZdCDmo1uLKghu4FySMLYn3Iyiy3IA&s'
    ]
  },
  {
    id: 13,
    nombre: 'iPhone 15 Pro Max',
    descripcion: 'Pantalla Super Retina XDR, chip A17 Pro, titanio, cámara de 5x zoom óptico',
    precio: 1499,
    marcaId: 1,
    fotos: [
      'https://m.media-amazon.com/images/I/616mZZm8-7L.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14qUZqT0M49gz5cv1skXQuWjXUKC0RLAXTQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHq6-mPcGiZ2lt_kraNWZ2I-aBaONQzwYRg&s'
    ]
  },
  {
    id: 14,
    nombre: 'iPhone 14',
    descripcion: 'Pantalla OLED 6.1", chip A15 Bionic, cámara dual mejorada',
    precio: 799,
    marcaId: 1,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwxR2plMrWrCqlMvoWvSZpeyp-XRETYC9Vw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_nXovlVoIfXRgyE2Lzn4aFMjLo7o7_iP6g&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtyEpcgbyT48tITkMuYl_sB2KUi4uzDLiXQ&s'
    ]
  },
  {
    id: 15,
    nombre: 'iPhone 13 mini',
    descripcion: 'Pantalla OLED 5.4", chip A15 Bionic, formato compacto',
    precio: 699,
    marcaId: 1,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-8WuU-OW7hx2IZCuxD009Uo6aYK_7Yp9Dg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBAKYGh_T4XhNzuR-0iM76dZKkOo3gQxtKoA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft5hdUY-Z-LqWi26RbejNghUJj-OX4qYzcw&s'
    ]
  },
  {
    id: 16,
    nombre: 'iPhone 12',
    descripcion: 'Pantalla OLED 6.1", chip A14 Bionic, compatible con MagSafe',
    precio: 599,
    marcaId: 1,
    fotos: [
      'https://i5.walmartimages.com/seo/Total-by-Verizon-Apple-iPhone-12-Mini-64GB-Blue-Prepaid-Smartphone-Locked-to-Total-by-Verizon_9e6b4865-929e-4ae1-b4df-520b1d597147.35552649f9f8f30e58164fe8f64bb930.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmd5vjpPZOoTD0Z1IpDvBadjJYNVcgck1IOg&s',
      'https://ishopmx.vtexassets.com/arquivos/ids/315852/194252029466_1.jpg?v=638803525857930000'
    ]
  },
  {
    id: 17,
    nombre: 'Samsung Galaxy S22 Ultra',
    descripcion: 'Pantalla AMOLED 6.8", S Pen integrado, cámara de 108 MP',
    precio: 1199,
    marcaId: 2,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSioF5bI8ExWWES6vYtcfmwvpvSnHdO1xOsIg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWfhOQrA03dzWun7ILLjHA6sB-sD5WgCclg&s',
      'https://ferbi.com.ar/web/image/product.image/10558/image_1024/Celular%20Samsung%20Galaxy%20S22%20Ultra%20Reacondicionado?unique=3136477'
    ]
  },
  {
    id: 18,
    nombre: 'Samsung Galaxy Z Flip 5',
    descripcion: 'Pantalla plegable, diseño compacto, Snapdragon 8 Gen 2',
    precio: 999,
    marcaId: 2,
    fotos: [
      'https://lh5.googleusercontent.com/proxy/czZo1u3GiOfYQ2ulgvGrBn6-pzaZMbfK1f1Zewd6qspO53tDs3bpQ08t876czN9GFibRYf7yNQyozx97EWeCxVjahVO0U6kxeDJ8oN_KKlNV',
      'https://ferbi.com.ar/web/image/product.image/13322/image_1024/Celular%20Samsung%20Galaxy%20Z%20FLIP5%20Reacondicionado?unique=1afc795',
      'https://tienda.claro.com.ar/staticContent/Claro/images/catalog/productos/646x1000/70011637_3.webp'
    ]
  },
  {
    id: 19,
    nombre: 'Samsung Galaxy A34',
    descripcion: 'Pantalla AMOLED 6.6", chip Dimensity 1080, buena autonomía',
    precio: 399,
    marcaId: 2,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tRn7f6-xyvQsl8lpwcTvX97-KnPGfx6PfQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJPRYWhPqc1ZGf_nQtXXxGgk9IB7rTJqiMQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaC-ZB7DI-tfRkl-UQp0FPlySARMYGjIqSg&s'
    ]
  },
  {
    id: 20,
    nombre: 'Samsung Galaxy M14',
    descripcion: 'Pantalla PLS LCD, Exynos 1330, batería 6000mAh',
    precio: 199,
    marcaId: 2,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2E4oCDXdPdQbO9Qxwo5_eYVcvG4feiXtQg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VmILrAJGsClC4shA7D3jRRsrCo6aShvyXA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuK6yTlm-hPY2qHwQuz4ARMXGNvXvb-bQMIg&s'
    ]
  },
  {
    id: 21,
    nombre: 'Xiaomi 13 Ultra',
    descripcion: 'Pantalla AMOLED, Snapdragon 8 Gen 2, cámara cuádruple Leica',
    precio: 1099,
    marcaId: 3,
    fotos: [
      'https://acdn-us.mitiendanube.com/stores/001/531/943/products/d_nq_np_607477-mla69315483875_052023-o-bd862be5088f2a7ffe16980779948638-640-0.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRdKV9QSYyeABerrnvpj-fYbrrlnF6beJOQ&s',
      'https://www.clarin.com/2023/04/17/XEWyCpP-7_2000x1500__1.jpg'
    ]
  },
  {
    id: 22,
    nombre: 'Xiaomi Redmi Note 11',
    descripcion: 'Pantalla AMOLED 6.43", Snapdragon 680, batería 5000mAh',
    precio: 249,
    marcaId: 3,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSRME1gIOtTOU5gixu75KweIOhrh83W23gw&s',
      'https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/r/e/redmi-black-atras_3.png',
      'https://tiendamovilspain.com/img/cms/redmi-note-11-pro-5g/almacenamiento-ram-xiaomi-redmi-note-11-pro-5g.png'
    ]
  },
  {
    id: 23,
    nombre: 'Xiaomi Mi 11 Lite',
    descripcion: 'Pantalla AMOLED, Snapdragon 732G, diseño ultra delgado',
    precio: 349,
    marcaId: 3,
    fotos: [
      'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/e/0/e06907.4.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3602I3W87-xs0lWRbYlQrhyp82x18-WeOKg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3py3wxzrN2UIp0BJIFTV6GkuR-toT_HZaQA&s'
    ]
  },
  {
    id: 24,
    nombre: 'Xiaomi Poco F5',
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
      'https://bioscomputacion.com.ar/img/Public/1161/producto-d-nq-np-864215-mla69391501813-05-4169.jpg',
      'https://i02.appmifile.com/mi-com-product/fly-birds/poco-f5/m/e2ea37326acc0c8cbd15eb0c94e2345f.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIIVv1-4XOfjkDr_5xtYBm6Yzrm8bJXfj7g&s'
    ]
  },
  {
    id: 26,
    nombre: 'Motorola Edge 30 Ultra',
    descripcion: 'Pantalla pOLED 144Hz, Snapdragon 8+ Gen 1, cámara de 200 MP',
    precio: 899,
    marcaId: 4,
    fotos: [
      'https://rongahogar.com.ar/storage/2024/07/00000783_1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_pl_kBXLsTEF4FJh_QD9eHKKpj7AcbGsBw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoclcCPPpG-ZHIkj0AbyixihB8hO9lU1Lcw&s'
    ]
  },
  {
    id: 27,
    nombre: 'Motorola Moto E13',
    descripcion: 'Pantalla 6.5", chip Unisoc T606, Android 13 Go',
    precio: 129,
    marcaId: 4,
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-bb8GCaY3BxRM_tFdQMaYhaVWTTnbeiNnnFjAilqbgH4ZMiPNi1XM2Fm4UbDGK2Bi2I&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImbDPpqS_aj09FzdMEXRcDO_YWe07POP0lw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhGXI31rIN9V5nWsajcaom-v1-0Rnt4hcew&s'
    ]
  },
  {
    id: 28,
    nombre: 'Motorola Razr 2023',
    descripcion: 'Pantalla plegable OLED, diseño compacto, carga rápida',
    precio: 999,
    marcaId: 4,
    fotos: [
      'https://motoecuador.vtexassets.com/arquivos/ids/155884-800-auto?v=638297867114070000&width=800&height=auto&aspect=true',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4S5FXzXTQKsJwfM-eb_aMsJ9xi6nCXqdNQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmUo87o6NTpUiPfDQGnFA9ntm2fTsBx-Raw&s'
    ]
  }  
];