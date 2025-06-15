"use client"
import { useEffect, useState } from "react";
import EMHeader from "@/components/therapistPanel/EventManagerModules/EMHeader";
import Tasks from "@/components/therapistPanel/EventManagerModules/Tasks";
import AddEventSpeedDial from "@/components/therapistPanel/EventManagerModules/AddEventSpeedDial";
import MobileAddAppiontment from "@/components/therapistPanel/EventManagerModules/AddAppointmentModules/MobileAddAppiontment";
import MobileAddTask from "@/components/therapistPanel/EventManagerModules/AddAppointmentModules/MobileAddTask";
import MobileAvailability from "@/components/therapistPanel/EventManagerModules/EMHeaderModules/MobileAvailability";
import { getTasks } from "@/core/services/api/EventManager/EventManager";




const TaskPage = () => {
  const [tasks,settasks]= useState([])
  const [reload, setreload] = useState(false);
  console.log(tasks);
  useEffect(()=>{
    const getTasksHandler =async()=>{
      const res = await getTasks()
      console.log(res);
      settasks(res?.results?.reverse());
    }
 getTasksHandler()
  },[reload])

  const [CurrentPage,SetCurrentPage] = useState("Main")

  return (
    <div className="w-full relative max-lg:m-0 m-4  p-4 max-lg:p-0 bg-zinc-50 dark:bg-zinc-800 rounded-2xl max-lg:rounded-xl ">
      {CurrentPage=="AddAppointment"&&<MobileAddAppiontment setreload={setreload} SetCurrentPage={SetCurrentPage} />}
      {CurrentPage=="AddTask"&&<MobileAddTask setreload={setreload}  SetCurrentPage={SetCurrentPage} />}
      {CurrentPage=="Available"&&<MobileAvailability SetCurrentPage={SetCurrentPage} />}
       <EMHeader setreload={setreload} /> 
      {
       CurrentPage=="Main"&& <>
        <Tasks reload={reload} setreload={setreload} settasks={settasks} tasks={tasks}/>
      {window.innerWidth<1000&& <AddEventSpeedDial SetCurrentPage={SetCurrentPage} />}
      </>
     
      }
    </div>
  );
};
export default TaskPage;