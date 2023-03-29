import React, { useEffect } from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import user from "../../assets/user.png";
import Messages from './Messages';
import Input from "./Input"
import { useChat } from '../../Contexts/ChatContext';
import { async } from '@firebase/util';
export default function Chat() {
  const {data, currentUser, getChatUser}=useChat();

  useEffect(() =>{
    const innerFunction= async ()=>{
      await getChatUser(data.userCon.id);
    }
    innerFunction(); 
    console.log(currentUser);
  },[data]);



  
  return (
    <div className={styles.chat}> 
      <div className={styles.chatInfo}>
          <div className={styles.statusOff}></div>
        <div className={styles.userInfo}>
           <span className={styles.userName}> {data.userCon?.displayName}</span>
           {currentUser ? (<img src={currentUser.photoUrl}/>) : (<img src={user}/>) }
           
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
