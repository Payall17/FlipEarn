import React from 'react'


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

        </div>
    )
}

export default ListingCard
