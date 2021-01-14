import './Menu.css';
import SearchAppBar from "../Search";
import NavBarItem from "./NavBarItem/NavBarItem";
import {Link, useHistory} from "react-router-dom";
import {useContext, useState} from "react";
import {Store} from "../../Store";
import WidgetCart from "../WidgetCart/WidgetCart";


const Menu =({headings})=> {

    let history = useHistory();

    const [data, setData] = useContext(Store);

    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return(
        <>
            <header>
                <div className='header'>

                    <Link to='/' >
                        <a className='title'>electronic-Shop</a>
                    </Link>
                    <div className='inputs'>
                        <SearchAppBar action={openWidgetCart}/>
                        <nav >
                            <ul>
                                {headings.map(rubro => (
                                    <NavBarItem name={rubro.name} url={rubro.url} />
                                ))}
                                {<NavBarItem name='Mi Carrito' url='/cart' />}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <WidgetCart show={showWidgetCart}/>
        </>
    )
}

export default Menu;