import React from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import Chats from './Chats';
import NavbarChat from './NavbarChat';
import Search from './Search';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <NavbarChat/>
        <Search/>
        <Chats/>
        
        </div>
  )
}

export default Sidebar