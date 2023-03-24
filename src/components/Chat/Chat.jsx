import React from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import user from "../../assets/user.png";
import Messages from './Messages';
import Input from "./Input"
import { useChat } from '../../Contexts/ChatContext';
export default function Chat() {
  const {data}=useChat();
  console.log(data);
  return (
    <div className={styles.chat}> 
      <div className={styles.chatInfo}>
          <div className={styles.status}></div>
        <div className={styles.userInfo}>
           <span className={styles.userName}> {data.userCon?.displayName}</span>
           <img src={data.userCon.photoUrl}/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
