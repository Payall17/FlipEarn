import {configureStore} from '@reduxjs/toolkit'
import listingSlice from './listingSlice'

export const store = configureStore({
    reducer: {
        // Add your reducers here
        
        listing: listingSlice
    }
})