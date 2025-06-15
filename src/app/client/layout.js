"use client"
import ClientSideBar from "@/components/ClientPanel/ClientPanelModules/ClientSideBar"
// import { Outlet } from "react-router-dom";
// import MobileFooter from "../MobileFooter";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ClientHeader from "@/components/ClientPanel/ClientPanelModules/ClientHeader";
import MobileModeHeader from "@/components/ClientPanel/ClientPanelModules/MobileModeHeader";
import { getCLProfile } from "@/core/services/api/ClientProfile/ClientProfile";
import { setCLProfile } from "@/redux/features/UserProfile/CLProfile";

const ClientLayout = ({children}) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const SetProfile = async() => {
      const res = await getCLProfile()
        dispatch(setCLProfile(res))
    };
    SetProfile()
  },[])

  const [showFooter,setShowFooter]= useState(true)
  return (
    <>
        {window.innerWidth>1000?<ClientHeader />:<MobileModeHeader/>}
      <div className="flex max-lg:flex-col-reverse dark:bg-neutral-800  ">
          <ClientSideBar />
          {children}
      {/* <Outlet context={[showFooter,setShowFooter]} /> */}
      </div>
      
      {/* {window.innerWidth<1000&&<MobileFooter showFooter={showFooter}/>} */}
    </>
  );
};

export default ClientLayout;
