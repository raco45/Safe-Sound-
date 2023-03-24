import React from "react";
import { useState } from "react";
import {
  signInWithGoogle,
  registerWithEmailAndPassword,
} from "../../firebase/auth-service";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import styles from "./RegisterPage.module.css"
import { LOGIN_PAGE, PROFILE_PAGE } from "../../constants/url";

export function DoctorCredentials() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    try {
      await registerWithEmailAndPassword(
        data.name,
        data.lastname,
        data.email,
        data.phone,
        data.password
      );
      navigate(PROFILE_PAGE);
    } catch (error) {
      setError();
    }
  };

  const onError = () => {
    console.log("error");
  };

  return (
    <div className="flex">
      <div className=" flex w-1/3 h-screen bg-[#E1BCE8] justify-center flex-col text-center">
        <h1 className="font-bold">Safe&Sound</h1>
        <p>
        Encuentra a los mejores especialistas que te brindarán el mejor servicio en materia psicológica.
        </p>
      </div>

      <div className=" flex w-2/3 h-screen bg-[#FBE8FE] flex-col">
        <div>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#FBE8FE]">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
              <h1 className="text-center">
              Verificación de credenciales              
              </h1>
              <p className="text-center">
              Estás un paso más cerca de convertirte en un doctor certificado para llevar a cabo consultas en Safe&Sound
              </p>
              <p className="text-center">
              Sube tus credenciales para que puedas comenzar a ofrecer tus servicios. Introduce algun tipo de identificacion o documento que certifique que eres profesional.
              </p>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                
                <div className="mt-4">
                  <label
                    htmlFor="especialidades"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Especialidad
                  </label>
                  <div className="flex flex-col items-start">
                    <select {...register("especilidades",{
                        required: "Especialidad es obligatorio",
                        })}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    <p>{errors.especialidades?.message}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <img className="w-10 h-auto" src="src\assets\card_example.png" alt="" />
                </div>
                <div className="mt-4">
                  <img className="w-10 h-auto" src="src\assets\diploma_example.png" alt="" />
                </div>

                <div className="flex items-center mt-4">
                  {/* Sumamente pendiente con este onclick, se estaba confudiendo con la funcion */}
                  <button
                    onClick={onsubmit}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3E0576] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Registrarse
                  </button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}