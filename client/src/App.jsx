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

const App = () => {
  const {pathname} = useLocation();
  return (
    <div>
      {!pathname.includes("/admin") && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Marketplace />} />
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