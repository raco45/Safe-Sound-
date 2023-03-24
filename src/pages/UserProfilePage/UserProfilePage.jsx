import React from "react";
import { PROFILE_PAGE_EDIT } from "../../constants/url";
import { Link } from "react-router-dom";
import { useUser } from "../../Contexts/UserContext";

export function UserProfilePage() {
const { user } = useUser()

  return (
    <div className="md:flex">
      <div className="md:w-2/5 flex flex-col items-center p-5 md:border-r-2 border-[#d6d6d6] border-b-2">
        {user.photoUrl && (<img src={user.photoUrl} alt="Foto perfil" className="md:h-56 h-40  w-1/2  md:w-86 mb-6" />)}
        {!user.photoUrl && (<img src="src\assets\user.png"alt="Foto perfil" className="md:h-56 h-40 w-auto mb-6" />)}
        <div>
          <p className="text-[#3E0576] font-semibold m-2 ">Sobre mí :</p>
          {!user.description && (
            <p className="border-2 border-black border-solid rounded-md p-2 bg-white w-72">
              No hay descripción disponible
            </p>
          )}
          {user.description && (
            <p className="border-2 border-black border-solid rounded-md p-2 bg-white w-72">
              {user.description}
            </p>
          )}
        </div>
      </div>
      <div className="p-10 w-2/4">
        <h1 className="font-extrabold text-3xl text-[#3E0576]">
          {user.name} {user.lastname}
        </h1>
        <br />
        <h1 className="md:text-xl font-semibold text-[#3E0576]">Teléfono:</h1>
        <p className="text-xl text-black ml-10">{user.phone}</p>
        <br />
        <h1 className="md:text-xl font-semibold text-[#3E0576]">
          Correo electrónico:{" "}
        </h1>
        <p className="text-xl text-black ml-10">{user.email}</p>
        <br />
        <h1 className="md:text-xl font-semibold text-[#3E0576]">País: </h1>
        {!user.country && (          
            <p className="text-xl text-black">N/A</p>
        )}
        {user.country && (          
            <p className="text-xl text-black">{user.country}</p>
        )}
        <div className="mt-20 ml-16">
          <button className="md:w-auto w-32 px-4 py-2 text-white transition-colors duration-200 transform bg-[#3E0576] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 mt-6"><Link to={PROFILE_PAGE_EDIT}>Editar perfil</Link></button>
          
        </div>
      </div>
    </div>
  );
}
