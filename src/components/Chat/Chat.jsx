import React from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import user from "../../assets/user.png";
import Messages from './Messages';
import Input from "./Input"
export default function Chat() {
  return (
    <div className={styles.chat}> 
      <div className={styles.chatInfo}>
          <div className={styles.status}></div>
        <div className={styles.userInfo}>
           <span className={styles.userName}> DOC. Jane</span>
           <img src={user}/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
