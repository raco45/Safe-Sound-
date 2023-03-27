import {
  collection,
  doc,
  setDoc,
  where,
  query,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { storage } from "./config";

export async function createUserProfile(userId,data){
    setDoc(doc(db, "userChats",userId),{});
    return setDoc(doc(db,"users",userId),data)
}

export async function getUserProfile(email) {
  const userQuery = query(collection(db, "users"), where("email", "==", email));

  const results = await getDocs(userQuery);

  //comprueba el tamano de users y retorna la informacion de usuario
  if (results.size > 0) {
    const users = results.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));

    const [user] = users;
    return user;
  } else {
    return null;
  }
}
//actualiza el documento del usuario
export async function updateUserProfile(userId, data) {
  const userRef = doc(db, "users", userId);

  await updateDoc(userRef, data);
}


export async function uploadPhoto(file, fileName) {
  console.log(file);
  const usersImagesRef = ref(storage, `profilepics/${fileName}`);

  await uploadBytes(usersImagesRef, file);

  const imgUrl = await getDownloadURL(usersImagesRef)

  return imgUrl
  
}