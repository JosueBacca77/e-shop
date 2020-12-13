import acometida from '../components/Images/acometida.jpg'
import llaveluz from '../components/Images/llaveluz.jpeg'
import spot3 from '../components/Images/spot3.jpg'
import guantes from '../components/Images/guantes de seguridad.jpg'
import lampara from '../components/Images/lamparabajocons.jpg'
import cabledes from '../components/Images/cable-desnudo.png'


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
        name: 'Acometida',
        image: acometida,
        description: 'Cable acometida negro, precio por metro',
        stock: 10
    },
    {
        name: 'Scot',
        image: spot3,
        description: 'Spot fijo de 3 luces',
        stock: 5
    },
    {
        name: 'Llave luz',
        image: llaveluz,
        description: 'Dos llaves y un enchufe',
        stock: 9
    },
    {
        name: 'Guantes',
        image: guantes,
        description: 'Guantes para electricista',
        stock: 2
    },
    {
        name: 'Lámpara',
        image: lampara,
        description: 'Lámpara bajo consumo 200W',
        stock: 6
    },
    {
        name: 'Cable desnudo',
        image: cabledes,
        description: 'Cable desnudo, caja por 100 métros',
        stock: 8
    },
]

export {rubros, temporalArticles}