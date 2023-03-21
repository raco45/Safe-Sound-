import React, { useContext, useState } from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import userPic from "../../assets/user.png";
import {db} from "../../firebase/config";
import { collection, where, query, getDoc,getDocs, QuerySnapshot, setDoc, updateDoc, serverTimestamp, doc } from '@firebase/firestore';
import { UserContext, useUser } from '../../Contexts/UserContext';

export default function Search() {

    const [username, setUsername]= useState("");
    const [currentUser, setcurrentUser]= useState(null);
    const [err, setErr]=useState(false);

    const {user}= useUser();
    
    const handleSearch= async()=>{
        const q=query(
            collection(db,"users"),
            where("name","==",username)
        );
        
        try{
            const querySnapshot= await getDocs(q);
            querySnapshot.forEach((doc)=>{
                setcurrentUser(doc.data());
            });
            
        }catch(err){
            setErr(true);
        }
    };

    const handleKey= e=>{
        e.code === "Enter" && handleSearch();
    };

    const handleSelect= async ()=>{
        //Check whether the group(chats in firestore)exists, if not create
        const combinedId= user.id>currentUser.id
         ?  user.id + currentUser.id 
         :currentUser.id +user.id; 
        
        try{
            
            const res = await getDoc(doc(db, "chats", combinedId));
            if (!res.exists()){
                
                // Create a chat in chats collection
                await setDoc(doc(db,"chats",combinedId),{messages:[]})
                //Create user chats 
                await updateDoc(doc(db, "userChats",user.id),
                {
                    [combinedId+".userInfo"]:{
                        id: currentUser.id,
                        displayName: currentUser.name,
                        photoUrl: userPic,
                    },
                    [combinedId+".date"]: serverTimestamp()
                });
                await updateDoc(doc(db, "userChats",currentUser.id),
                {
                    [combinedId+".userInfo"]:{
                        id: user.id,
                        displayName: user.name,
                        photoUrl: userPic,
                    },
                    [combinedId+".date"]: serverTimestamp()
                });
            }
        console.log(currentUser);
        }catch(err){

        }



        setcurrentUser(null);
        setUsername("");

    };

  return (
    <div className={styles.search}>
        
        <div className={styles.searchForm}>
            <input type ="text" placeholder='Find a User' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} value={username} />
        </div>
        {err && <span> User not found  </span>}
        {currentUser && <div className={styles.userChat} onClick={handleSelect}>
            <img src={userPic} alt=""/>
            <div className={styles.userChatInfo}>
                <span> {currentUser.name} </span>
            </div>
        </div>

        }


    </div>
  )
}
