
//METODOS DE AUTENTIFICACION

import { FacebookAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, googleProvider } from "./config"

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        console.log(result)
    } catch (error) {
        console.error(error);
    }
};

// export const signInWithFacebook = async () => {
//     try {
//         await signInWithPopup(auth, FacebookAuthProvider)
//     } catch (error) {
        
//     }
// };

export const registerInWithInfo = async (nombre, apellido, correo, password, telefono) => {
    try {
        await signInWithEmailAndPassword()
    } catch (error) {
        
    }
};

export const signInWithInfo = async () => {};

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.error({error})
    }
};