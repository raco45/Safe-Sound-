import { useState } from 'react';
import Calendar from 'react-calendar';
import React from 'react'

const time = ['08:00','08:00','08:00', '09:00', '10:00', '14:00', '15:00']

export function Time(props) {

    const [event, setEvent] = useState(null)
    const [info, setInfo] = useState(false)

    function displayInfo(e) {
        setInfo(true);
        setEvent(e.target.innerText);
    }

    
    return (

        <div className="">
            {time.map((times) => {
                return (
                    <div className='hover:bg-[#E1BCE8] hover:text-white w-12 h-auto text-center border-[#956a9e] border-2 rounded-lg m-1 '>
                        <button onClick={(e) => displayInfo(e)} > 
                        {times}
                        </button>
                    </div>
                )
            })}
            
            <div className='relative bottom-0'>
              <p className='border-[#956a9e] border-2 rounded-lg m-1 w-36'>   {info ? `${event}, ${props.date.toDateString()}` : null} </p>
            </div>
        </div>
    )
}
