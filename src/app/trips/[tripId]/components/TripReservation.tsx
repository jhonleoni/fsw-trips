import DatePicker from '@/components/DatePicker'
import React from 'react'

const TripReservation = () => {
   return (
     <div className='flex flex-col'>
       <div className="flex">
        <DatePicker placeholderText='Data de início' onChange={() => {}}/>
        <DatePicker placeholderText='Data final' onChange={() => {}}/>

       </div>
     </div>
   )
}

export default TripReservation