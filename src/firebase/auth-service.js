//METODOS DE AUTENTIFICACION

import {
  FacebookAuthProvider,
  getAdditionalUserInfo,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "./config";
import { createUserProfile } from "./users-service";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const { isNewUser } = getAdditionalUserInfo(result);
    if (isNewUser) {
      let cadena = result.user.displayName.split(" ");
      await createUserProfile(result.user.uid, {
        id:result.user.uid,
        name: cadena[0],
        lastname: cadena[1],
        email: result.user.email, //TODO añadir los campos siguientes que puede tener el usuario
        phone: result.user.phoneNumber,
        photoUrl: result.user.photoURL,
        password: "",
      });
    }
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

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    console.log(email, password);
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login exitoso", result);
  } catch (error) {
    console.error(error);
  }
};

export const registerWithEmailAndPassword = async (
  name,
  lastname,
  email,
  phone,
  password,
) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await createUserProfile(result.user.uid, {
      id: result.user.uid,
      name,
      lastname,
      email,
      phone,
      profilePic: null,
      password,
    });
    console.log("Registro exitoso", result);
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
