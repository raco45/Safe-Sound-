import React, { useContext, useEffect, useState } from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import userPic from "../../assets/user.png";
import { useUser } from '../../Contexts/UserContext';
import { doc, onSnapshot } from '@firebase/firestore';
import {db} from "../../firebase/config"
import { ChatContext, useChat } from '../../Contexts/ChatContext';
export default function Chats() {
  const [chats, setChats]=useState([])
  const {user}=useUser();
  const {dispatch}=useChat();

  useEffect(()=>{
      const getChats=()=>{
          const unsub= onSnapshot(doc(db,"userChats",user.id),(doc)=>{
            setChats(doc.data());
          });
          return ()=>{
            unsub();
          };
      };
      user.id && getChats();
  },[user.id]);

  const handleSelect= (u)=>{
    dispatch({type:"CHANGE_USER",payload:u});
  }

  console.log(Object.entries(chats));
  return (
    <div className={styles.chats}>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat)=>(
        <div className={styles.userChat} key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)} >
        <div className={styles.userChatInfo}>
          <img src={chat[1].userInfo.photoUrl}/>
          <div className={styles.userChatName}>
            <span> {chat[1].userInfo.displayName} </span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
          <div className={styles.status}></div>
      </div>
        ))}
    </div>
     
   )
}

      
      

