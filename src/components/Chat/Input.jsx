import React from 'react'
import styles from "../../pages/ChatPage/ChatPage.module.css";
import { Send } from '@icon-park/react';
export default function Input() {
  return (
    <div className={styles.input}>
      
      <input type="text" placeholder='Type something... ' />
      <div className={styles.send}>
        <Send theme="filled" size="30" fill="#333" className={styles.enviar} />
      </div>
        
      
    </div>
  )
}
