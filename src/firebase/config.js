import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBf3BWblw-v0IkW_40Tvz9KuztSzzl5w-U",
  authDomain: "safe-sound-509c9.firebaseapp.com",
  projectId: "safe-sound-509c9",
  storageBucket: "safe-sound-509c9.appspot.com",
  messagingSenderId: "422805570234",
  appId: "1:422805570234:web:3741befe7f621b6f01f883"
};


const app = initializeApp(firebaseConfig);

//MODULOS DE FIREBASE

export const auth = getAuth(app)

export const db = getFirestore(app) //conexion con el modulo de la bd

export const storage = getStorage(app)

export const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters( {prompt: "select_account"}) //permite al usuario seleccionar entre sus cuentas de google