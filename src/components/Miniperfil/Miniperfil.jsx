import React from 'react'
import styles from "./index.module.css";



export function Miniperfil() {
  return (
    <div>
      <div className="p-4 w-80 container mx-auto bg-[#b990c0] rounded-xl shadow-md mb-5 h-auto">
        <div className='inline-grid grid-cols-3 gap-x-4'>
          <div className="col-span-2 p-2 fonttext-xl text-black font-maintext font-bold">Nombre del Usuario</div>
          <img className="w-10 h-auto" src="src\assets\user.png" alt="" /> {/*$:doctor.precio = bajo, y asi o por id*/}
        </div>
        <div className="flex-shrink-5 grid justify-items-center">
          <img className="w-44 h-auto" src="src\assets\user.png" alt="ChitChat Logo" />
        </div>
        <div className='text-black flex font-maintext '>
          Especialidades: {/*Aqui se iguala el campo especialidad*/}
        </div>
        <div className='ml-60 w-12 grid justify-items-center rounded-xl font-maintext text-black bg-[#fbe8fe] pb-1'>
          x/10
        </div>
      </div>
    </div>
  )
}

