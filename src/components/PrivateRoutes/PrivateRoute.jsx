import { Navigate } from "react-router-dom";
import { LOGIN_PAGE } from "../../constants/url";
import { useUser } from "../../contexts/UserContext";

export function PrivateRoute({children}){
    console.log("Imprimiendo useuser", useUser());
    const {user}=useUser()

    // if(isLoading){
    //     return<h1>LOADING USER...</h1>;
    // }

    if( !user){
        return <Navigate to={LOGIN_PAGE}/>;
    }

    return children;
}