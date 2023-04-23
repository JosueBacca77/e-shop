import './Menu.css';
import SearchAppBar from "../Search";
import NavBarItem from "./NavBarItem/NavBarItem";
import React, {useContext, useEffect, useState} from "react";
import WidgetCart from "../WidgetCart/WidgetCart";
import {getFireStore} from "../../Data";
import {useHistory, useLocation} from "react-router-dom";
import {pageName} from "../General/constants/strings";
import {IconBadge} from "../General/Icons";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Store} from "../../Store";
import {useAuth} from "../../AuthContext"
import { useWindowSize } from '../../Hooks/SizeScreenHook';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import MobileWidgetOptions from './MobileMenuWidget/MobileWidgetOptions';
import { ClearCart } from '../../Store/ManageContext';


const useStyles = makeStyles((theme) => ({
    menuIcon: {
        width: '40px',
        height:'40px',
        color: 'white',
    },
    mainOptions:{
        display:'flex',
        alignItems:'center',
        justifyContent:'left',
    },
    mainOptionsWithCart:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:'15px',
    }
}));


const Menu =()=> {

    const db = getFireStore()

    const classes = useStyles()

    const [data] = useContext(Store);

    const [dataCont, setDataCont] = useContext(Store);

    const {currentUser, logout} = useAuth()

    const [headings, setHeadings] = useState([])

    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const [showWidgetUser, setShowWidgetUser] = useState(false);

    const location = useLocation();
    
    const size = useWindowSize();

    let history = useHistory();

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    const openWidgetUser = () => {
        return size.width<991 ? setShowWidgetUser(!showWidgetUser) : null
    }

    const onHandleNav=(myclass, url)=>{
        // if(setMobileWidget){
        //     setMobileWidget(false)
        // }
        if (myclass ==='logout'){
            ClearCart(setDataCont)
            logout()
            history.push('/')
        }else{
            if(url){
                history.push(url)
            }
        }
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

    const goHome =()=> {
        history.push("/")
    }

    return(

        <header>
            {
                size.width > 991
                ?
                <article className='header dark-background'>
                    <span className='title' onClick={goHome}>{pageName}</span>
                    <section className='products-options'>
                        <SearchAppBar />
                        {
                            headings.length >0
                                ?<nav >
                                    <ul>
                                        {headings.map(rubro => (
                                            <NavBarItem 
                                                key={rubro.id} 
                                                name={rubro.data.name} 
                                                url={`/heading/${rubro.data.name}`}
                                                onHandleNav={onHandleNav}
                                                currentLocation={location.pathname.split('/').at(-1)}
                                            />
                                        ))}
                                    </ul>
                                </nav>
                                :null
                        }
                    </section>
                    <section className='user-options'>
                        <ul >
                            <div className='carticon'>
                                <NavBarItem 
                                    key={'cart'} 
                                    name='My cart' 
                                    url='/cart' 
                                    onHandleNav={onHandleNav}
                                    currentLocation={location.pathname.split('/').at(-1)==='cart'?'My cart':''}
                                />
                                <NavBarItem 
                                    key={'mypurchases'} 
                                    name='My purchases' 
                                    url='/purchases' 
                                    onHandleNav={onHandleNav}
                                    currentLocation={location.pathname.split('/').at(-1)==='purchases'?'My purchases':''}
                                />
                                {
                                    data.items.length >0
                                    ?
                                        <IconBadge count={data.items.length} icon={<ShoppingCartIcon className='iconWhite' 
                                                onClick={null}// needs visual refactor{openWidgetCart} 
                                            />}
                                        />
                                    :
                                    null
                                }
                                {
                                    currentUser
                                    ?
                                    <>
                                        <NavBarItem 
                                            key={'user'} 
                                            name={currentUser.email} 
                                            myclass='user' 
                                            url='/'
                                            onHandleNav={onHandleNav}
                                            currentLocation={location.pathname.split('/').at(-1)==='cart'?'My cart':''}

                                        />
                                        <NavBarItem 
                                            key={'logout'} 
                                            name='Log out' 
                                            myclass='logout' 
                                            logout={logout}
                                            onHandleNav={onHandleNav}
                                        />
                                    </>
                                    :
                                    <>
                                        <NavBarItem 
                                            key={'login'}  
                                            name='Log in' 
                                            url='/login' 
                                            onHandleNav={onHandleNav}
                                            currentLocation={location.pathname.split('/').at(-1)==='login'?'Log in':''}

                                        />
                                        <NavBarItem 
                                            key={'signup'} 
                                            name='Sign up' 
                                            myclass='signup' 
                                            url='/signup' 
                                            onHandleNav={onHandleNav}
                                            currentLocation={location.pathname.split('/').at(-1)==='signup'?'Sign up':''}
                                        />
                                    </>
                                }
                                </div>
                            </ul>
                    </section>
                </article>
                :
                <article className='dark-background'>
                    <section className={data.items.length >0?classes.mainOptionsWithCart:classes.mainOptions}>
                        <IconButton>
                            <MenuIcon className={classes.menuIcon} onClick={openWidgetUser}/>
                        </IconButton>
                        <span className='mobile-title' onClick={goHome}>{pageName}</span>
                        {
                            data.items.length >0
                            ?
                                <IconBadge count={data.items.length} icon={<ShoppingCartIcon className='iconWhite' onClick={openWidgetCart} />}  />
                            :
                                null
                        }
                    </section>
                    <section className='products-options'>
                        <SearchAppBar />
                        {
                            headings.length >0
                                ?<nav>
                                    <ul>
                                        {headings.map(rubro => (
                                            <li>
                                                <NavBarItem key={rubro.id} 
                                                    name={rubro.data.name} 
                                                    url={`/heading/${rubro.data.name}`}
                                                    onHandleNav={onHandleNav} 
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            :null
                        }
                    </section>
                </article>
            }
            <WidgetCart show={showWidgetCart}/>
            <MobileWidgetOptions show={showWidgetUser} 
                setShow={setShowWidgetUser}
                currentUser={currentUser}
                logout={logout}
                onHandleNav={onHandleNav}
            />
        </header>
    )
}

export default Menu;