import { Route, Redirect } from 'react-router-dom';
import {useAuth} from "../../AuthContext"

function PrivateRoute ({component: Component, ...rest}){
    
    const {currentUser} = useAuth()

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            currentUser ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;