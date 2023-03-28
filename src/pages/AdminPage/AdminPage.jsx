import React, { useEffect } from "react";
import { Miniperfil } from "../../components/MiniPerfil/MiniPerfil";
import { useUsuarios } from "../../hooks/useUsuarios";

export function AdminPage() {
  const { getNotValidatedDoctor, doctors, isLoading, getAllUsers, users} = useUsuarios();

  useEffect(() => {
    getNotValidatedDoctor();
    getAllUsers()
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-3xl my-10">DASHBOARD ADMINISTRADOR</h1>
      <div className="flex flex-col w-full items-center mb-4">
        {isLoading && <h1 className="font-bold text-2xl">CARGANDO USUARIOS</h1>}
        {!isLoading && (
          <>
            <h1 className="font-semibold text-2xl mb-4">
              Validación de doctores
            </h1>
            <div
              className="border-2 border-solid border-black rounded-xl grid grid-cols-1  md:grid-cols-3 md:justify-screen p-5 md:w-5/6 "
              id="doctores_no_validados"
            >
              {doctors.map((doctor) => {
                return (
                  <Miniperfil user={doctor} idx={doctor.id} validateMode={true} />
                );
              })}
            </div>


            <h1 className="font-semibold text-2xl my-4">
              
              Usuarios registrados
            </h1>
            <div
              className="border-2 border-solid border-black rounded-xl grid grid-cols-1  md:grid-cols-3 md:justify-screen p-5 md:w-5/6 "
              id="doctores_no_validados"
            >
              {users.map((user) => {
                return (
                  <Miniperfil user={user} idx={user.id} adminViewMode={true} />
                );
              })}
            </div>
          </>
        )}

        <div className="w-1/2 bg-black"></div>
      </div>
    </div>
  );
}
