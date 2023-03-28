import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import styles from "./RegisterPage.module.css"
import { PROFILE_PAGE } from "../../constants/url";
import { useUser } from "../../Contexts/UserContext";
import { updateUserProfile, uploadPhoto } from "../../firebase/users-service";

export function DoctorCredentials() {
  const { user, setUser } = useUser();
 

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onError = () => {
    console.log("error");
  };

  const onSubmit = async (data) => {
    try {
      //Subir la foto a storage y recobrar su URL
      const imgUrl = await uploadPhoto(data.photo[0], data.photo[0].name);

      //actualizar datos en firebase/firestore
      await updateUserProfile(user.id, {
        diploma: imgUrl,
        validated: false,
      });
      navigate(PROFILE_PAGE);
    } catch (error) {
      console.log("ERROR AL ACTUALIZAR: " + error);
    }
  };

  return (
    <div className="flex">
      <div className=" flex w-1/3 h-screen bg-[#E1BCE8] justify-center flex-col text-center">
        <h1 className="font-bold">Safe&Sound</h1>
        <p>
          Encuentra a los mejores especialistas que te brindarán el mejor
          servicio en materia psicológica.
        </p>
      </div>

      <div className=" flex w-2/3 h-screen bg-[#FBE8FE] flex-col">
        <div>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#FBE8FE]">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
              <h1 className="text-center font-bold text-2xl">Verificación de credenciales</h1>
              <p className="text-center">
                Estás un paso más cerca de convertirte en un doctor certificado
                para llevar a cabo consultas en Safe&Sound
              </p>
              <br />
              <p className="text-center">
                Sube tus credenciales y establece tu especialidad para que
                puedas comenzar a ofrecer tus servicios. Introduce algun tipo de
                identificacion o documento que certifique que eres profesional.
              </p>

              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="flex flex-row justify-center space-x-10">
                  <div className="mt-4">
                    <h1 className="font-semibold text-xl mb-2">Ejemplo credencial:</h1>
                    <img
                      className="w-96 h-96 rounded-none"
                      src="src\assets\diploma_example.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Foto de perfil
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("photo", {
                        required: "Foto de credencial es obligatoria",
                      })}
                      type="file"
                      name="photo"
                      accept="image/*"
                      className="mb-4"
                    />
                    <p>{errors.photo?.message}</p>
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <button
                    
                    onClick={onsubmit}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3E0576] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Finalizar registro
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
