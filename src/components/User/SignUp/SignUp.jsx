import './SignUp.css'
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../AuthContext";
import SignUpForm from './SignUpForm'

const SignUp =()=> {

    const navigate = useNavigate();
    const {signup} = useAuth()

    const signUp =(email,password,setError)=>{

        const signUp = new Promise((resolve) => {
            resolve(signup(email, password));
        });
        
        signUp
        .then(()=>navigate("/"))
        .catch(error=>setError(error.message))
    }

    return(
        <div className='main-view'>
            <SignUpForm signUp={signUp}/>
        </div>
    )
}

export default SignUp