import React from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import user from "../../assets/user.png";

export default function Message() {
  return (
    <div className={styles.message}>
       <div className={styles.messageInfo}>
        <img src={user} alt=''/>
        <span>Just now</span>
       </div>
       <div className={styles.messageContent}>
        <p>Hello</p>
        <img src="" alt=""/>
       </div>
       
      
    </div>
      
  )
}
