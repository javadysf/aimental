"use client"
import { useState } from "react"
import Task from "../../therapistPanel/EventManagerModules/TasksModules/Task"
const ClientTasks = () => {
    const [activeTab,setActiveTab]=useState("Todo")
  return (
<div className="col gap-6  bg-zinc-50 px-6 py-4 rounded-2xl dark:bg-zinc-800 dark:text-neutral-300">
    
      <div className='w-full leading-10 text-md flex border-b font-medium border-zinc-400  gap-3'>
        <span onClick={()=>setActiveTab("Todo")} className={` cursor-pointer ${activeTab=="Todo"&&" border-b-[3px] border-blue"}`}>To do</span>
        <span onClick={()=>setActiveTab("Completed")} className={`cursor-pointer ${activeTab=="Completed"&&"& border-b-[3px] border-blue"}`}>Completed</span>
      </div>
      <div className='col gap-8 overflow-y-auto '>
        {
          activeTab=="Completed"&&<><Task done={true}/></>
        }
         {
          activeTab=="Todo"&&<><Task/><Task/></>
        }
      </div>
    </div>

  )
}

export default ClientTasks