
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Close, MoreHoriz } from "@mui/icons-material";
import {
  DeleteQuestionnaire,
  EditQuestionnaire,
  UpdateQuestionnaire,
} from "../../../../core/services/api/Questionnaire/questionnaire";
import AiLogo from "../../../../assets/img/aimental.svg"
import { Backdrop } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import ContactList from "../../MessengerModules/MessengerInboxModules/ContactList";
import { useEffect, useState } from "react";
import { getClients } from "../../../../core/services/api/Users/Users";
import Link from "next/link";
import Image from "next/image";

export default function FormMenu({ id, setrefresh, refresh,item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showContacts, setShowContacts] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [clientsList, setClientsList] = useState(false);
  const [updatedQuestionnaire, setupdatedQuestionnaire] = useState({"assign_to":item?.assign_to,title:item?.title});
console.log(item);
  const getClientsListHandler =async()=>{
    setClientsList(await getClients())
  }
const UpdateAssigned =async()=>{
  setShowContacts(false)
  await EditQuestionnaire(id,updatedQuestionnaire)
}
console.log(updatedQuestionnaire);

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
    const res = await DeleteQuestionnaire(id);
    setrefresh(!refresh);
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
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="flex gap-2">
          <EditIcon />
          <Link href={`/therapist/questionnaires/edit/${id}`}>
            Edit
          </Link>
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
          <h4>The item will be removed from the questionnaire list.</h4>
          <span className="flex w-full gap-2 justify-between" >
          <button className="white-button w-full" onClick={()=>setShowWarning(false)} > Cancel </button>
          <button onClick={()=>{handleDelete();setShowWarning(false)}} className="white-button !bg-[#B3261E] w-full text-white" > Delete </button>
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
          <ContactList questionnaire={updatedQuestionnaire}  setquestionnaire={setupdatedQuestionnaire} isUpdate={true} />
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
    </div>
  );
}
