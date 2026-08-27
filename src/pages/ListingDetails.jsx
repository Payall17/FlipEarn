import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getProfileLink } from '../utils/helpers';
import { ArrowLeftIcon, LoaderIcon } from 'lucide-react';

const ListingDetails = () => {
    const navigate = useNavigate();
    const { listingId } = useParams();

    const currency = import.meta.env.VITE_CURRENCY || '$';

    const [listing, setListing] = useState(null);

    const profileLink =
        listing &&
        getProfileLink(listing.platform, listing.username);

    const { listings } = useSelector((state) => state.listing);

    useEffect(() => {
        const foundListing = listings.find(
            (listing) => listing.id === listingId
        );

        if (foundListing) {
            setListing(foundListing);
        }
    }, [listingId, listings]);

    return listing ? (
        <div className="mx-auto min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">

            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition mb-4"
            >
                <ArrowLeftIcon className="size-4" />
                Go to Previous Page
            </button>

            {/* Listing details will go here */}

        </div>
    ) : (
        <div className="h-screen flex justify-center items-center text-gray-500">
            <LoaderIcon className="size-7 animate-spin text-indigo-600" />
        </div>
    );
};

export default ListingDetails;