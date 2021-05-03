import './Menu.css';
import SearchAppBar from "../Search";
import NavBarItem from "./NavBarItem/NavBarItem";
import React, {useContext, useEffect, useState} from "react";
import WidgetCart from "../WidgetCart/WidgetCart";
import {getFireStore} from "../../Data";
import {useHistory} from "react-router-dom";
import {pageName} from "../General/constants/strings";
import {IconBadge} from "../General/Icons/Icon";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Store} from "../../Store";
import {useAuth} from "../../AuthContext"


const Menu =()=> {

    const db = getFireStore()

    const [data] = useContext(Store);

    const {currentUser, logout} = useAuth()

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
            })
            .catch(error => console.log(`Error en la búsqueda de rubros, ${error}`))
    }

    useEffect(() => {
        getHeadings()
    },[]);

    let history = useHistory();

    const goHome =()=> {
        history.push("/")
    }

    return(
        <header className='header blue-background'>
            <span className='title' onClick={goHome}>{pageName}</span>
            <section className='nav-headings'>
                <SearchAppBar />
                {
                    headings.length >0
                        ?<nav >
                            <ul>
                                {headings.map(rubro => (
                                    <NavBarItem key={rubro.id} name={rubro.data.name} url={`/heading/${rubro.data.name}`} />
                                ))}
                            </ul>
                        </nav>
                        :null
                }
            </section>
            <section className='user-options'>
                <nav >
                    <ul >
                        <NavBarItem key={'cart'} name='Mi Carrito' url='/cart' />
                        <NavBarItem key={'mypurchases'} name='Mis compras' url='/purchases' />

                        {
                            currentUser
                            ?
                            <>
                                <NavBarItem key={'user'} name={currentUser.email} myclass='user' url='/' />
                                <NavBarItem key={'logout'} name='Salir' myclass='logout' logout={logout}/>
                            </>
                            :
                            <>
                                <NavBarItem key={'login'}  name='Ingresar' url='/login' />
                                <NavBarItem key={'signup'} name='Registrarme' myclass='signup' url='/signup' />
                            </>
                        } 
                        {
                            data.items.length >0
                                ?
                                <IconBadge count={data.items.length} icon={<ShoppingCartIcon className='iconWhite' onClick={openWidgetCart} />}  />
                                :
                                null
                        }
                    </ul>
                </nav>
            </section>
            <WidgetCart show={showWidgetCart}/>
        </header>
    )
}

export default Menu;