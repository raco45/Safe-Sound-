import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { PROFILE_PAGE } from "../../constants/url";
import { updateUserProfile, uploadPhoto } from "../../firebase/users-service";
import { useUser } from "../../Contexts/UserContext";

export function ProfilePageEdit() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      //actualizar datos en firebase/firestore
      await updateUserProfile(user.id, {
        name: data.name,
        lastname: data.lastname,
        phone: data.phone,
        country: data.country,
        description: data.description,

      });
      //actualizar datos del user para actualizar la UI
      setUser({
        ...user,
        name: data.name,
        lastname: data.lastname,
        phone: data.phone,
        country: data.country,
        description: data.description,

      });
      setLoading(false)
      navigate(PROFILE_PAGE);
    } catch (error) {
      console.log("ERROR AL ACTUALIZAR: " + error);
    }
  };

  const handlephoto = async () => {
    try {
      setLoading(true)
      const Userphoto = document.getElementById("photo")

      //Subir foto a firestore y obtener el link de la misma
      const imgUrl = await uploadPhoto(Userphoto.files[0], (Userphoto.files[0].name) + (new Date().valueOf()))

      // actualizar datos en firebase/firestore
      await updateUserProfile(user.id, {
        photoUrl: imgUrl,
      });
      //actualizar datos del user para actualizar la UI
      setUser({
        ...user,
        photoUrl: imgUrl,
      });
      setLoading(false)
      navigate(PROFILE_PAGE);
    } catch (error) {
      console.log("ERROR AL ACTUALIZAR: " + error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className=" flex w-2/3 h-screen bg-[#FBE8FE] flex-col ">
        <div>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#FBE8FE] mb-10">
            {isLoading && (<h1 className="text-[#3E0576] font-bold text-xl mt-4">GUARDANDO CAMBIOS...</h1>)}
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)} id="formEdit">
                <div className="mt-4">
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Nombre
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      defaultValue={user.name}
                      {...register("name", {
                        required: "Nombre es obligatorio",
                      })}
                      type="name"
                      name="name"
                      placeholder={user.name}
                      className="block w-full mt-1 pl-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.name?.message}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Apellido
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      defaultValue={user.lastname ? user.lastname : ""}
                      {...register("lastname", {
                        required: "Apellido es obligatorio",
                      })}
                      type="text"
                      name="lastname"
                      placeholder={user.lastname}
                      className="block w-full mt-1 pl-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.lastname?.message}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Teléfono
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      defaultValue={user.phone ? user.phone : ""}
                      {...register("phone", {
                        maxLength: 20,
                      })}
                      type="phone"
                      name="phone"
                      placeholder={
                        user.phone ? user.phone : "Número telefónico"
                      }
                      className="block w-full mt-1 pl-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.phone?.message}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    País
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      defaultValue={user.country ? user.country : ""}
                      {...register("country")}
                      type="country"
                      name="country"
                      placeholder={
                        user.country ? user.country : "País de origen"
                      }
                      className="block w-full mt-1 pl-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.country?.message}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Descripción sobre ti
                  </label>
                  <div className="flex flex-col items-start">
                    <textarea
                      defaultValue={user.description ? user.description : ""}
                      {...register("description")}
                      name="description"
                      maxLength="150"
                      placeholder={
                        user.description ? user.description : "Escribe sobre ti"
                      }
                      className="block w-full mt-1 pl-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
                    />
                    <p>{errors.description?.message}</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <button
                    onClick={onsubmit}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3E0576] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                    form="formEdit"
                  >
                    Guardar cambios
                  </button>
                </div>
              </form>
            </div>

            {/* FOTO DE PERFIL  TODO SIGUE ESTO*/}

            {isLoading && (<h1 className="text-[#3E0576] font-bold text-xl">GUARDANDO CAMBIOS...</h1>)}

            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
              <div className="mt-4 flex flex-col items-center">
                <h1 className="font-bold">Foto de perfil actual</h1>
                <br />
                <img src={user.photoUrl} className=" h-44 w-44" />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Editar foto de perfil
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    className="mb-4"
                    multiple={false}
                  />
                </div>
              </div>
              <button
                onClick={handlephoto}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3E0576] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Cambiar foto de perfil
              </button>
            </div>
          </div>
          <button className="w-30 mb-10 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3E0576] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 mt-6">
            <Link to={PROFILE_PAGE}>Cancelar y regresar a perfil</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
