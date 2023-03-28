import React from 'react'
import { Calendarcomponent } from '../../components/Calendar/Calendarcomponent'
import {Button} from '../../components/Button/Button'
import { Calendar } from 'react-calendar'


//Aquí se define qué doctor mostrar en base a su id

export function DoctorProfilePage() {
  return (
    <div> RECUERDA REESTABLECER LO DE PRIVATE ROUTE Y ESO ANTES DE SUBIR CALENDAR 
    
    <Calendarcomponent/>

  

    <Button disabled={false}>Agendar cita!</Button>


    </div>
  )
}

