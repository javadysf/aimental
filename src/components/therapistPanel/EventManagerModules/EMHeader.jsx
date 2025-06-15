import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import AvailabilityModule from "./EMHeaderModules/AvailabilityModule"
import AddButton from "./EMHeaderModules/AddButton";

const EMHeader = ({setreload}) => {
  const [AvailableTimes, setAvailableTime] = useState([]);
  const WeekDays = [{
    id:"1",name:"Sunday"
  }, {
    id:"2",name:"Monday"
  }, {
    id:"3",name:"Tusday"
  }, {
    id:"4",name:"Wednesday"
  }, {
    id:"5",name:"Thursday"
  }, {
    id:"6",name:"Friday"
  }, {
    id:"7",name:"Saturday"
  }]
  const [displayMenu, setDisplayMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="max-lg:hidden max-lg:m-0 flex dark:text-neutral-100 justify-between border-b border-zinc-400 items-center mb-4 p-4">
      <h2 className="text-3xl font-semibold ">Events</h2>
      <div className="flex gap-2 center relative ">
        <span
          onClick={handleOpen}
          className="white-button text-base w-fit cursor-pointer dark:text-blue-300"
        >
          Available Time
        </span>
  <AddButton setreload={setreload} />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <div className="col dark:bg-neutral-800 dark:text-neutral-100 gap-2 text-neutral-800 bg-white w-[500px] text-sm border border-zinc-400 rounded-2xl p-4">
            <span className=" flex justify-between font-normal border-b border-zinc-400 ">
              <h4 className="text-lg"> Available Time</h4>
            </span>
            {
              WeekDays?.map(({id,name})=><AvailabilityModule AvailableTimes={AvailableTimes} setAvailableTime={setAvailableTime} key={id} name={name}/>)
            }


          <span className="flex justify-between center gap-2">
        <span onClick={handleClose} className="white-button flex center w-full cursor-pointer">Cancel</span>
        <span className="blue-button flex center w-full">Create</span>
      </span>
          </div>
        </Backdrop>
      </div>
    </div>
  );
};

export default EMHeader;
