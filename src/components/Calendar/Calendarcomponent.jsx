import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { Time } from './Time';

export function Calendarcomponent() {
    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false);

    return (
        <>
        <div className=' w-1/3 flex'>
            <div>
                <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
            </div> 
            <Time showTime={showTime} date={date} className='absolute bottom-0'/>  
        </div>

        
        </>
    )
}
