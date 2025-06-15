import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import SessionTherapy from "./AddAppointmentModules/SessionTherapy";
import GroupTherapy from "./AddAppointmentModules/GroupTherapy";

export default function AddAppointment({setreload}) {
    const [activeTab,setActiveTab]=useState("SessionTherapy")
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);

  };

  return (
    <div className="dark:bg-neutral-800">
      <span onClick={handleOpen} className="cursor-pointer">
        Appointment
      </span>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div className="col dark:bg-neutral-800 dark:text-neutral-100 gap-5 text-neutral-800 bg-white w-[500px] text-sm border border-zinc-400 rounded-2xl p-4">
          <span className=" flex justify-between font-normal border-b border-zinc-400 ">
            <h4 className="text-lg">Add Appointment</h4>
            <CloseIcon className="cursor-pointer" onClick={handleClose} />
          </span>
          <span className="flex gap-4 font-medium border-b text-sm border-zinc-400">
            <h4 onClick={()=>setActiveTab("SessionTherapy")} className={` ${activeTab=="SessionTherapy"&&"border-b-2 border-blue "} cursor-pointer pb-2 `}>Session</h4>
            <h4 onClick={()=>setActiveTab("GroupTherapy")} className={` ${activeTab=="GroupTherapy"&&"border-b-2 border-blue"} cursor-pointer pb-2`}>Group Therapy</h4>
          </span>
          {activeTab=="SessionTherapy"&&<SessionTherapy setreload={setreload} handleClose={handleClose} />}
          {activeTab=="GroupTherapy"&&<GroupTherapy handleClose={handleClose} />}
        </div>
      </Backdrop>
    </div>
  );
}
