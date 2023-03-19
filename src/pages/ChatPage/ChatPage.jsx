{/* <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
<div class="flex-shrink-0">
<img class="h-12 w-12" src="src\assets\user.png" alt="ChitChat Logo"/>
</div>
<div>
<div class="text-xl font-medium text-black">ChitChat</div>
<p class="text-gray-500">You have a new message!</p>
</div>
Incredible stuff
</div> 
ESTO ESTA BUENISIMO PARA EL COMPONENTE CHAT, ES LA IMAGEN DE CHITCHAT QUE APSE POR EL GRUPO*/}
import React from 'react'
import { Button } from '../../components/Button/Button';
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Chat/Sidebar';

import styles from "./ChatPage.module.css";
export function ChatPage() {

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Sidebar/>
        
        <Chat/>
      </div>
      {/* <div className="barraIzq box" > hola </div>  
      <div className="barraDer box" > holas</div>   */}

    </div>
   
  )
}
