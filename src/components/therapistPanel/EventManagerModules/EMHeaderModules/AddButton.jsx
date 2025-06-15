import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import { Backdrop, Button } from "@mui/material";
import SessionTherapy from "../AddAppointmentModules/SessionTherapy";
import GroupTherapy from "../AddAppointmentModules/GroupTherapy";
import {  useState } from "react";
import EventsContacts from "../AddAppointmentModules/EventsContacts";
import { CreateTasks } from "@/core/services/api/EventManager/EventManager";
import AddTask from "../AddAppointmentModules/AddTask";

export default function AddButton({ id, setreload, refresh }) {

  const CreateTaskHandler = async () => {
    await CreateTasks(task);
    setreload(true);
    setTaskMenu(false);
  };

  const [TaskMenu, setTaskMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState("SessionTherapy");
  const [appointmentMenu, setappointmentMenu] = useState(null);
  const [showContacts, setShowContacts] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    participant: [],
    tags: [],
    priority: [],
  });
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async () => {
    setAnchorEl(null);
  };
  console.log(task);
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        sx={{alignSelf: "center",cursor: "pointer",backgroundColor: "#2d55cc",
          color: "white",":hover": { backgroundColor: "blue" },borderRadius: "12px",height: "40px",width: "160px",
        }}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        + Add
      </Button>
      <Menu
        id="basic-menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right", }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button", }}
      >
        <MenuItem onClick={handleClose}>
          <span onClick={() => setappointmentMenu(true)}>Add Appointment</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span onClick={() => setTaskMenu(true)}>Add Task</span>
        </MenuItem>
      </Menu>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={appointmentMenu}
      >
        <div className="col dark:bg-neutral-800 dark:text-neutral-100 gap-3 text-neutral-800 bg-white w-[500px] text-sm border border-zinc-400 rounded-2xl p-4">
          <span className=" flex justify-between font-normal border-b border-zinc-400 ">
            <h4 className="text-lg">Add Appointment</h4>
            <CloseIcon
              className="cursor-pointer"
              onClick={() => setappointmentMenu(false)}
            />
          </span>
          <span className="flex gap-4 font-medium border-b text-sm border-zinc-400">
            <h4
              onClick={() => setActiveTab("SessionTherapy")}
              className={` ${
                activeTab == "SessionTherapy" && "border-b-2 border-blue "} cursor-pointer pb-2 `}
            >
              Session
            </h4>
            <h4
              onClick={() => setActiveTab("GroupTherapy")}
              className={` ${
                activeTab == "GroupTherapy" && "border-b-2 border-blue"} cursor-pointer pb-2`}
            >
              Group Therapy
            </h4>
          </span>
          {activeTab == "SessionTherapy" && (
            <SessionTherapy
              setappointmentMenu={setappointmentMenu}
              setreload={setreload}
              handleClose={handleClose}
            />
          )}
          {activeTab == "GroupTherapy" && (
            <GroupTherapy
              setappointmentMenu={setappointmentMenu}
              handleClose={handleClose}
            />
          )}
        </div>
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={TaskMenu}
      >
    <AddTask setTaskMenu={setTaskMenu} CreateTaskHandler={CreateTaskHandler} task={task} setTask={setTask} setShowContacts={setShowContacts}  />
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showContacts}
      >
        <div className="col w-[400px] bg-white text-neutral-800 rounded-2xl gap-4 px-5 py-4">
          <span className="  flex justify-between font-normal text-neutral-800 border-b border-zinc-400 p-2 ">
            <h4 className="text-lg">Choose Participation</h4>
            <CloseIcon
              className="cursor-pointer"
              onClick={() => setShowContacts(false)}
            />
          </span>
          <EventsContacts task={task} setTask={setTask} />
          <span className="flex justify-between center gap-2">
            <span
              onClick={() => setShowContacts(false)}
              className="white-button flex center w-full cursor-pointer"
            >
              Cancel
            </span>
            <span
              onClick={() => setShowContacts(false)}
              className="blue-button flex center w-full"
            >
              Done
            </span>
          </span>
        </div>
      </Backdrop>
    </div>
  );
}
