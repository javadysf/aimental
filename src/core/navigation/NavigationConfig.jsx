"use client"

import React, { Suspense } from 'react'
// import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSharedProfile } from "@/redux/features/UserProfile/SharedProfile";
import { useSelector } from "react-redux";
import { setCLAvatar, setCLProfile } from "@/redux/features/UserProfile/CLProfile";
import { getCLProfile } from "@/core/services/api/ClientProfile/ClientProfile";
import { setTPAvatar, setTPProfile } from "@/redux/features/UserProfile/TPProfile";
import { getTPProfile } from "@/core/services/api/TherapistProfile/TherapistProfile";
import { getDocuments } from "@/core/services/api/Documents/documents";
import { getProfile } from '../services/api/Auth/auth';
import { getItem, setItem } from '../services/common/storage.services';
import {useRouter, useSearchParams} from "next/navigation";

const NavigationConfig = ({children}) => {
    const token =getItem("access_token")

    const [publicProfile,setPublicProfile] = useState()

    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const router = useRouter()
      // const [searchParams] = useSearchParams();
    const searchParams = useSearchParams()
        const getUserProfile = async() => {
      const res = await getProfile();
          setPublicProfile(res)
      dispatch(setSharedProfile(res))
    }
          useEffect(() => {
      // Get the query parameter value and save it to state
      const access_token = searchParams.get('access_token');
      const refresh_token = searchParams.get('refresh_token');
      if (access_token) {
      setItem("access_token",access_token)
      setItem("refresh_token",refresh_token)
      getUserProfile()
      }
    }, [searchParams]);
    useEffect(()=>{
        if(token)
        {
          getUserProfile()
        }
      },[token])
    
    const getProfileHandler = async(is_therapis)=>{
    
      if(is_therapis)
      {
        const res = await getTPProfile()
      dispatch(setTPProfile(res))
      dispatch(setTPAvatar(await getDocuments(res?.avatar)))
      !token&&navigate("/therapist/dashboard")
      }
      else
      {
        const res = await getCLProfile()
        dispatch(setCLProfile(res))
        dispatch(setCLAvatar(await getDocuments(res?.avatar)))
        !token&&router.push("/client/dashboard")
      
      }
    }
  
        useEffect(()=>{
          if(publicProfile)
          {
            if(publicProfile.is_new)
            {
              navigate("/login")
            }
            else
            {
              if(!publicProfile.is_therapist)
              {
                getProfileHandler(publicProfile.is_therapist)
             
              }
              else if (publicProfile.is_therapist)
              {
                getProfileHandler(publicProfile.is_therapist)
               
              }
            }
            
          }
      },[publicProfile])  
  return (


    <Suspense fallback={<div>Loading...</div>}>

        {children}
    </Suspense>
 
  )
}

export default NavigationConfig