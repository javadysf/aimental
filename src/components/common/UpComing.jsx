import { Backdrop } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { KeyboardArrowLeft } from "@mui/icons-material";


const profile = [
    { id: 1, title: "Title", value: "Third session" },
    { id: 2, title: "Client", value: "Mike Portnoy" },
    { id: 3, title: "Date and Time", value: "Sunday, August 4, 7:30 PM - 8:30 PM" },
    { id: 4, title: "Repeat", value: "Weekly on Sunday, Tuesday, until Nov 24, 2024" },
    { id: 5, title: "Meeting link", value: "meet.google.com/dps-hynd-xqe" },
    { id: 6, title: "Description:", value: "Feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris sit amet massa vitae tortor condimentum." },
  
  ];

const UpComing = ({setShowDetails}) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
  return (
    <>
    {window.innerWidth > 1000&&
    <div className="w-full  flex gp4 cursor-pointer border-neutral-800 border rounded-2xl ">
    <div  onClick={handleOpen} className="col gap-3">
      <span>4:30 PM</span>
      <h4>Appointment with Mike Portnoy</h4>
    </div>
    <Backdrop open={open}
    onClick={handleClose}sx={{zIndex:100}}
    >
     <div className="col dark:bg-neutral-800 dark:text-neutral-100 gap-5 text-neutral-800 bg-white w-[500px] text-sm border border-zinc-400 rounded-2xl p-4">
          <span className=" flex justify-between font-normal border-b border-zinc-400 ">
            <h4 className="text-lg">Individual session</h4>
            <CloseIcon className="cursor-pointer" onClick={handleClose} />
          </span>
          {profile.map(({id, title, value}) =><span key={id}>
          <h4 className="text-base text-zinc-700 "> {title} </h4>
          <h3 className={`text-md ${id==6&&" !font-normal"} font-semibold`}>{value}</h3>
        </span>)}
        <div className='flex w-full justify-between gap-3' >
          <span className='white-button w-full text-center text-[#B3261E]' > Cancel Session</span>
          <span className='blue-button w-full text-center ' > Close </span>
           </div>
        </div>
    </Backdrop>
 </div>}
 {
  window.innerWidth < 1000 && 

<div className="w-full  flex gp4 cursor-pointer border-neutral-800 border rounded-2xl ">
    <div  onClick={()=>setShowDetails(true)} className="col gap-3">
      <span>4:30 PM</span>
      <h4>Appointment with Mike Portnoy</h4>
    </div>
</div>
 }
    </>
  )
}

export default UpComing