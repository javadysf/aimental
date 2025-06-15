import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import ContactList from "../../MessengerModules/MessengerInboxModules/ContactList";
import DatePicker from "./BasicDatePicker";
import Quill from "./Quill";

import SearchInput from "../../../common/SearchInput";
import TimePicker from "../EMHeaderModules/AvailabilityModules/TimePicker";
import { KeyboardArrowLeft } from "@mui/icons-material";
import {
  getTasksPriority,
  getTasksTags,
} from "@/core/services/api/BaseInfo/BaseInfo";
import EventsContacts from "./EventsContacts";

const MobileAddTask = ({ SetCurrentPage,setreload }) => {
  const [TasksPriority, setTasksPriority] = useState([]);
  const [TaskTags, setTaskTags] = useState([]);
  const [task,setTask]= useState({
    title:"",
    description:"",
    participant:[],
    tags:[],
    priority:[]
  })
  const getTasksPriorityHandler = async () => {
    setTasksPriority(await getTasksPriority());
    setTaskTags(await getTasksTags());
  };

  const CreateTaskHandler = async () => {
    await CreateTasks(task);
    setreload(true)
    setTaskMenu(false);
  };
console.log(task);
  useEffect(() => {
    getTasksPriorityHandler();
  }, []);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleContactClose = () => {
    setOpen(false);
  };

  return (
    <div className="col gap-2 text-neutral-800 dark:text-neutral-300 gap-4 bg-white text-sm  dark:bg-neutral-800 p-4">
      <span className=" flex justify-start  items-center gap-3 font-normal ">
        <KeyboardArrowLeft
          onClick={() => SetCurrentPage("Main")}
          className="!w-6 !h-6 "
        />
        <h4 className="text-lg max-lg:text-base">Task</h4>
      </span>
      <input
        name="title"
        value={task?.title}
        onChange={(e)=>setTask({...task,title:e.target.value})}
        type="text"
        placeholder="Title"
        className="border dark:text-neutral-300 dark:bg-neutral-800 dark:placeholder-neutral-300 border-zinc-400 rounded-xl text-md font-medium p-2 placeholder-zinc-800"
      />
      <span
        onClick={handleOpen}
        className="border cursor-pointer hover:bg-blue-50 border-zinc-400 rounded-xl text-md dark:text-neutral-300 font-medium p-2"
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
            <CloseIcon
              className="cursor-pointer"
              onClick={handleContactClose}
            />
          </span>
          <SearchInput />
          <EventsContacts task={task} setTask={setTask} />
          <span className="flex justify-between center gap-2">
            <span
              onClick={handleContactClose}
              className="white-button flex center w-full cursor-pointer"
            >
              Cancel
            </span>
            <span onClick={handleContactClose} className="blue-button flex center w-full">Done</span>
          </span>
        </div>
      </Backdrop>
      <div className=" flex  gap-5 items-center max-lg:items-start max-lg:gap-4 text-md font-medium">
        <DatePicker />
        <TimePicker />
      </div>
      <select className="rounded-xl text-md font-medium p-2 border dark:bg-neutral-800 dark:text-neutral-300 border-zinc-400">
        <option disabled selected>
          Priority
        </option>
        {TasksPriority?.map((item)=><option key={item.id} value={item.id}>{item?.title}</option>)}
      </select>
      <select className="rounded-xl text-md font-medium p-2 border dark:bg-neutral-800 dark:text-neutral-300 border-zinc-400">
        <option disabled selected>
          Tags
        </option>
        {TaskTags?.map((item)=><option key={item.id}>{item?.title}</option>)}
      </select>
      <span className="border border-zinc-400 rounded-2xl p-2">
        <Quill />
      </span>
      {/* <span className="flex gap-4 items-center">
  <h4>Status : </h4>
 <TagModule css={"!rounded-3xl !py-[2px] px-2 h-[30px]"} title={<div className="flex gap-2 center text-sm"><div className="w-3 h-3 bg-blue rounded-full" ></div>To do</div>} />
 <TagModule css={"!rounded-3xl !py-[2px] px-2 h-[30px]"} title={<div className="flex gap-2 center text-sm"><div className="w-3 h-3 bg-[#FCC99E] rounded-full" ></div>In progress</div>} />
 <TagModule css={"!rounded-3xl !py-[2px] px-2 h-[30px]"} title={<div className="flex gap-2 center text-sm"><div className="w-3 h-3 bg-[#2CEAA3] rounded-full" ></div>Done</div>} />
</span> */}
      <span className="flex justify-between center gap-2">
        <span
          onClick={() => {
            handleClose;
            SetCurrentPage("Main");
          }}
          className="white-button flex center w-full dark:text-blue-300  cursor-pointer"
        >
          Cancel
        </span>
        <span onClick={()=>CreateTaskHandler()} className="blue-button cursor-pointer flex center w-full dark:text-deepBlue font-medium">
          Create
        </span>
      </span>
    </div>
  );
};

export default MobileAddTask;
