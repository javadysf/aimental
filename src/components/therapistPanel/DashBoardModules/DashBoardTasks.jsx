import React, { useState } from 'react'
import ToggleButton from '../EventManagerModules/ToggleButton'
import Task from '../EventManagerModules/TasksModules/Task'

const Tasks = ({tasks}) => {
  console.log(tasks);
  const [activeTab,setActiveTab]=useState("Todo")
  return (
    <div className='z-1 p-6 bg-zinc-50 max-lg:p-2 col gap-4 rounded-2xl lg:w-1/2 dark:bg-zinc-800  '> 
      <div className='w-full leading-10 text-md flex border-b font-medium border-zinc-400 gap-3'>
        <span onClick={()=>setActiveTab("Todo")} className={` cursor-pointer ${activeTab=="Todo"&&" border-b-[3px] border-blue"}`}>To do</span>
        <span onClick={()=>setActiveTab("Completed")} className={`cursor-pointer ${activeTab=="Completed"&&"& border-b-[3px] border-blue"}`}>Completed</span>
      </div>
      <div className='col gap-8 overflow-y-scroll max-lg:h-[calc(100vh-250px)] h-[calc(100vh-380px)]'>
        {
          activeTab=="Completed"&&<><Task done={true}/></>
        }
         {
          activeTab=="Todo"&&<>
          {tasks.length<=1&&tasks?.reverse().map((task)=><Task key={task.id} task={task}/>)}
          </>
        }
      </div>
    </div>
  )
}

export default Tasks