import React from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import user from "../../assets/user.png";
export default function Chats() {
  return (
    <div className={styles.chats}>
      <div className={styles.userChat}>
        <div className={styles.userChatInfo}>
          <img src={user}/>
          <div className={styles.userChatName}>
            <span> Jane </span>
            <p>Hello</p>
          </div>
        </div>
          <div className={styles.status}></div>
      </div>
      <div className={styles.userChat}>
        <div className={styles.userChatInfo}>
          <img src={user}/>
          <div className={styles.userChatName}>
            <span> Jane </span>
            <p>Hello</p>
          </div>
        </div>
          <div className={styles.status}></div>
      </div>
      <div className={styles.userChat}>
        <div className={styles.userChatInfo}>
          <img src={user}/>
          <div className={styles.userChatName}>
            <span> Jane </span>
            <p>Hello</p>
          </div>
        </div>
          <div className={styles.status}></div>
      </div>
      <div className={styles.userChat}>
        <div className={styles.userChatInfo}>
          <img src={user}/>
          <div className={styles.userChatName}>
            <span> Jane </span>
            <p>Hello</p>
          </div>
        </div>
          <div className={styles.status}></div>
      </div>

      
      

    </div>
  )
}
