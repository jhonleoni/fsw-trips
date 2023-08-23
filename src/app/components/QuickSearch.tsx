import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const QuickSearch = () => {
   return (
     <div className='container mx-auto p-5'>
        <div className='flex items-center'>
          <div className="w-full h-[1px] bg-lightGray"></div>
          <h2 className='px-5 font-medium text-darkGray whitespace-nowrap'>Tente pesquisar por</h2>
          <div className="w-full h-[1px] bg-lightGray"></div>
        </div>

        <div className="flex w-full justify-between mt-5">
            <div className="flex flex-col items-center gap-1">
              <Link href={`/trips/search?text=hotel`} className='flex flex-col items-center hover:text-primary transition-all'> 
                <Image width={35} height={35} src="/hotel-icon.png" alt='hotel'/>
                <p className='text-sm text-darkGray'>Hotéis</p>
             </Link>
            </div>
            
            <div className="flex flex-col items-center gap-1">
               <Link href={`/trips/search?text=fazenda`} className='flex flex-col items-center hover:text-primary transition-all'> 
                <Image width={35} height={35} src="/farm-icon.png" alt='fazenda'/>
                <p className='text-sm text-darkGray'>Fazendas</p>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-1">
              <Link href={`/trips/search?text=chalé`} className='flex flex-col items-center hover:text-primary transition-all'> 
                <Image width={35} height={35} src="/cottage-icon.png" alt='chalé'/>
                <p className='text-sm text-darkGray'>Chalés</p>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-1">
              <Link href={`/trips/search?text=pousada`} className='flex flex-col items-center hover:text-primary transition-all'> 
                <Image width={35} height={35} src="/inn-icon.png" alt='pousada'/>
                <p className='text-sm text-darkGray'>Pousadas</p>
              </Link>
            </div>
        </div>
     </div>
   )
}

export default QuickSearch