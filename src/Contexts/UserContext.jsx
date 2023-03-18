import React, {useEffect, useState, useContext, createContext} from "react";

import { auth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth";
import { getUserProfile } from "../firebase/users-service";

export const UserContext = createContext(null)

export function UserContextProvider({children}){
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {
            console.log("Prueba");
            console.log(firebaseUser);
            //Aqui se agregan los otros atributos (rol, documentos, etc)
            if (firebaseUser){
                const profile= await getUserProfile(firebaseUser.email);
                setUser(profile);
            } else {
                setUser(null);
            }
        });
    }, []);

    return  <UserContext.Provider value= {{
            user, 
        }}> {children} </UserContext.Provider>
    
}

export function useUser() {
    return useContext(UserContext)
}
