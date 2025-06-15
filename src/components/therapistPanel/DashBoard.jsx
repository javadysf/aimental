"use client"
import { useEffect, useState } from "react"
import DashBoardCalendar from "./DashBoardModules/DashBoardCalendar"
import DashBoardInfo from "./DashBoardModules/DashBoardInfo"
import DashBoardTasks from "./DashBoardModules/DashBoardTasks"
import DashBoardTreatment from "./DashBoardModules/DashBoardTreatment"
import MeetingDetails from "./DashBoardModules/MeetingDetails"
import { getTasks } from "@/core/services/api/EventManager/EventManager"


const DashBoard = () => {
  
  const [tasks,settasks]= useState([])
  const getTasksHandler =async()=>{
    const res = await getTasks()
    settasks(res.results);
  }
console.log(tasks);
  useEffect(()=>{
 getTasksHandler()
  },[])

  const [showDetails,setShowDetails] = useState(false)
  return (
    <>
    { !showDetails&&
    <div className='col dark:bg-neutral-800 dark:text-neutral-300 p-8 max-lg:p-0 w-full gap-8 text-neutral-800 h-[calc(100vh-96px)] overflow-y-auto	'>
     
      <DashBoardInfo/>
      <div className="flex max-lg:col gap-4">
      <DashBoardCalendar setShowDetails={setShowDetails}/>
      <DashBoardTasks tasks={tasks}/>
      </div>
      <DashBoardTreatment/>
    </div>
    }
    {showDetails&&<MeetingDetails setShowDetails={setShowDetails} />}

    </>
  )
}

export default DashBoard