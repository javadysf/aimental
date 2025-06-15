import { Backdrop } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContactList from "../../MessengerModules/MessengerInboxModules/ContactList";
import DatePicker from "./BasicDatePicker";
import Quill from "./Quill";
import { useRef, useState } from "react";
import SearchInput from "../../../common/SearchInput";
import WeekDayPicker from "./Modules/WeekDayPicker";
import TimePicker from "../EMHeaderModules/AvailabilityModules/TimePicker";
import { CreateEvent } from "../../../../core/services/api/EventManager/EventManager";

const SessionTherapy = ({ handleClose,setreload,setappointmentMenu,SetCurrentPage }) => {
  const [open, setOpen] = useState(false);
  const [showRepeat,setShowRepeat] = useState(false);
  const [AppointmentDetails,setAppointmentDetails]=useState({
    title : "",
    description:"",
    contacts:[],
    start_time:"",
    end_time:"",
    opening_date:null,
    closing_date:null,
    is_repeated:""
  })

  const quillRef = useRef(null);

  const getText = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      setAppointmentDetails({...AppointmentDetails,description:editor.getText()})
    }
  };


  const changeHandler = (e) => {
    setAppointmentDetails({ ...AppointmentDetails, [e.target.name]: e.target.value });
  }
  const handleContactClose = () => {
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  }
  const setEvent=async()=>{
    await CreateEvent(AppointmentDetails)
     setreload(true)
    setappointmentMenu&&setappointmentMenu(false)
    SetCurrentPage&&SetCurrentPage("Main")
  }
  return (
    <>
      <input
      onChange={(e)=>changeHandler(e)}
      name="title"
      value={AppointmentDetails.title}
      type="text"
      placeholder="Title"
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
        <DatePicker onChange={(newValue)=>setAppointmentDetails({...AppointmentDetails,opening_date:`${newValue.$y}-${newValue.$M}-${newValue.$D}`})}/>
        <span className="flex gap-2 center">
        <TimePicker onChange={(newValue)=>setAppointmentDetails({...AppointmentDetails,start_time:`${newValue.$H}:${newValue.$m}`})}  />
       <h6 className="text-xs" >to</h6>
        <TimePicker placeholder={"End time"} onChange={(newValue)=>setAppointmentDetails({...AppointmentDetails,end_time:`${newValue.$H}:${newValue.$m}`})}  />

        </span>
      </div>
      <div className="flex gap-2">

      <input type="checkbox" onClick={()=>setShowRepeat(!showRepeat)} /> <span>Repeat on</span>
      </div>
      {showRepeat&&<>
        <WeekDayPicker onChange={(value)=>setAppointmentDetails({...AppointmentDetails,[value]:true})}/>
        <span>Ends On</span>
        <DatePicker onChange={(newValue)=>setAppointmentDetails({...AppointmentDetails,closing_date:`${newValue.$y}-${newValue.$M}-${newValue.$D}`})}/>
      </>  }
    
      <span className="blue-button text-xs w-fit dark:text-deepBlue rounded-xl font-medium">Add Meeting Link</span>
      <span className="border border-zinc-400 rounded-2xl p-2">
        <Quill quillRef={quillRef} getText={getText}  />
      </span>
      <span className="flex justify-between center gap-2">
      <span
          onClick={()=>{setappointmentMenu&&setappointmentMenu(false);SetCurrentPage("Main")}}
          className="white-button flex center w-full dark:text-blue-300  cursor-pointer"
        >
          Cancel
        </span>
        <span onClick={setEvent} className="blue-button flex center w-full dark:text-deepBlue font-medium">Create</span>
      </span>
    </>
  );
};

export default SessionTherapy;
