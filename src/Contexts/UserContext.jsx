import React, {useEffect, useState, useContext, createContext} from "react";

import { auth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext(null)

export function UserContextProvider({children}){
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (firebaseUser) => {
            console.log(firebaseUser);
            //Aqui se agregan los otros atributos (rol, documentos, etc)
            if (firebaseUser){
                setUser({
                    id: firebaseUser.uid,
                    email: firebaseUser.email,
                    name: firebaseUser.displayName,
                })
            } else {
                setUser(null);
            }
        });
    }, []);

    return (
    <UserContext.Provider 
    value = {{
        user, 
    }}
    >
        {children}
    </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}
