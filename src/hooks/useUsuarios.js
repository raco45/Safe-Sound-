import {
  query,
  where,
  getDocs,
  collection,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import React, { useState } from "react";

export function useUsuarios() {
  const [isLoading, setLoading] = useState(false);
  const [doctors, setDoctor] = useState([]);
  const [users, setUsers] = useState([]);
  const [valDoctors, setValDoctors] = useState([]);
  const [singleDoctor, setSingleDoctor] = useState(null);

  const getNotValidatedDoctor = async () => {
    setLoading(true);

    const doctorQuery = query(
      collection(db, "users"),
      where("role", "==", "Doctor"),
      where("validated", "==", false)
    );

    const results = await getDocs(doctorQuery);

    const docArr = [];
    results.forEach((doc) => {
      docArr.push(doc.data());
    });

    setDoctor(docArr);

    setLoading(false);
  };

  const getAllUsers = async () => {
    setLoading(true);

    const usersQuery = query(collection(db, "users"));

    const results = await getDocs(usersQuery);

    const userDocArr = [];
    results.forEach((doc) => {
      userDocArr.push(doc.data());
    });

    setUsers(userDocArr);

    setLoading(false);
  };

  const getValidatedDoctor = async () => {
    setLoading(true);

    const doctorQuery = query(
      collection(db, "users"),
      where("role", "==", "Doctor"),
      where("validated", "==", true)
    );

    const results = await getDocs(doctorQuery);

    const docArr = [];
    results.forEach((doc) => {
      docArr.push(doc.data());
    });

    setValDoctors(docArr);

    setLoading(false);
  };

  const getSingleDoctor = async (doctorid) => {
    setLoading(true);
    const doctorRef = doc(db, "users", doctorid);
    const result = await getDoc(doctorRef);
    setSingleDoctor(result.data());
    console.log("ENTRA SINGLEDOCTOR");
    setLoading(false);
  };

  return {
    getNotValidatedDoctor,
    doctors,
    isLoading,
    users,
    getAllUsers,
    getValidatedDoctor,
    valDoctors,
    getSingleDoctor,
    singleDoctor,
  };
}
