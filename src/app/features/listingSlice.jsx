import { createSlice } from '@reduxjs/toolkit';

const listingSlice = createSlice({
    name: 'listing',

    initialState: {
        listings: [],
        userListings: [],
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
});

export const { setListings } = listingSlice.actions;

export default listingSlice.reducer;