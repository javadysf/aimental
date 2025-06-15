"use client"
import { useEffect, useState } from "react";
import Calendar from "./EventManagerModules/Calendar";
import EMHeader from "./EventManagerModules/EMHeader";
import AddEventSpeedDial from "./EventManagerModules/AddEventSpeedDial";
import MobileAddAppiontment from "./EventManagerModules/AddAppointmentModules/MobileAddAppiontment";
import MobileAddTask from "./EventManagerModules/AddAppointmentModules/MobileAddTask";
import MobileAvailability from "./EventManagerModules/EMHeaderModules/MobileAvailability";
import { getEvents } from "../../core/services/api/EventManager/EventManager";



const EventManager = () => {

  const [CurrentPage,SetCurrentPage] = useState("Main")
  const [reload, setreload] = useState(false);
  const [events,setEvents] = useState([])

  const convertDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth();
    const day = dateObject.getDate();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    return new Date(year, month+1, day, hours, minutes)
  };

  const getEventsHandler =async()=>{
    const res = await getEvents();
    if(res.length>=1)
    setEvents(res?.map((event,index)=>({start:convertDate(event.start_datetime),end:convertDate(event.end_datetime),title:event.base.title})))
  }
useEffect(()=>{
  getEventsHandler()
},[reload])
  return (
    <div className="w-full relative max-lg:m-0 m-4  p-4 max-lg:p-0 bg-zinc-50 dark:bg-zinc-800 rounded-2xl max-lg:rounded-xl ">
      {CurrentPage=="AddAppointment"&&<MobileAddAppiontment setreload={setreload} SetCurrentPage={SetCurrentPage} />}
      {CurrentPage=="AddTask"&&<MobileAddTask SetCurrentPage={SetCurrentPage} />}
      {CurrentPage=="Available"&&<MobileAvailability SetCurrentPage={SetCurrentPage} />}
       <EMHeader setreload={setreload} /> 
      {
       CurrentPage=="Main"&& <>
        <Calendar  events={events} />
       
      {window.innerWidth<1000&& <AddEventSpeedDial SetCurrentPage={SetCurrentPage} />}
      </>
     
      }
    </div>
  );
};

export default EventManager;
