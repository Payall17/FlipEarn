import { configureStore } from "@reduxjs/toolkit";
import listingSlice from "./features/listingSlice";

export const store = configureStore({
    reducer: {
        listing: listingSlice
    }
});