import React, { useEffect, useState } from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import Message from './Message';
import { useChat } from '../../Contexts/ChatContext';
import { onSnapshot, doc } from '@firebase/firestore';
import { db } from '../../firebase/config';
export default function Messages() {
  const [messages, setMessages]=useState([]);
  const {data}=useChat();

  useEffect(()=>{
    const unSub=onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
      doc.exists() && setMessages(doc.data().messages);
    })

    return ()=>{
      unSub()
    }
  },[data.chatId])

  return (
    <div className={styles.messages}>
        {messages.map((m)=>(
          
          <Message message={m} key={m.id}/>

        ))}
        
        
    </div>
  )
}
