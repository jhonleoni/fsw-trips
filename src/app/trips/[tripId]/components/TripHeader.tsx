import { Trip } from '@prisma/client';
import Image from 'next/image'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'

interface TripHeaderProps {
  trip: Trip;
}

const TripHeader = ({ trip }: TripHeaderProps) => {
   return (
  <div>
     <div className='relative h-[300px] w-full'>
          <Image src={trip.coverImage} fill
          style={{objectFit: "cover"}}
          alt={trip.name}/>
     </div>

      {/* TÍTULO E INFORMAÇÕES */}
          <div className="flex flex-col p-5">
            <h1 className='font-semibold text-xl text-darkGray'>{trip.name}</h1>
          <div className="flex items-center gap-1 my-1">
            <ReactCountryFlag countryCode={trip.countryCode} svg />
            <p className="text-xs text-grayPrimary underline">{trip.location}</p>
          </div>
          <p className='text-xs text-darkGray'>
            <span className='text-primary font-medium'>R${trip.pricePerDay.toString()}</span> por noite
          </p>
        </div>

        {/* RESERVA */}
  </div>
   )
}

export default TripHeader