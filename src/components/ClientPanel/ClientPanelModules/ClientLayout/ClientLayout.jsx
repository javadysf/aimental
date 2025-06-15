import ClientHeader from "../ClientHeader";
import ClientSideBar from "../ClientSideBar";
import { Outlet } from "react-router-dom";
import MobileModeHeader from "../MobileModeHeader";
import MobileFooter from "../MobileFooter";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCLProfile } from "../../../../redux/features/UserProfile/CLProfile";
import { getCLProfile } from "../../../../core/services/api/ClientProfile/ClientProfile";

const ClientLayout = () => {
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
      <Outlet context={[showFooter,setShowFooter]} />
      </div>
      
      {window.innerWidth<1000&&<MobileFooter showFooter={showFooter}/>}
    </>
  );
};

export default ClientLayout;
