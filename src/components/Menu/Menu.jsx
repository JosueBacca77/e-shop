import './Menu.css';
import SearchAppBar from "../Search";
import NavBarItem from "./NavBarItem/NavBarItem";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import WidgetCart from "../WidgetCart/WidgetCart";
import {getFireStore} from "../../Data";


const Menu =()=> {

    const db = getFireStore()

    const [headings, setHeadings] = useState([])

    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    const getHeadings = () =>{
        db.collection('Headings').get()
            .then(heads => {
                let arr = [];
                heads.forEach(head => {
                    arr.push({
                        id: head.id,
                        data: head.data()
                    })
                })
                setHeadings(arr)
                console.log('headings')
                console.log(arr)
            })
            .catch(error => console.log(`Error en la búsqueda de rubros, ${error}`))
    }

    useEffect(() => {
        getHeadings()
    }, []);

    return(
        <>
            <header>
                <div className='header'>

                    <Link to='/' >
                        <a className='title'>electronic-Shop</a>
                    </Link>
                    <div className='inputs'>
                        <SearchAppBar action={openWidgetCart}/>
                        {
                            headings.length >0
                            ?<nav >
                                    <ul>
                                        {headings.map(rubro => (
                                            <NavBarItem name={rubro.data.name} url={`/heading/${rubro.data.name}`} />
                                        ))}
                                        {<NavBarItem name='Mi Carrito' url='/cart' />}
                                    </ul>
                                </nav>
                                :null
                        }

                    </div>
                </div>
            </header>
            <WidgetCart show={showWidgetCart}/>
        </>
    )
}

export default Menu;