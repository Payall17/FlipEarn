import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    BadgeCheck,
    User,
    LineChart,
    MapPin
} from 'lucide-react'

const ListingCard = ({ listing }) => {
    const currency = import.meta.env.VITE_CURRENCY || '$'
    const navigate = useNavigate()

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

                {/* Header */}
                <div className='flex items-center gap-3 mb-3'>

                    {platformIcons[listing.platform]}

                    <div className='flex flex-col gap-1'>
                        <h2>{listing.title}</h2>

                        <p>
                            @{listing.username} -{' '}
                            <span className='capitalize'>
                                {listing.platform}
                            </span>
                        </p>
                    </div>

                    {listing.verified && (
                        <BadgeCheck className='text-green-500 w-5 h-5' />
                    )}

                </div>

                {/* Stats */}
                <div className='flex flex-wrap justify-between max-w-lg items-center gap-3 my-5'>

                    <div className='flex items-center'>
                        <User className='size-6 mr-1 text-gray-400' />

                        <span className='text-lg font-medium text-slate-800 mr-1.5'>
                            {listing.followers.toLocaleString()}
                        </span>

                        followers
                    </div>

                    {listing.engagement_rate && (
                        <div className='flex items-center'>
                            <LineChart className='size-6 mr-1 text-gray-400' />

                            <span className='text-lg font-medium text-slate-800 mr-1.5'>
                                {listing.engagement_rate.toFixed(2)}%
                            </span>

                            engagement
                        </div>
                    )}

                </div>

                {/* Tags & Location */}
                <div>

                    <div className='flex items-center gap-3 mb-3'>

                        <span>{listing.niche}</span>

                        {listing.country && (
                            <div className='flex items-center gap-1'>
                                <MapPin className='size-6 mr-1 text-gray-400' />

                                <span>{listing.country}</span>
                            </div>
                        )}

                    </div>

                    {/* Description */}
                    <p className='text-gray-600 mb-3'>
                        {listing.description}
                    </p>

                    <hr className='my-5 border-gray-200' />

                    {/* Footer */}
                    <div className='flex items-center justify-between'>

                        <span className='text-2xl font-medium text-slate-800'>
                            {currency}{listing.price.toLocaleString()}
                        </span>

                        <button
                            onClick={() => navigate(`/listing/${listing.id}`)}
                            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'
                        >
                            More details
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ListingCard