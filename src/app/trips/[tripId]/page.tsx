import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import TripHeader from './components/TripHeader'

const getTripsDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  })

  return trip
}

const TripDetails = async ({params}: {params: {tripId: string}}) => {
      const trip = await getTripsDetails(params.tripId)

      if (!trip) {
        return (
          <div>Not found</div>
        )
      }

   return (
     <div className='container mx-auto'>
       <TripHeader trip={trip} />

       {/* RESERVA */}
     </div>
   )
}

export default TripDetails