import { useEffect, useState } from 'react';
import TagModule from '../../../common/TagModule'
import ActionMenu from './ActionMenu'
import { getTasksDetails } from '@/core/services/api/EventManager/EventManager';


const Task = ({task,done,setreload,reload}) => {
  const [TaskDetails,setTaslDetails]= useState()

  useEffect(()=>{
    const getTaskHandler = async()=>{
      setTaslDetails(await getTasksDetails(task?.id))
     }
     getTaskHandler();
  },[])
console.log(TaskDetails);
  return (
    <div className='flex w-full justify-between'>
      <div className='flex gap-2 '>
        <div className=' !items-start'>
   <input type='checkbox' className=' w-3 h-3' checked={done} />
        </div>
<div className='col gap-2'>
<h2 className={`${done&&"line-through"} text-md font-medium`}>{task?.title}</h2>
<h5 className='text-base font-normal text-zinc-700 dark:text-zinc-400 '>{task?.description}
</h5>
<div className='flex gap-2'>
  {
task?.tags?.map((item)=> <TagModule key={item.id} css={"!h-7"} title={item.title}/>)
  
  }
</div>
</div>
      </div>
  <ActionMenu reload={reload} task={task} setrefresh={setreload} details={TaskDetails}  />
    </div>
  )
}

export default Task