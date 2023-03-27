import React, {useEffect, useState, useContext, createContext, useReducer} from "react";
import { auth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth";
import { getUserProfile } from "../firebase/users-service";
import { useUser } from "./UserContext";

export const ChatContext = createContext()


export function ChatContextProvider({children}){
    const {user}=useUser();
   const INITIAL_STATE ={
    chatId:"null",
    userCon:{},
   }
   const chatReducer=(state,action)=>{
        switch(action.type){
            case "CHANGE_USER":
                return {
                    userCon: action.payload,
                    chatId :user.id>action.payload.id
                    ?  user.id + action.payload.id 
                    :action.payload.id +user.id,
                };
            
                default:
                    return state;
        }
   };

   const [state, dispatch]= useReducer(chatReducer, INITIAL_STATE);

    return  <ChatContext.Provider value= {{data:state, dispatch}}> 
            {children} 
        </ChatContext.Provider>
    
}
export function useChat() {
    return useContext(ChatContext);
}