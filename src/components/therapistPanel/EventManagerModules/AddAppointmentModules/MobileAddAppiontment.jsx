import CloseIcon from "@mui/icons-material/Close";
import { useState,useEffect } from "react";
import SessionTherapy from "./SessionTherapy";
import { KeyboardArrowLeft } from "@mui/icons-material";
import GroupTherapy from "./GroupTherapy";

const MobileAddAppiontment = ({SetCurrentPage,setreload}) => {
  const [appointmentMenu, setappointmentMenu] = useState(null);

    useEffect(()=>{
      
    },[])
    const [activeTab,setActiveTab]=useState("SessionTherapy")
    const [open, setOpen] = useState(false);

  return (
    <div className="col dark:bg-neutral-800 dark:text-neutral-100 gap-6 text-neutral-800 bg-white text-sm rounded-2xl max-lg:rounded-none p-4">
    <span className=" flex justify-start items-center gap-3 font-normal ">
        <KeyboardArrowLeft onClick={()=>SetCurrentPage("Main")} className="!cursor-pointer !w-6 !h-6 " />
      <h4 className="text-lg max-lg:text-base">Add Appointment</h4>
    </span>
    <span className="flex gap-4 font-medium text-sm">
      <h4 onClick={()=>setActiveTab("SessionTherapy")} className={` ${activeTab=="SessionTherapy"&&"border-b-2 border-blue dark:border-blue-300 dark:text-blue-300 "} cursor-pointer pb-2 `}>Session</h4>
      <h4 onClick={()=>setActiveTab("GroupTherapy")} className={` ${activeTab=="GroupTherapy"&&"border-b-2 border-blue dark:border-blue-300 dark:text-blue-300 "} cursor-pointer pb-2`}>Group Therapy</h4>
    </span>
    {activeTab=="SessionTherapy"&&<SessionTherapy SetCurrentPage={SetCurrentPage} setreload={setreload}  />}
    {activeTab=="GroupTherapy"&&<GroupTherapy SetCurrentPage={SetCurrentPage} setreload={setreload}  />}
  </div>
  )
}

export default MobileAddAppiontment