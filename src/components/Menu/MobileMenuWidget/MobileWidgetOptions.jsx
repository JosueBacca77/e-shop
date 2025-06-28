import './MobileWidgetOptions.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';
import MobileNavBarItem from './MobileNavBarItem/MobileNavBarItem';
import { blue, indigo } from '@mui/material/colors';

const useStyles = styled('div')(() => ({
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

    const StyledDiv = useStyles

    return (
        <>
            <article className={`widgetOptions ${show ? 'open' : 'close'}`}>
                <StyledDiv>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems:'center',
                        height:'70px',
                    }}>
                        <AccountCircleIcon style={{
                            width: '40px',
                            height:'40px',
                            color: 'white',
                        }}/>
                        <MobileNavBarItem 
                            name={currentUser ? currentUser.email.split('@',1) : 'Log In'} 
                            url={currentUser ? '' : '/login'}
                            myclass='user'
                            onHandleNav={()=>onHandleNav('user', currentUser ? '' : '/login', setShow)}
                            setMobileWidget={setShow} 
                        />
                    </div>
                    <ArrowBack style={{
                        width: '25px',
                        height:'25px',
                        color: 'white',
                    }} onClick={()=> setShow(false)}/>
                </StyledDiv>
                
                <section style={{
                    display: 'flex',
                    flexDirection:'column',
                }}>
                    {
                        currentUser
                        ?
                        <>
                            <MobileNavBarItem 
                                key={'mypurchases'} 
                                name='My purchases' 
                                url='/purchases'
                                myclass='option'
                                onHandleNav={()=>onHandleNav('option', '/purchases', setShow)}
                                setMobileWidget={setShow} 
                            />
                            <MobileNavBarItem
                                key={'cart'} 
                                name='My cart' 
                                url='/cart'
                                myclass='option'
                                onHandleNav={()=>onHandleNav('option', '/cart', setShow)}
                                setMobileWidget={setShow} 
                            />
                            <MobileNavBarItem 
                                key={'logout'} 
                                name='Logout' 
                                myclass='logout' 
                                logout={logout}
                                onHandleNav={()=>onHandleNav('logout', '/', setShow)}
                                setMobileWidget={setShow}
                            />
                        </>
                        :
                        <MobileNavBarItem key={'signup'} 
                            name='Sign Up' 
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