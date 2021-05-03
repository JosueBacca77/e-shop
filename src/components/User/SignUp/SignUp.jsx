import SignUpForm from './SignUpForm'
import {useAuth} from '../../../AuthContext'
import {useHistory} from "react-router-dom";


const SignUp =()=> {

    let history = useHistory();

    const {signup} = useAuth()

    const signUp =(email,password,setError)=>{

        const signUp = new Promise((resolve) => {
            resolve(signup(email, password));
        });
        
        signUp
        .then(()=>history.push("/"))
        .catch(error=>setError(error.message))
    }

    return(
        <div className='main-view'>
            <SignUpForm signUp={signUp}/>
        </div>
    )
}

export default SignUp