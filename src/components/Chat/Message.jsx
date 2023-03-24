import React, { useEffect, useRef } from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import userPic from "../../assets/user.png";
import { useUser } from '../../Contexts/UserContext';
import { useChat } from '../../Contexts/ChatContext';

export default function Message({message}) {

  const {user}=useUser();
  const {data}=useChat();

  const ref = useRef();

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior: "smooth"})
  },[message])
  
  return (
    
    <div 
      ref={ref} 
      className={message.senderId===user.id ? styles.message:styles.messageOwner  }>
       <div className={styles.messageInfo}>
        <img src={ user.photoUrl} alt=''/>
        <span>Just now</span>
       </div>
       <div className={styles.messageContent}>
        <p>{message.text}</p>
        
       </div>
    </div>
    )
  }
    {/* <div className={styles.message}>
       <div className={styles.messageInfo}>
        <img src={userPic} alt=''/>
        <span>Just now</span>
       </div>
       <div className={styles.messageContent}>
        <p>Hello</p>
        
       </div>
    </div> */}
       
      
      
  
