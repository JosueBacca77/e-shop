import './Menu.css';
import SearchAppBar from "../Search";
import NavBarItem from "./NavBarItem/NavBarItem";
import React, {useEffect, useState} from "react";
import WidgetCart from "../WidgetCart/WidgetCart";
import {getFireStore} from "../../Data";
import CardActionArea from "@material-ui/core/CardActionArea";
import {useHistory} from "react-router-dom";


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
        <>
            <header>
                <div className='header blue-background'>
                    <CardActionArea onClick={goHome}>
                        <span className='title'>electronic-Shop</span>
                    </CardActionArea>
                    <div className='inputs'>
                        <SearchAppBar action={openWidgetCart}/>
                        {
                            headings.length >0
                            ?<nav >
                                    <ul>
                                        {headings.map(rubro => (
                                            <NavBarItem key={rubro.id} name={rubro.data.name} url={`/heading/${rubro.data.name}`} />
                                        ))}
                                        {<NavBarItem key={'cart'} name='Mi Carrito' url='/cart' />}
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