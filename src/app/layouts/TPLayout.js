
"use client"
import TPHeader from "@/components/therapistPanel/therapistPanelModules/TPHeader";
import TPSideBar from "@/components/therapistPanel/therapistPanelModules/TPSideBar";
// import InboxFooter from "@/components/therapistPanel/MessengerModules/MessengerInboxModules/InboxFooter";
import { useEffect, useState } from "react";
import MobileTPHeader from "@/components/therapistPanel/therapistPanelModules/MobileTPHeader";

export default function TPLayout ({children}) {
  // for refreshing header when logged out
  const [refresh,setrefresh] = useState(false)
  useEffect(()=>{},[refresh])
  const [showFooter,setShowFooter]= useState(true)
  return (
    <html>
    <body >
     <p>BYE BYE</p>
     {children}
    </body>
  </html>
    // <>
    //     {window.innerWidth>1000?<TPHeader setrefresh={setrefresh} />:<MobileTPHeader setrefresh={setrefresh}/>}
    //   <div className="flex max-lg:flex-col-reverse dark:bg-neutral-800 max-lg:p-3    ">
        
    //       <TPSideBar setrefresh={setrefresh} />
    //       {children}
    //       {/* <Outlet  context={[showFooter,setShowFooter]}/> */}
    //   </div>
    //   {/* <InboxFooter showFooter={showFooter}/> */}
    // </>
  );
};

