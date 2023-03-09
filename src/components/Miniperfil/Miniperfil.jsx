import React from 'react'
import styles from "./index.module.css";


export function Miniperfil() {
  return (
    <div>
      <div class="p-4 w-80 container mx-auto bg-[#b990c0] rounded-xl shadow-md mb-5">
        <div className='inline-grid grid-cols-3 gap-x-4'>
          <div class="col-span-2 p-2 fonttext-xl font-medium text-black">Nombre del Usuario</div>
          <img class="w-10" src="src\assets\user.png" alt="" /> {/*$:doctor.precio = bajo, y asi o por id*/}
        </div>
        <div class="flex-shrink-5 grid justify-items-center ">
          <img class="w-44" src="src\assets\user.png" alt="ChitChat Logo" />
        </div>
        <div>
          <p class="text-gray-500">Especialidades: </p> {/*Aqui se iguala el campo especialidad*/}
        </div>
        <div className='ml-60 w-12 grid justify-items-center bg-white rounded-xl'>
          x/10
        </div>
      </div>
    </div>
  )
}

