import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAuth";

export default function PrivateRoute({children}){ 
    const isLoggedIn = useAdmin();
 

    return isLoggedIn ? children : <Navigate to='/login'/>
}