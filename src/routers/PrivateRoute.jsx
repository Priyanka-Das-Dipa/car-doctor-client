import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)
    if(loading){
        return <div className="text-center flex items-center min-h-screen justify-center"><progress className="progress w-56"></progress></div> 
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivateRoute;