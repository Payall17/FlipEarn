import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Messages from "./pages/Messages";
import MyListings from "./pages/MyListings";
import ListingDetails from "./pages/ListingDetails";
import ManageListing from "./pages/ManageListing";
import MyOrders from "./pages/MyOrders";
import Loading from "./pages/Loading";
import Navbar from './components/Navbar';
import {Toaster} from 'react-hot-toast'
import { useAuth, useUser } from '@clerk/react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPublicListing, getAllUserListing } from './app/features/listingSlice';

const App = () => {
  const {pathname} = useLocation();
  const {getToken}= useAuth();

  const {user, isLoaded}=useUser()

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getAllPublicListing())
  },[])

  useEffect(()=>{
    if(isLoaded && user){
      dispatch(getAllUserListing({getToken}))
    }
  },[isLoaded, user])

  return (
    <div>
      <Toaster />
      {!pathname.includes("/admin") && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/my-listings" element={<MyListings />} />
        <Route path="/listing/:listingId" element={<ListingDetails  />} />
        <Route path="/create-listing" element={<ManageListing  />} />
        <Route path="/edit-listing" element={<ManageListing  />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/loading" element={<Loading  />} />
      </Routes>
    </div>
  )
}

export default App