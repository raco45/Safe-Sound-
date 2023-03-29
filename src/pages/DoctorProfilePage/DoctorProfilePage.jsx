import React, { useEffect, useState } from "react";
import { useUsuarios } from "../../hooks/useUsuarios";
import { useParams } from "react-router";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { PAYMENT_PAGE } from "../../constants/url";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase/config";
import { useUser } from "../../Contexts/UserContext";
//Aquí se define qué doctor mostrar en base a su id

export function DoctorProfilePage() {
  const { doctorid } = useParams();
  const { getSingleDoctor, isLoading, singleDoctor } = useUsuarios();
  const [cita, setCita] = useState("")
  const [planescogido, setPlanescogido] = useState('');
  const {user}= useUser();
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour12: false,
  });

  const today = new Date()
  let date = new Date()
  date.setDate(today.getDate() + 1)
  const year = date.toLocaleString('default', { year: 'numeric' })
  const month = date.toLocaleString('default', { month: '2-digit' })
  const day = date.toLocaleString('default', { day: '2-digit' })
  const tomorrow = year + '-' + month + '-' + day
  const minDate = tomorrow + 'T08:00'


  useEffect(() => {
    if (!isLoading && doctorid) {
      getSingleDoctor(doctorid);
    }
  }, []);

  let citaSplit= cita.replace("T"," ").split(" ");
  const handleSelect= async ()=>{
    //Check whether the group(chats in firestore)exists, if not create
    const combinedId= user.id>singleDoctor.id
     ?  user.id + singleDoctor.id 
     :singleDoctor.id +user.id; 
    
    try{
        
        const res = await getDoc(doc(db, "chats", combinedId));
        if (!res.exists()){
            
            // Create a chat in chats collection
            await setDoc(doc(db,"chats",combinedId),{messages:[]})
            //Create user chats 
            await updateDoc(doc(db, "userChats",user.id),
            {
                [combinedId+".userInfo"]:{
                    fechaCita: citaSplit,
                    id: singleDoctor.id,
                    displayName: singleDoctor.name,
                    photoUrl: singleDoctor.photoUrl,
                },
                [combinedId+".date"]: serverTimestamp()
            });
            await updateDoc(doc(db, "userChats",singleDoctor.id),
            {
                [combinedId+".userInfo"]:{
                    fechaCita: citaSplit,
                    id: user.id,
                    displayName: user.name,
                    photoUrl: user.photoUrl,
                },
                [combinedId+".date"]: serverTimestamp()
            });
        }
    console.log(singleDoctor);
    }catch(err){

    }
    
};


const data1 = {
  citaPlan: planescogido,
  terapista: singleDoctor && singleDoctor.name,
}

  

  return (
    <div>
      <div className="flex items-center  m-10">
        <div className="bg-[#b990c0]  shadow-sm shadow-gray-500 rounded-md w-1/3 p-10 h-auto">
          <div className="flex flex-col items-center justify-center mb-2">
            <img
              src={singleDoctor && singleDoctor.photoUrl}
              alt=""
              className="rounded-full mb-2 w-44 h-auto border-2 border-gray-300"
            />
            <h1 className="text-[#fae4fd] uppercase items-center tracking-widest text-lg font-bold">
              {singleDoctor && singleDoctor.name}{" "}
              {singleDoctor && singleDoctor.lastname}
            </h1>
            <hr className="w-2/6 mt-2 mb-5"></hr>
            <h1 className="text-[#fae4fd] text-sm">
              Telf: {singleDoctor && singleDoctor.phone}
            </h1>
            <h1 className="text-[#fae4fd] text-sm">
              País: {singleDoctor && singleDoctor.country}
            </h1>
            <h1 className="text-[#fae4fd] text-sm">
              Sobre mi: {singleDoctor && singleDoctor.description}
            </h1>
            {singleDoctor && singleDoctor.validated === false &&(<img
              src={singleDoctor && singleDoctor.diploma}
              alt=""
              className="mt-2 rounded-none mb-2 w-44 h-auto border-2 border-gray-300"
            />)}
          </div>
        </div>

        {singleDoctor && singleDoctor.validated === true && (
          <>
            <div className="bg-[#f3d3f8] shadow-sm shadow-gray-500 rounded-md w-full m-2 p-10 h-auto">
            <h1 className="text-[#a063a8] mt-2 uppercase tracking-widest text-lg font-bold">
                  Especialidades
                </h1>
                <hr className="w-2/6 mt-2 mb-2" />
                <h1 className="text-[#a063a8] mb-1 text-sm">
                  {singleDoctor && singleDoctor.specialties}
                </h1>
              <h1 className="text-[#a063a8] mt-2 uppercase tracking-widest text-lg font-bold">
                Agenda una cita:
              </h1>
              <div className="flex flex-col">
                <div className=" border-2 p-2 rounded-l border-[#b990c0]">
                  {" "}
                  {singleDoctor && singleDoctor.plansdescription}{" "}
                </div>
                <br />
                <div>
                  <label>Escoge un plan </label>
                  <select className="bg-[#ede3ef] shadow-sm  text-[#a063a8] border-[#a063a8] border-2 rounded-lg" onChange={e => setPlanescogido(e.target.value)}>
                    <option/>
                    {singleDoctor &&
                      singleDoctor.plans.map((plan) => {
                        return <option value={plan}>Plan: {plan}</option>;
                      })}
                  </select>
                </div>
                <br />
                <div>
                  <input className="bg-[#ede3ef] shadow-sm " type="datetime-local" min={minDate} onChange={e => setCita(e.target.value)} />
                  <button className="bg-[#ede3ef] shadow-sm  text-[#a063a8] border-[#a063a8] border-2 rounded-md pl-2 pr-2 m-2 hover:bg-[#a063a8] hover:text-[#ede3ef]">Agregar cita: {cita + ' Plan: $' + planescogido} </button>

                </div>
                <div>
                  <Link to={planescogido!=""&& cita!="" && PAYMENT_PAGE} state={data1}> 
                    <button className="bg-[#ede3ef] shadow-sm text-xl text-[#a063a8] border-[#a063a8] border-2 rounded-md pl-2 pr-2 ml-0 m-2 hover:bg-[#a063a8] hover:text-[#ede3ef]"
                      onClick={(planescogido!=""&& cita!="")?handleSelect: "" }
                    >
                      Agendar
                    </button>
                  </Link>
                </div>
                </div>
                </div>
              </>)
            }

            </div>
          </div>
  
  );
}
