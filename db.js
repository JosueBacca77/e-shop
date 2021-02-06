const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: "electronic-shop-5d783",
});

const db = firebase.firestore();

const headings = [
    {
        id: 1,
        name: 'Cables',
        url: '/heading/1'
    },
    {
        id: 2,
        name: 'Iluminación',
        url: '/heading/2'
    },
    {
        id: 3,
        name: 'Llaves',
        url: '/heading/3'
    },
    {
        id: 4,
        name: 'Accesorios',
        url: '/heading/4'
    },
]

const articles = [
    {
        name: 'Guantes',
        images: ['g1.jpg','g2.jpeg','g3.jpeg'],
        description: 'Guantes para electricista',
        price: 25.50,
        unit: 'par',
        stock: 2,
        heading: 'Accesorios'
    },
    {
        name: 'Cable desnudo',
        images: ['cable-desnudo.png'],
        description: 'Cable desnudo',
        price: 325.00,
        unit: 'metro',
        stock: 8,
        heading: 'Cables'
    },
    {
        name: 'Spot',
        images: ['spot3.jpg','spot3-2.jpeg','spot3-3.jpg'],
        description: 'Spot fijo de 3 luces',
        price: 120.59,
        unit: 'unidad',
        stock: 5,
        heading: 'Iluminación'
    },
    {
        name: 'Llave blanca',
        images: ['llaveluz.jpeg'],
        description: 'Dos llaves y un enchufe',
        price: 130.00,
        unit: 'unidad',
        stock: 9,
        heading: 'Llaves'
    },
    {
        name: 'Lámpara',
        images: ['lampara.jpg','lampara2.png','lampara3.jpg'],
        description: 'Lámpara bajo consumo 200W',
        price: 89.99,
        unit: 'unidad',
        stock: 6,
        heading: 'Iluminación'
    },
    {
        name: 'Acometida',
        images: ['acometida.jpg', 'acometida2.png', 'acometida3.jpg'],
        description: 'Cable acometida negro, precio por metro',
        price: 35.99,
        unit: 'metro',
        stock: 10,
        heading: 'Cables'
    },
    {
        name: 'Gafas',
        images: ['gafas1.jpg','gafas2.jpg','gafas3.jpg'],
        description: 'Gafas resistentes al calor',
        price: 500.00,
        unit: 'unidad',
        stock: 4,
        heading: 'Accesorios'
    },
    {
        name: 'Gafas negras',
        images: ['gafanegra.jpg','gafanegra2.jpg','gafanegra3.jpeg'],
        description: 'Gafas polarizadas para electricista resistentes al calor, especiales para soldaduras',
        price: 500.00,
        unit: 'unidad',
        stock: 8,
        heading: 'Accesorios'
    },
    {
        name: 'Llave negra',
        images: ['llavenegra.jpg'],
        description: 'Dos llaves de luz',
        price: 140.00,
        unit: 'unidad',
        stock: 10,
        heading: 'Llaves'
    },
    {
        name: 'Llave marrón',
        images: ['llavemarron.jpg'],
        description: 'Llave marrón claro con botones blancos',
        price: 150.00,
        unit: 'unidad',
        stock: 7,
        heading: 'Llaves'
    },
    {
        name: 'Llave plateada',
        images: ['llaveplateada.jpg'],
        description: 'Llave plateada brillante PICKENS',
        price: 156.00,
        unit: 'unidad',
        stock: 2,
        heading: 'Llaves'
    },
    {
        name: 'Cable tripolar',
        images: ['tripolar.jpg','tripolar2.jpeg','tripolar3.jpg'],
        description: 'Cable tripolar resistente',
        price: 285.00,
        unit: 'metro',
        stock: 18,
        heading: 'Cables'
    },
    {
        name: 'Cable de red',
        images: ['cablered.jpg','cablered2.jpeg','cablered3.jpeg'],
        description: 'Delta AMPXL AM-PC-20 Cable UTP Cat5e con conectores RJ45 20 metros. Para Interiores',
        price: 312.00,
        unit: 'metro',
        stock: 16,
        heading: 'Cables'
    },
    {
        name: 'Casco',
        images: ['casco.jpeg','casco2.jpeg','casco3.jpeg'],
        description: 'Casco albañil homologado CLIMAX 5-RS amarillo',
        price: 140.00,
        unit: 'unidad',
        stock: 36,
        heading: 'Accesorios'
    },
    {
        name: 'Farol',
        images: ['farol.jpg','farol2.jpeg'],
        description: 'Farol para pared Hampton Bay, utiliza un foco CFL de 26 watts (no incluido), útil para iluminar espacios exteriores del hogar, como patios, cocheras, etc.',
        price: 160.00,
        unit: 'unidad',
        stock: 6,
        heading: 'Iluminación'
    },
    {
        name: 'Linterna',
        images: ['linterna.jpg','linterna2.jpg','linterna3.jpg'],
        description: 'Xml-t6 Zoomable De Linterna Led Linterna Led Potente Linterna De Aluminio De Poderosos Linternas Para La Caza',
        price: 128.00,
        unit: 'unidad',
        stock: 23,
        heading: 'Iluminación'
    },
    {
        name: 'Medidor',
        images: ['metro3.jpg','metro2.png','metro.jpg'],
        description: 'Flexómetro enrollable STANLEY de 5 a 16 m',
        price: 128.00,
        unit: 'unidad',
        stock: 23,
        heading: 'Iluminación'
    },
];

articles.forEach((obj) => {
    db.collection("Articles")
        .add({
            name: obj.name,
            heading: obj.heading,
            description: obj.description,
            images: obj.images,
            price: obj.price,
            unit: obj.unit,
            stock: obj.stock,
        })
        .then((docRef) => {
            console.log("Articulo registrado con ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error al agregar un documento: ", error);
        });
});
