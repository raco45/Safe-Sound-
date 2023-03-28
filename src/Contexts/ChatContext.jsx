import React, {useEffect, useState, useContext, createContext, useReducer} from "react";
import { auth, db } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth";
import { getUserProfile } from "../firebase/users-service";
import { useUser } from "./UserContext";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ChatContext = createContext()


export function ChatContextProvider({children}){
    const {user}=useUser();
    const [currentUser, setcurrentUser]= useState(null);
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

   const getChatUser= async (id)=>{
        const q=query(
            collection(db,"users"),
            where("id","==",id)
        );
        
        try{
            const querySnapshot= await getDocs(q);
            querySnapshot.forEach((doc)=>{
                setcurrentUser(doc.data());
            });
            
        }catch(err){
            setErr(true);
        }
   };

   const [state, dispatch]= useReducer(chatReducer, INITIAL_STATE);

    return  <ChatContext.Provider value= {{data:state, dispatch, getChatUser, currentUser}}> 
            {children} 
        </ChatContext.Provider>
    
}
export function useChat() {
    return useContext(ChatContext);
}