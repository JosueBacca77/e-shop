import acometida from '../components/Images/acometida.jpg'
import llaveluz from '../components/Images/llaveluz.jpeg'
import spot3 from '../components/Images/spot3.jpg'
import guantes from '../components/Images/guantes de seguridad.jpg'
import lampara from '../components/Images/lamparabajocons.jpg'
import cabledes from '../components/Images/cable-desnudo.png'
import g2 from '../components/Images/g2.jpeg'
import g3 from '../components/Images/g3.jpeg'


const rubros = [
    {
        name: 'Cables',
        url: '#'
    },
    {
        name: 'Iluminación',
        url: '#'
    },
    {
        name: 'Fijaciones',
        url: '#'
    },
    {
        name: 'Llaves',
        url: '#'
    },
    {
        name: 'Accesorios',
        url: '#'
    },

]

const temporalArticles = [
    {
        name: 'Guantes',
        images: [guantes,g2,g3],
        description: 'Guantes para electricista',
        price: 25.50,
        unit: 'par',
        stock: 2
    },
    {
        name: 'Acometida',
        images: [acometida],
        description: 'Cable acometida negro, precio por metro',
        price: 35.99,
        unit: 'metro',
        stock: 10
    },
    {
        name: 'Scot',
        images: [spot3],
        description: 'Spot fijo de 3 luces',
        price: 120.59,
        unit: 'unidad',
        stock: 5
    },
    {
        name: 'Llave luz',
        images: [llaveluz],
        description: 'Dos llaves y un enchufe',
        price: 130.00,
        unit: 'unidad',
        stock: 9
    },
    {
        name: 'Lámpara',
        images: [lampara],
        description: 'Lámpara bajo consumo 200W',
        price: 89.99,
        unit: 'unidad',
        stock: 6
    },
    {
        name: 'Cable desnudo',
        images: [cabledes],
        description: 'Cable desnudo, caja por 100 métros',
        price: 325.00,
        unit: 'metros',
        stock: 8
    },
]

export {rubros, temporalArticles}