import { query, where, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import React, { useState } from "react";

export function useUsuarios() {
  const [isLoading, setLoading] = useState(false);
  const [doctors, setDoctor] = useState([])
  const [valDoctor, setValDoctor] = useState([])
  const [users, setUsers] = useState([])

  const getNotValidatedDoctor = async () => {
    setLoading(true)

    const doctorQuery = query(
      collection(db, "users"),
      where("role", "==", "Doctor"),
      where("validated", "==", false)
    );

    const results = await getDocs(doctorQuery);

    const docArr = []
    results.forEach(doc => {
        docArr.push(doc.data())
        
    })

    setDoctor(docArr)

    setLoading(false)
    
  };

  const getValidatedDoctor = async () => {
    setLoading(true)

    const doctorQuery = query(
      collection(db, "users"),
      where("role", "==", "Doctor"),
      where("validated", "==", true)
    );

    const results = await getDocs(doctorQuery);

    const docArr = []
    results.forEach(doc => {
        docArr.push(doc.data())
        
    })

    setValDoctor(docArr)

    setLoading(false)
    
  };

  const getAllUsers = async () =>{
    setLoading(true)

    const usersQuery = query(
      collection(db, "users")
    );

    const results = await getDocs(usersQuery);

    const userDocArr = []
    results.forEach(doc => {
      userDocArr.push(doc.data())
        
    })

    setUsers(userDocArr)

    setLoading(false)

  }

  

  return {getNotValidatedDoctor, doctors, isLoading, users, getAllUsers, valDoctor, getValidatedDoctor};
}
