import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { Button } from "../Button/Button";
import { updateUserProfile } from "../../firebase/users-service";

export function Miniperfil({ user, adminMode, idx }) {
 

  const handleValidate = async () => {
    try {
      await updateUserProfile(idx, { validated: true });
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="p-4 w-80 container mx-auto bg-[#b990c0] rounded-xl shadow-md mb-5 h-auto">
        <div className="grid grid-cols-3 gap-x-4 items-center">
          <div className="col-span-2 p-2 fonttext-xl text-black font-maintext font-bold">
            {user.name} {user.lastname}
          </div>
          <img
            className="w-10 h-auto"
            src="src\assets\user.png"
            alt={user.name}
          />{" "}
          {/*$:doctor.precio = bajo, y asi o por id*/}
        </div>
        <div className="flex-shrink-5 grid justify-items-center">
          <Link to="#">
            <img
              className="w-44 h-auto"
              src={user.photoUrl}
              alt="Imagen Doctor"
            />
          </Link>
        </div>
        <div className="text-black flex font-maintext ">
          Especialidades: {/*Aqui se iguala el campo especialidad*/}
        </div>
        <div className="ml-60 w-12 grid justify-items-center rounded-xl font-maintext text-black bg-[#fbe8fe] pb-1">
          x/10
        </div>
        {adminMode === true && (
          <Button onClick={handleValidate}>VALIDAR</Button>
        )}
      </div>
    </div>
  );
}
