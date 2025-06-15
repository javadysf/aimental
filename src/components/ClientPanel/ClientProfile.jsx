"use client"
import React, { useState } from 'react'
import Profile from './ClientProfileModule/Profile'
import ClientReviews from './ClientProfileModule/ClientReviews'
import EditProfile from './ClientProfileModule/EditProfile'

const ClientProfile = () => {
  const [editmode,setEditmode]=useState(false)
  return (
    <div className=" w-full flex p-4 max-lg:col max-lg:p-2 max-lg:h-auto max-lg:gap-3 gap-6  h-[calc(100vh-120px)] ">
      {editmode?<EditProfile setEditmode={setEditmode} />:<Profile setEditmode={setEditmode}/>}
     <ClientReviews/>
      </div>
  )
}

export default ClientProfile