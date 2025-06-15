import { Outlet } from "react-router-dom";
import TPHeader from "../TPHeader";
import TPSideBar from "../TPSideBar";
import InboxFooter from "../../MessengerModules/MessengerInboxModules/InboxFooter";
import { useEffect, useState } from "react";
import MobileTPHeader from "../MobileTPHeader";

const TPLayout = () => {
  // for refreshing header when logged out
  const [refresh,setrefresh] = useState(false)
  useEffect(()=>{},[refresh])
  const [showFooter,setShowFooter]= useState(true)
  return (
    <>
        {window.innerWidth>1000?<TPHeader setrefresh={setrefresh} />:<MobileTPHeader setrefresh={setrefresh}/>}
      <div className="flex max-lg:flex-col-reverse dark:bg-neutral-800 max-lg:p-3    ">
        
          <TPSideBar setrefresh={setrefresh} />
          <Outlet  context={[showFooter,setShowFooter]}/>
      </div>
      <InboxFooter showFooter={showFooter}/>
    </>
  );
};

export default TPLayout;
