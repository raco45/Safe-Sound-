import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { PROFILE_PAGE } from "../../constants/url";
import { updateUserProfile, uploadPhoto } from "../../firebase/users-service";
import { useUser } from "../../Contexts/UserContext";

export function ProfilePageEdit() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    try {
      //Subir la foto a storage y recobrar su URL
      const imgUrl = await uploadPhoto(data.photo[0], data.photo[0].name)

        //actualizar datos en firebase/firestore
      await updateUserProfile(user.id, {
        name: data.name,
        lastname: data.lastname,
        phone: data.phone,
        country: data.country,
        description: data.description,
        photoUrl: imgUrl,
      });
      //actualizar datos del user para actualizar la UI
      setUser({
        ...user,
        name: data.name,
        lastname: data.lastname, 
        phone: data.phone,
        country: data.country,
        description: data.description,
        photoUrl: imgUrl
      });
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
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)} id="formEdit">
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
                        required: "Foto de perfil es obligatoria",
                      })}
                      type="file"
                      name="photo"
                      accept="image/*"
                      className="mb-4"
                    />
                    <p>{errors.photo?.message}</p>
                  </div>
                </div>

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
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
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
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3E0576] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 mt-6">
                <Link to={PROFILE_PAGE}>Regresar</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
