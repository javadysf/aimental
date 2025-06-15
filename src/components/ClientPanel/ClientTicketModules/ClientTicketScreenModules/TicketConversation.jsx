import { Backdrop } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ReceivedMessage from "../../../therapistPanel/MessengerModules/ChatScreenModules/ReceivedMessage";
import TypeBar from "../../../therapistPanel/MessengerModules/ChatScreenModules/TypeBar";
import maleIcon from "../../../../assets/img/therapistslist/male.png";
import { KeyboardArrowLeft } from "@mui/icons-material";
import SendedTicket from "./SendedTicket";
import Image from "next/image";
const TicketConversation = ({setShowTicket,TicketDetails}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="col justify-between h-full">
      <div className="col max-lg:flex-row-reverse max-lg:justify-between max-lg:py-2 gap-4 py-6">
        <span
          onClick={handleOpen}
          className=" mx-4  center white-button text-center self-end h-full !w-fit "
        >
          Details
        </span>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <div className="col dark:bg-neutral-800 dark:text-neutral-100 gap-5 text-neutral-800 bg-white  text-sm border border-zinc-400 rounded-2xl p-2">
            <span className=" flex justify-end font-normal ">
              <CloseIcon className="cursor-pointer" onClick={handleClose} />
            </span>
            <div className="w-full col gap-4 center">
              <Image
              alt="avatar"
              width={64}
              height={64}
                className="w-16 h-16 self-center rounded-full"
                src={maleIcon}
              />
              <h4 className="font-semibold">Support no.42</h4>
              <div className="col gap-2">
              <span className="flex gap-2 w-44 center">
                <h4 className="text-zinc-700 font-medium">Ticket ID:</h4>{" "}
                <h4 className="font-medium text-neutral-800 text-xs">{TicketDetails?.id}</h4>
              </span>
              <span className="flex gap-2 w-44 center">
                <h4 className="text-zinc-700 font-medium">Ticket ID:</h4>{" "}
                <h4 className="font-medium text-neutral-800">Reg-A-001</h4>
              </span>
              <span className="flex gap-2 w-44 center">
                <h4 className="text-zinc-700 font-medium">Ticket ID:</h4>{" "}
                <h4 className="font-medium text-neutral-800">Reg-A-001</h4>
              </span>
              <span className="flex gap-2 w-44 center">
                <h4 className="text-zinc-700 font-medium  ">Status:</h4>{" "}
                <h4 className="font-medium text-neutral-800">Reg-A-001</h4>
              </span>
              </div>
            <span className="blue-button !w-fit" >View Frequently Asked Questions</span>
            </div>
          </div>
        </Backdrop>
        <span className="  lg:hidden flex gap-2 center" onClick={()=>setShowTicket(false)}><KeyboardArrowLeft className="!w-8 !h-8" /> Ticket Title </span>
        <hr className="text-zinc-400 max-lg:hidden " />
      </div>
      <div className="  col p-4">
        {
          TicketDetails?.messages?.map(message=><SendedTicket key={message.id} ticketText={message.text}   />)
        }
        
        <ReceivedMessage />
      </div>
      <div className="p-4">
        <hr className="text-zinc-400 pb-4 " />

        <TypeBar />
      </div>
    </div>
  );
};

export default TicketConversation;
