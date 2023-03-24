import React, { useState } from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import { Send } from '@icon-park/react';
import { useUser } from '../../Contexts/UserContext';
import { useChat } from '../../Contexts/ChatContext';
import { Timestamp, updateDoc, doc, arrayUnion, serverTimestamp } from '@firebase/firestore';
import { db } from '../../firebase/config';
import {v4 as uuid} from "uuid";

export default function Input() {
  const [text, setText]=useState("");
  const {user}=useUser();
  const {data}=useChat();

  const handleSend= async ()=>{
    await updateDoc(doc(db,"chats",data.chatId),{
      messages: arrayUnion({
        id:uuid(),
        senderId: user.id,
        date: Timestamp.now(),
        text: text,
      }),
    });

    await updateDoc(doc(db, "userChats",user.id),{
      [data.chatId+".lastMessage"]:{
        text,
      },
      [data.chatId+".date"]:serverTimestamp()
    });
    await updateDoc(doc(db, "userChats",data.userCon.id),{
      [data.chatId+".lastMessage"]:{
        text,
      },
      [data.chatId+".date"]:serverTimestamp()
    });

    setText("");
  };

  const handleKey= e=>{
    e.code === "Enter" && handleSend();
};
  return (
    <div className={styles.input}>
      
      <input type="text" placeholder='Type something... '  onKeyDown={handleKey} onChange={e=>setText(e.target.value)} value={text}/>
      <div className={styles.send}>
        <Send theme="filled" size="30" fill="#333" className={styles.enviar} onClick={handleSend}/>
      </div>
        
      
    </div>
  )
}
