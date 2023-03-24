import React from 'react'
import { Button } from '../../components/Button/Button';
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Chat/Sidebar';
import { useUser } from '../../Contexts/UserContext';
import { updateDoc,doc } from 'firebase/firestore';
import { db } from '../../firebase/config';

import styles from "./ChatPage.module.css";
export function ChatPage() {
  const {user}=useUser();


  // const handleChat= async ()=>{
  //   await updateDoc(doc(db,"users",user.id),{
  //       chatStatus:true,
  //   }); 
  // };

  // handleChat();

  // console.log(user.chatStatus);


  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Sidebar/>
        
        <Chat/>
      </div>
      {/* <div className="barraIzq box" > hola </div>  
      <div className="barraDer box" > holas</div>   */}

    </div>
   
  )
}
