import { useState } from "react"
import { Link } from "react-router-dom"
import { KeyboardArrowLeft } from "@mui/icons-material"
import { Button } from "@mui/material"
import Task from "../../../EventManagerModules/TasksModules/Task"
const ClientTasks = () => {
    const [activeTab,setActiveTab]=useState("Todo")
  return (
    <div className="col p-6 gap-6 w-full h-[calc(100vh-96px)] overflow-auto">
    <div className="flex w-full p-2 justify-between border-b border-zinc-400">
      <h2 className="title-2"> <Link to={"/therapist-dashboard/TreatmentFiles/meetinglist"}><KeyboardArrowLeft className="!w-10 !h-10 cursor-pointer" /> </Link>Client Tasks</h2>

      <div className="flex gap-2">
 <Link to={"/therapist-dashboard/TreatmentFiles/editpationreport"}>
 <Button className="!bg-blue dark:!bg-blue-50 !rounded-xl dark:!text-deepBlue !text-base !px-5 !normal-case !py-2 !text-white">
     Add Task
      </Button>
 </Link>  
    </div>
    </div>
    <div className='col gap-5 dark:text-neutral-300 '>
    <div className='px-32 col gap-4  '> 
      <div className='w-full leading-10 text-md flex border-b font-medium border-zinc-400  gap-3'>
        <span onClick={()=>setActiveTab("Todo")} className={` cursor-pointer ${activeTab=="Todo"&&" border-b-[3px] border-blue"}`}>To do</span>
        <span onClick={()=>setActiveTab("Completed")} className={`cursor-pointer ${activeTab=="Completed"&&"& border-b-[3px] border-blue"}`}>Completed</span>
      </div>
      <div className='col gap-8 overflow-y-auto h-[calc(100vh-380px)]'>
        {
          activeTab=="Completed"&&<><Task done={true}/></>
        }
         {
          activeTab=="Todo"&&<><Task/><Task/></>
        }
      </div>
    </div>
    </div>
    </div>
  )
}

export default ClientTasks