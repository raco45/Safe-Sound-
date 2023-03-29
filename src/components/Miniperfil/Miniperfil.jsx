import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { DOCTOR_PROFILE } from '../../constants/url';import { Button } from "../Button/Button";
import { updateUserProfile, deleteUserProfile } from "../../firebase/users-service";

export function Miniperfil({ user, validateMode, idx, adminViewMode }) {


  const handleValidate = async () => {
    try {
      await updateUserProfile(idx, { validated: true });
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUserProfile(idx);
      
    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <div>
     
      <div className="p-4 w-80 container mx-auto bg-[#b990c0] rounded-xl shadow-md mb-5 hover:bg-[#ceafd3] h-auto">
        <div className="grid grid-cols-3 gap-x-4 items-center">
          <div className="col-span-2 p-2 fonttext-xl text-black font-maintext font-bold">
            {user.name} {user.lastname}
          </div>
            <h1 className="bg-[#ceafd3] border-2 border-[#f1e8f3] pl-2 w-12 pr-2 rounded-md" >{user.range}</h1>
        </div>
        <div className="flex-shrink-5 grid justify-items-center">
          <Link to={`/doctor/${user.id}`}>
            <img
              className="w-44 h-auto"
              src={user.photoUrl}
              alt={user.name}
            />
          </Link>
        </div>
        {user.role === "Doctor" && (
          <>
            <div className="text-black flex font-maintext ">
              Especialidades: {user.specialties}
            </div>
          </>
        )}

        {validateMode === true && (
          <>
            <div className="flex justify-between mt-4">
              <Button onClick={handleValidate}>VALIDAR</Button>

              <Button onClick={handleDelete}>ELIMINAR</Button>
            </div>
          </>
        )}

        {adminViewMode === true && (
          <>
            <Button onClick={handleDelete}>ELIMINAR</Button>
          </>
        )}
      </div>
      
    </div>
  );
}
