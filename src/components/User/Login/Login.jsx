import LogInForm from './LoginForm'
import {useAuth} from '../../../AuthContext'
import {useHistory} from "react-router-dom";


const LogIn =()=> {

    let history = useHistory();

    const {signin} = useAuth()

    const logIn =(email,password, setError)=>{

        const logIn = new Promise((resolve) => {
            resolve(signin(email, password));
        });
        
        logIn
        .then(()=>history.push("/"))
        .catch(error=>setError(error.message))
    }

    return(
        <div className='main-view'>
            <LogInForm logIn={logIn}/>
        </div>
    )
}

export default LogIn