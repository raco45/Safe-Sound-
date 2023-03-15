
//METODOS DE AUTENTIFICACION

import { FacebookAuthProvider, getAdditionalUserInfo, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, googleProvider } from "./config"
import { createUserProfile } from "./users-service";


export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth,googleProvider)
        
        const {isNewUser}= getAdditionalUserInfo(result);
        if(isNewUser){
          await createUserProfile(result.user.uid,{
            email: result.user.email,
            username: "",
            password: "",
          })
        }
    } catch (error) {
      console.error(error)  
    }
};

// export const signInWithFacebook = async () => {
//     try {
//         await signInWithPopup(auth, FacebookAuthProvider)
//     } catch (error) {
        
//     }
// };

export const logInWithEmailAndPassword = async(email,password)=>{
    try {
      const result = await signInWithEmailAndPassword(auth,email,password);
      console.log("Login exitoso",result)
    } catch (error) {
      console.error(error)  
    }
  };
  
  export const registerWithEmailAndPassword = async(
    username,
    email,
    password,
    )=>{
    try {
      const result = await createUserWithEmailAndPassword(auth,email,password);
      await createUserProfile(result.user.uid,{
        username,
        email,
        password,
      })
      console.log("Registro exitoso",result)
    } catch (error) {
      console.error(error)  
    }
  };
  
  export const logout = async()=>{
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error)
    }
  };