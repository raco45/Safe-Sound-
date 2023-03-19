import{collection, doc,setDoc, where,query,getDocs} from "firebase/firestore"
import{db} from "./config"

export async function createUserProfile(userId,data){
    return setDoc(doc(db,"users",userId),data);
}

export async function getUserProfile(email){
    const userQuery = query(collection(db,"users"), where("email","==",email));

    const results = await getDocs(userQuery);
    //comprueba el tamano de users y retorna la informacion de usuario
    if(results.size>0){
        const users = results.docs.map((item)=>({
            ...item.data(),
            id: item.id,
        }));
        const [user] = users;
        return user;
    }else{
        return null;
    }
}