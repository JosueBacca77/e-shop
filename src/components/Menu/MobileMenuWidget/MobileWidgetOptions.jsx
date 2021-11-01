import './MobileWidgetOptions.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core';
import MobileNavBarItem from './MobileNavBarItem/MobileNavBarItem';
import { blue, indigo } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    accountIcon: {
        width: '40px',
        height:'40px',
        color: 'white',
    },
    backIcon:{
        width: '25px',
        height:'25px',
        color: 'white',
    },
    userAccount:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems:'center',
        height:'70px',
    },
    userWidget:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: indigo[600],
        padding:'0 3%',
    },
    userOptions:{
        display: 'flex',
        flexDirection:'column',
    },
    userOption:{
        color: blue[900],
        fontWeight:'bold',
        height:'20%',
        fontSize:'1.4em',
        padding:'10px',
        '&:hover': {
            backgroundColor: indigo[100],
            cursor: 'pointer',
        },
    }
}));

const WidgetOptions = ({show, setShow, currentUser, logout, onHandleNav}) => {

    const classes = useStyles()

    return (
        <>
            <article className={`widgetOptions ${show ? 'open' : 'close'}`}>
                <section className={classes.userWidget}>
                    <div className={classes.userAccount}>
                        <AccountCircleIcon className={classes.accountIcon}/>
                        <MobileNavBarItem 
                            name={currentUser ? currentUser.email.split('@',1) : 'Ingresar'} 
                            url={currentUser ? '' : '/login'}
                            myclass='user'
                            onHandleNav={()=>onHandleNav('user', currentUser ? '' : '/login', setShow)}
                            setMobileWidget={setShow} 
                        />
                    </div>
                    <ArrowBack className={classes.backIcon} onClick={()=> setShow(false)}/>
                </section>
                
                <section className={classes.userOptions}>
                    {
                        currentUser
                        ?
                        <>
                            <MobileNavBarItem 
                                key={'mypurchases'} 
                                name='Mis compras' 
                                url='/purchases'
                                myclass='option'
                                onHandleNav={()=>onHandleNav('option', '/purchases', setShow)}
                                setMobileWidget={setShow} 
                            />
                            <MobileNavBarItem
                                key={'cart'} 
                                name='Mi Carrito' 
                                url='/cart'
                                myclass='option'
                                onHandleNav={()=>onHandleNav('option', '/cart', setShow)}
                                setMobileWidget={setShow} 
                            />
                            <MobileNavBarItem 
                                key={'logout'} 
                                name='Salir' 
                                myclass='logout' 
                                logout={logout}
                                onHandleNav={()=>onHandleNav('logout', '/', setShow)}
                                setMobileWidget={setShow}
                            />
                        </>
                        :
                        <MobileNavBarItem key={'signup'} 
                            name='Registrarme' 
                            myclass='option' 
                            url='/signup'
                            onHandleNav={()=>onHandleNav('option', '/signup', setShow)}
                            setMobileWidget={setShow} 
                        />
                    }
                </section>
            </article>
        </>
    )
}

export default WidgetOptions;