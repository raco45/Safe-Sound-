import React, {useEffect, useState, useContext, createContext} from "react";
import { auth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth";
import { getUserProfile } from "../firebase/users-service";

export const UserContext = createContext(null)

export function UserContextProvider({children}){
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] =useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {
            setIsLoading(true)
            
            console.log(firebaseUser);
            //Aqui se agregan los otros atributos (rol, documentos, etc)
            if (firebaseUser){
                const profile= await getUserProfile(firebaseUser.email);
                setUser(profile);
            } else {
                setUser(null);
            }
            setIsLoading(false)
        });
    }, []);

    return  <UserContext.Provider value= {{
            user, 
            isLoading,
            setUser,
        }}> {children} 
        </UserContext.Provider>
    
}

export function useUser() {
    return useContext(UserContext)
}
