import React, { useEffect } from 'react'
import { Calendarcomponent } from '../../components/Calendar/Calendarcomponent'
import {Button} from '../../components/Button/Button'
import {useUsuarios} from '../../hooks/useUsuarios'
import { useParams } from 'react-router-dom'



//Aquí se define qué doctor mostrar en base a su id

export function DoctorProfilePage() {
  const{doctorid} = useParams()
  const {getSingleDoctor, isLoading} = useUsuarios()
  useEffect(() => {
    if(!isLoading && doctorid){
      getSingleDoctor(doctorid)
    }
  })

  return (
    <div> 
      <div className="md:flex">
     
  

    <Button disabled={false}>Agendar cita!</Button>

    </div>
    </div>
  )
}

