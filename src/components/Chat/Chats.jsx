import React, { useContext, useEffect, useState } from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import userPic from "../../assets/user.png";
import { useUser } from '../../Contexts/UserContext';
import { doc, onSnapshot, serverTimestamp, Timestamp } from '@firebase/firestore';
import {db} from "../../firebase/config"
import { ChatContext, useChat } from '../../Contexts/ChatContext';
import { Time } from '@icon-park/react';
import { number } from 'prop-types';
export default function Chats() {
  const [chats, setChats]=useState([])
  const {user}=useUser();
  const {dispatch, currentUser}=useChat();
  const [estadoBoton, setEstadoBoton]=useState(1);
  // let myDate= new Date(); 
  // let fecha=myDate.getFullYear().toString()+"-"+ myDate.getMonth().toString()+"-"+myDate.getDate().toString();
  let date = new Date()
  date.setDate(date.getDate() );
  const year = date.toLocaleString('default', { year: 'numeric' })
  const month = date.toLocaleString('default', { month: '2-digit' })
  const day = date.toLocaleString('default', { day: '2-digit' })
  const tomorrow = year + '-' + month + '-' + day;
  
  const handleBoton1 =()=>{
    setEstadoBoton(1);
  };
  const handleBoton2 =()=>{
    setEstadoBoton(2);
  };
  
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
  
  // let prueba= "14:04";
  // console.log(Number(prueba.split(":")[1]));  
  // console.log(tomorrow);
  // console.log(estadoBoton);
  // console.log(Object.entries(chats));
  // console.log(date.getHours());

  return (
    <div className={styles.chats}>
      <div className={styles.navbarchat}>
        <div className={styles.boton1}>
          <button className={styles.prueba} onClick={handleBoton1}> Today </button>
        </div>
        <div className={styles.boton2}>
          <button className={styles.prueba} onClick={handleBoton2}> Archivo</button>
        </div>
    </div>
      
      { estadoBoton===2 ? Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat)=>(
        <div className={styles.userChat} key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)} >
        <div className={styles.userChatInfo}>
          <img src={chat[1].userInfo.photoUrl}/>
          <div className={styles.userChatName}>
            <span> {chat[1].userInfo.displayName} </span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
          <div className={styles.statusOff}></div>
      </div>
        )):  Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat)=>(
            
            Number(chat[1].userInfo.fechaCita[1].split(":")[0]) === date.getHours() &&  chat[1].userInfo.fechaCita[0]===tomorrow && Number(chat[1].userInfo.fechaCita[1].split(":")[0])<(date.getHours()+1) ?( 

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
          ):<div></div>
        ))}
    </div>
     
   )
}

      
      

