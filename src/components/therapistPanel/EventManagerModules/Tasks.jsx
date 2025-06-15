import React, { useEffect, useState } from 'react'
import ToggleButton from './ToggleButton'
import Task from './TasksModules/Task'

const Tasks = ({tasks,setreload,reload}) => {
 
  const [activeTab,setActiveTab]=useState("Todo")
  return (
    <div className='col gap-5 dark:text-neutral-300 p-3 '>
      <div className="">
      <ToggleButton name={"tasks"}/>
      </div>
    <div className='px-28 max-lg:p-2 col gap-4  '> 
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
          {tasks.length<=1&&tasks?.map((task)=><Task reload={reload} setreload={setreload} key={task.id} task={task} />)}
          </>
        }
      </div>
    </div>
    </div>
  )
}

export default Tasks