import React, { useEffect, useState } from 'react'
import { Calendarcomponent } from '../../components/Calendar/Calendarcomponent'
import { Button } from '../../components/Button/Button'
import { useUsuarios } from '../../hooks/useUsuarios'
import { useParams } from 'react-router-dom'



//Aquí se define qué doctor mostrar en base a su id

export function DoctorProfilePage() {
  const { doctorid } = useParams()
  const { getSingleDoctor, isLoading, singleDoctor } = useUsuarios()

  useEffect(() => {
   
      getSingleDoctor(doctorid)
   
    
  }, [])

  
  
  return (
  
    <div>
          <div className="flex items-center  m-10">
    <div className="bg-[#b990c0] shadow-sm shadow-gray-500 rounded-md w-1/3 p-10 h-auto">
      <div className="flex flex-col items-center justify-center mb-2">
        <img src={singleDoctor.photoUrl} alt=""
          className="rounded-full mb-2 w-44 h-auto border-2 border-gray-300" />
        <h1 className="text-[#fae4fd] uppercase items-center tracking-widest text-lg font-bold">{singleDoctor.name} {singleDoctor.lastname}</h1>
        <hr className="w-2/6 mt-2 mb-5"></hr>
        <h1 className="text-[#fae4fd] text-sm">Telf: {singleDoctor.phone}</h1>
        <h1 className="text-[#fae4fd] text-sm">País: {singleDoctor.country}</h1>
        <h1 className="text-[#fae4fd] text-sm">Sobre mi: {singleDoctor.description}</h1>
        <h1 className="text-[#fae4fd] mt-2 uppercase tracking-widest text-lg font-bold">Especialidades</h1>
        <hr className="w-2/6 mt-2 mb-2" />
        <h1 className="text-[#fae4fd] text-center mb-1 text-sm">{singleDoctor.specialties}</h1>
      </div>
    </div>
    <div className="bg-[#f3d3f8] shadow-sm shadow-gray-500 rounded-md w-full m-2 p-10 h-auto">
    <h1 className="text-[#a063a8] mt-2 uppercase tracking-widest text-lg font-bold">Agenda una cita:</h1>
    <div className='flex'>
      <div className=' border-2 p-2 rounded-l border-[#b990c0]'> {singleDoctor.plansdescription} </div>
    </div>
    </div>
  </div>
    </div>

  )
}

