import React from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import Chats from './Chats';
import NavbarChat from './NavbarChat';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <NavbarChat/>
        <Chats/>
        
        </div>
  )
}

export default Sidebar