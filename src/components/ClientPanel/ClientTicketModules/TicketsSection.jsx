import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TicketShortView from "./TicketShortView";
import NewTicketMenu from "./TicketSectionModules/NewTicketMenu";
import { useSelector } from "react-redux";


function CustomTabPanel(props) {
  
  const { children, value, index, ...other } = props;
  return (
    <div
      className="col gap-2"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: "5px" }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TicketsSection({k,showTicket,setShowTicket,Ticketdepartment,TicketPriority,display,setdisplay}) {


  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const tickets = useSelector((state) => state.TicketsList).tickets;

  const [open,setOpen] = useState(false)

  const OpenTickets = ()=>{
    const filteredItems = tickets.filter((item) =>
      item.closed==false
    );
    setdisplay(filteredItems)
  }
    const ClosedTickets = ()=>{
      const filteredItems = tickets.filter((item) =>
        item.closed==true
      );
      setdisplay(filteredItems)}

useEffect(()=>{
setdisplay(tickets)
},[tickets])

  return (
    <div className={`col lg:w-[370px] justify-between h-full dark:text-neutral-300 max-lg:${showTicket&&"hidden"} `}>
      <Box sx={{ width: "100%", fontFamily: "!poppins" }}  >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ textTransform: "capitalize", fontFamily: "!poppins" }}
              label="All" className="dark:text-neutral-300"
              {...a11yProps(0)}
              onClick={()=>setdisplay(tickets)}
            />
            <Tab
              sx={{ textTransform: "capitalize", fontFamily: "!poppins" }}
              className="dark:text-neutral-300"
              label="In Progress"
              {...a11yProps(1)}
              onClick={OpenTickets}
            />
            <Tab
              sx={{ textTransform: "capitalize", fontFamily: "!poppins" }}
              label="Resolved"
               className="dark:text-neutral-300"
              {...a11yProps(2)}
              onClick={ClosedTickets}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>

       
           { display?.map(ticket =>  <TicketShortView key={ticket.id} ticket={ticket} onClick={()=>setShowTicket(true)}  />)}
       
        
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        { display?.map(ticket =>  <TicketShortView key={ticket.id} ticket={ticket} onClick={()=>setShowTicket(true)}  />)}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        { display?.map(ticket =>  <TicketShortView key={ticket.id} ticket={ticket} onClick={()=>setShowTicket(true)}  />)}
        </CustomTabPanel>
      </Box>
      <span className="col gap-3 ">
        <hr className="text-zinc-400" />
        <div className="px-2">
          <span onClick={()=>setOpen(true)} className="blue-button flex gap-2 center w-full h-12 ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
            </svg>{" "}
            New Ticket
          </span>
        <NewTicketMenu Ticketdepartment={Ticketdepartment} TicketPriority={TicketPriority} open={open} setOpen={setOpen} />
        </div>
      </span>
    </div>
  );
}
