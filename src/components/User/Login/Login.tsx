import LogInForm from './LoginForm'
import {useAuth} from '../../../AuthContext'
import {useHistory} from "react-router-dom";
import {Dispatch, SetStateAction} from "react";


const LogIn =()=> {

    const history = useHistory();

    const {signin} = useAuth()

    const logIn =(email:string,password:string, setError: Dispatch<SetStateAction<string>>)=>{

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