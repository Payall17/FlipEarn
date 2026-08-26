import React from 'react'
import { platformIcons } from '../assets/assets'
import { BadgeCheck } from 'lucide-react'


const ListingCard = ({ listing }) => {
    const currency = import.meta.env.VITE_CURRENCY || '$'

    return (
        <div className='relative bg-white rounded-2xl shadow-md p-4 flex flex-col gap-2 hover:shadow-lg transition'>

            {/* Featured banner */}
            {listing.featured && (
                <>
                    <p className='py-1' />

                    <div className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center py-1 rounded-lg'>
                        Featured
                    </div>
                </>
            )}
            <div className='p-5 pt-8'>
                <div className='flex items-center gap-3 mb-3'>
                    {platformIcons[listing.platform]}
                    <div className='flex flex-col'>
                        <h2>
                            {listing.title}
                        </h2>
                        <p>
                            @{listing.username} - <span className='capitalize'>{listing.platform}</span>
                        </p>
                    </div>
                    {listing.verified && <BadgeCheck className='text-green-500 ml-auto w-5 h-5'/>} 
                </div>

            </div>

        </div>
    )
}

export default ListingCard
