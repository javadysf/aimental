import { useState } from "react";
import { Backdrop } from "@mui/material";
import DatePicker from "./BasicDatePicker";
import CloseIcon from "@mui/icons-material/Close";
import Quill from "./Quill";
import SearchInput from "../../../common/SearchInput";
import WeekDayPicker from "./Modules/WeekDayPicker";
import ContactList from "../../MessengerModules/MessengerInboxModules/ContactList";
import TimePicker from "../EMHeaderModules/AvailabilityModules/TimePicker";


const GroupTherapy = ({ handleClose }) => {
  const [showRepeat,setShowRepeat] = useState(false);
  const [open, setOpen] = useState(false);
  const handleContactClose = () => {
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Transactional Analysis"
        className="border dark:bg-neutral-800 dark:placeholder-neutral-300 border-zinc-400 rounded-xl text-md font-medium p-2 placeholder-zinc-800"
      />
      <span
        onClick={handleOpen}
        className="border cursor-pointer hover:bg-blue-50 border-zinc-400 rounded-xl text-md font-medium p-2"
      >
        Assing To
      </span>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div className="col w-[400px] bg-white text-neutral-800 rounded-2xl gap-4 px-5 py-4">
          <span className="  flex justify-between font-normal text-neutral-800 border-b border-zinc-400 p-2 ">
            <h4 className="text-lg">Choose Participation</h4>
            <CloseIcon className="cursor-pointer" onClick={handleContactClose} />
          </span>
          <SearchInput />
          <ContactList />
          <span className="flex justify-between center gap-2">
            <span
              onClick={handleContactClose}
              className="white-button flex center w-full cursor-pointer"
            >
              Cancel
            </span>
            <span className="blue-button flex center w-full">Done</span>
          </span>
        </div>
      </Backdrop>
      <div  className=" flex max-lg:col gap-2 items-center max-lg:items-start max-lg:gap-4 text-md font-medium">
        <DatePicker />
        <span className="flex gap-2 center">
        <TimePicker  />
       <h6 className="text-xs" >to</h6>
        <TimePicker  />

        </span>
      </div>
      <div className="flex gap-2">

<input type="checkbox" onClick={()=>setShowRepeat(!showRepeat)} /> <span>Repeat on</span>
</div>
{showRepeat&&  <WeekDayPicker/>}

<span className="blue-button text-xs w-fit dark:text-deepBlue font-medium">Add Meeting Link</span>
<span className="border border-zinc-400 rounded-2xl p-2">
  <Quill />
</span>
    </>
  );
};

export default GroupTherapy;
