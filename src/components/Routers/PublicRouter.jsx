import { Navigate } from 'react-router-dom';
import {useAuth} from "../../AuthContext"

function PublicRoute ({component: Component, restricted}){
    
    const {currentUser} = useAuth()

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        currentUser && restricted ? <Navigate to="/" /> : <Component />
    );
}

export default PublicRoute;