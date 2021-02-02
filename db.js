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
        description: 'Cable desnudo, caja por 100 métros',
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
