
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Close, MoreHoriz } from "@mui/icons-material";
import AiLogo from "../../../../assets/img/aimental.svg"
import { Backdrop } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { getClients } from "../../../../core/services/api/Users/Users";
import Link from "next/link";
import Image from "next/image";
import { DeleteTask } from "@/core/services/api/EventManager/EventManager";
import EventsContacts from "../AddAppointmentModules/EventsContacts";
import AddTask from "../AddAppointmentModules/AddTask";

export default function FormMenu({ task, setrefresh, reload,details }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showContacts, setShowContacts] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [TaskMenu, setTaskMenu] = useState(null);
  const [clientsList, setClientsList] = useState(false);
  const [editedtask, seteditedTask] = useState({
    title: task?.title,
    description: task?.description,
    date: task?.date,
    time: task?.time,
    participant: [],
    tags: task?.tags,
    priority: task?.priority,
  });
  const getClientsListHandler =async()=>{
    setClientsList(await getClients())
  }
const UpdateAssigned =async()=>{
  setShowContacts(false)
  await EditQuestionnaire(id,updatedQuestionnaire)
}

  useEffect(()=>{
getClientsListHandler()
  },[])

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async () => {
    setAnchorEl(null);
  };
  const handleDelete = async () => {
    setAnchorEl(null);
    const res = await DeleteTask(details?.id);
    setrefresh(!reload);
    setShowWarning(false)
  };
  return (
    <div>
      <MoreHoriz
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        sx={{ rotate: "90deg", alignSelf: "center", cursor: "pointer" }}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </MoreHoriz>
      <Menu
        sx={{
          boxShadow: "none",
          "& .MuiPopover-paper": {
            boxShadow: "none",
            border: "1px solid #b0b0b0",
          },
        }}
        anchorOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} className="flex gap-2">

       <span onClick={() => setTaskMenu(true)} className="flex gap-2">
            <EditIcon />
            <span>Edit</span>
          </span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span onClick={() => setShowContacts(true)} className="flex gap-2">
            <PersonIcon />
            <span>Assigne To</span>
          </span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span className="flex gap-2" onClick={() => setShowWarning(true)}>
            <DeleteIcon />
            <span> Delete</span>
          </span>
        </MenuItem>
      </Menu>
      <Backdrop open={showWarning}>
        <div className="col w-[400px] bg-white center text-neutral-800 text-center rounded-2xl gap-4 px-5 py-4">
          <Image alt="aimental-logo" width={128} height={64} className="w-32" src={AiLogo} />
          <h4>The item will be removed from the Tasks list.</h4>
          <span className="flex w-full gap-2 justify-between" >
          <button className="white-button w-full" onClick={()=>setShowWarning(false)} > Cancel </button>
          <button onClick={()=>{handleDelete()}} className="white-button !bg-[#B3261E] w-full text-white" > Delete </button>
          </span>
        </div>
      </Backdrop>
      <Backdrop open={showContacts}>
        <div className="col w-[400px] bg-white text-neutral-800 rounded-2xl gap-4 px-5 py-4">
          <span className="  flex justify-between font-normal text-neutral-800 border-b border-zinc-400 p-2 ">
            <h4 className="text-lg">Choose Participation</h4>
            <Close
              className="cursor-pointer"
              onClick={() => setShowContacts(false)}
            />
          </span>
          <EventsContacts details={details}  />
          <span className="flex justify-between center gap-2">
            <span
              onClick={() => setShowContacts(false)}
              className="white-button flex center w-full cursor-pointer"
            >
              Cancel
            </span>
            <span onClick={()=>UpdateAssigned()} className="blue-button flex center w-full">Done</span>
          </span>
        </div>
      </Backdrop>
      <Backdrop open={TaskMenu} >
<AddTask editMode={true} task={editedtask} setTask={seteditedTask} details={details} setTaskMenu={setTaskMenu} />
      </Backdrop>
    </div>
  );
}
