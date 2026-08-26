import {createSlice} from '@reduxjs/toolkit'
import { dummyListings, dummyUserListings } from '../../assets/assets';

const initialState = createSlice({
    name: 'listing',
    initialState: {
        listings: dummyListings,
        userListings: dummyUserListings,
        balance: {
            earned: 0,
            withdrawn: 0,
            available: 0
        }
    },
    reducers: {
        setListings: (state, action) => {
            state.listings = action.payload;
        }
    }

})

export const {setListings} = listingSlice.actions;
export default listingSlice.reducer;