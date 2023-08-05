import { prisma } from '@/lib/prisma'
import React from 'react'
import TripHeader from './components/TripHeader'
import TripReservation from './components/TripReservation'
import TripDescription from './components/TripDescription'
import TripHighlights from './components/TripHighlights'
import TripLocation from './components/TripLocation'

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
       <TripReservation tripStartDate={trip.startDate} tripEndDate={trip.endDate} maxGuests={trip.maxGuests} tripId={''} pricePerDay={0}/>
       <TripDescription description={trip.description}/>
       <TripHighlights highlights={trip.highlights}/>
       <TripLocation location={trip.location} locationDescription={trip.locationDescription}/>

     </div>
   )
}

export default TripDetails