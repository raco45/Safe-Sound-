import { Navigate } from "react-router-dom";
import { LOGIN_PAGE } from "../../constants/url";
import { useUser } from "../../Contexts/UserContext";

export function PrivateRoute({children}){
    
    const {user, isLoading}=useUser()

    if(isLoading){
        return<h1>LOADING USER...</h1>;
    }

    if(!isLoading && !user){
        return <Navigate to={LOGIN_PAGE}/>;
    }

    return children;
}