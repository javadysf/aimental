import { Close } from "@mui/icons-material";
import { Backdrop } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Quill from "../../../therapistPanel/EventManagerModules/AddAppointmentModules/Quill";
import FileUploader from "./FileUploader";
import {  PostNewTicket } from "../../../../core/services/api/Tickets/Tickets";
import { toast } from "react-toastify";

const NewTicketMenu = ({ open, setOpen,TicketPriority,Ticketdepartment }) => {
  const [newTicket,setNewTicket]=useState({priority:"",subject:"",department:"",topic:"",text:""})
  const quillRef = useRef(null);

  const getText = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      setNewTicket({...newTicket,text:editor.getText()})
    }
  };

  const sendTicket = async() => {
   const res = await PostNewTicket(newTicket);
   console.log(res);
   res?.status>=400&&toast.error("An error occurred while sending Ticket", {
    position: "top-left",
    autoClose: 3000,
    type: "error",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
   setOpen(!open)
  }

  useEffect(() => {
  }, []);

  return (
    <Backdrop open={open}>
      <div className="w-[450px] text-[1em] gap-3 p-4 bg-white rounded-2xl col">
        <span className="flex   justify-between">
          <h4>New Ticket</h4>
          <Close className="cursor-pointer" onClick={() => setOpen(false)} />
        </span>
        <hr className=" text-zinc-400" />
        <select  onClick={(e)=>setNewTicket({...newTicket,priority:e.target.value})} className=" rounded-xl text-base font-medium  bg-zinc-50 p-2 border border-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 border-zinc-400">
          <option disabled selected>
            {"Priority"}
          </option>
          {TicketPriority &&
            TicketPriority.map(({ id, text }) => (
              <option key={id} value={id}>
                {text}
              </option>
            ))}
        </select>
        <input
          className="rounded-xl text-base font-medium  bg-zinc-50 p-2 border border-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 border-zinc-400"
          placeholder={"Subject"}
          value={newTicket.subject}
          type="text"
          onChange={(e)=>setNewTicket({...newTicket,subject:e.target.value})}
        />
               <select onClick={(e)=>setNewTicket({...newTicket,department:e.target.value})} className=" rounded-xl text-base font-medium  bg-zinc-50 p-2 border border-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 border-zinc-400">
          <option  disabled selected>
            {"Department"}
          </option>
          {Ticketdepartment &&
            Ticketdepartment.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
        </select>
        <input
          className="rounded-xl text-base font-medium  bg-zinc-50 p-2 border border-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 border-zinc-400"
          placeholder={"Enter Topic"}
          value={newTicket.topic}
          type="text"
          onChange={(e)=>setNewTicket({...newTicket,topic:e.target.value})}
        />
        <span className="border border-zinc-400 rounded-xl">
          <Quill getText={getText} quillRef={quillRef}   />
        </span>
        <FileUploader />
        <span className="flex justify-between gap-2 w-full">
          <span
            onClick={() => setOpen(false)}
            className="white-button w-full text-center"
          >
            Cancel
          </span>
          <span onClick={sendTicket} className="blue-button w-full text-center">Send Ticket</span>
        </span>
      </div>
    </Backdrop>
  );
};

export default NewTicketMenu;
