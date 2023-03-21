import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'


export function Calendarcomponent() {
    const [date, setDate] = useState(new Date())
    return (
        <div className=" border-2 border-black rounded-xl">
            <h1 className=" text-center p-2"> Selecciona el dia: </h1>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            <div className="p-2 text-center">
                Fecha seleccionada: {date.toDateString()}
            </div>
        </div>
    )
}
