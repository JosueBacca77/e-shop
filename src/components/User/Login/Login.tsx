import './Login.css'
import LogInForm from './LoginForm'
import {useAuth} from '../../../AuthContext'
import {useNavigate} from "react-router-dom";
import {Dispatch, SetStateAction} from "react";


const Login =()=> {

    const navigate = useNavigate();

    const {signin} = useAuth()

    const logIn =(email:string,password:string, setError: Dispatch<SetStateAction<string>>)=>{

        const logIn = new Promise((resolve) => {
            resolve(signin(email, password));
        });
        
        logIn
        .then(()=>navigate("/"))
        .catch(error=>setError(error.message))
    }

    return(
        <div className='main-view'>
            <LogInForm logIn={logIn}/>
        </div>
    )
}

export default Login