import { Navigate } from 'react-router-dom';
import {useAuth} from "../../AuthContext"

function PrivateRoute ({component: Component}){
    
    const {currentUser} = useAuth()

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        currentUser ? <Component /> : <Navigate to="/login" />
    );
}

export default PrivateRoute;