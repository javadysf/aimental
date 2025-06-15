import { useState } from 'react';
import SwitchButton from '../../../EventManagerModules/EMHeaderModules/AvailabilityModules/SwitchButton';

const FileUpload = ({id,handleQuestionChange}) => {
  const [allow,setallow] = useState(false)
  const [options,setOptions] = useState({allowFile:1,
    maxNum:1,
    maxSize:"10 MB",
  })
  const handleAllow = ()=>{
    setallow(!allow)
    setOptions({...options,allowFile:!allow})  }
    const AnswerConfigs = (e)=>{
      setOptions({...options,[e.target.name]:e.target.value})
      handleQuestionChange(id,options,"answer_config")
    }
  return (
    <div className='col gap-4 dark:text-neutral-300  '>   
     <span className='flex gap-6  center justify-between  '>
        <h5>Allow only specific file types</h5>
        <SwitchButton checked={allow}  handleToggle={handleAllow}/>
        </span>
        <span className='flex gap-6 center justify-between '>
        <h5>Maximum number of files</h5>
    <select onChange={(e)=>AnswerConfigs(e)} name="max_Num" className='border rounded-xl border-neutral-800 p-2 w-24 dark:bg-neutral-800 dark:border-neutral-300'>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        </select>  
        </span>
        <span className='flex gap-6 center justify-between '>
        <h5>Maximum file size</h5>
    <select   name="max_Size" onChange={(e)=>AnswerConfigs(e)} className='border rounded-xl border-neutral-800 dark:bg-neutral-800 dark:border-neutral-300 p-2 w-24'>
        <option>10 MB</option>
        <option>2</option>
        <option>3</option>
        </select>  
        </span>

    </div>
  )
}

export default FileUpload