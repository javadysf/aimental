import { useEffect, useState } from "react"

const LinearScale = ({id,handleQuestionChange,answerConfig}) => {
  const [options,setOptions] = useState({from:answerConfig?answerConfig?.from:"",
    to:answerConfig?answerConfig?.to:"",
    start_lable:answerConfig?answerConfig?.start_lable:"",
    end_lable:answerConfig?answerConfig?.end_lable:""
  })
console.log(answerConfig);
  // useEffect(()=>{
  //   answerConfig&&
  // setInputs(Object.values(answerConfig).map((obj)=>({ value:obj})))
  // setOptions(Object.values(answerConfig).map((obj)=>( obj)))
  // },[])
const AnswerConfigs = (e)=>{
  setOptions({...options,[e.target.name]:e.target.value})
  handleQuestionChange(id,options,"answer_config")
}
useEffect(()=>{
  handleQuestionChange(id,options,"answer_config")
},[options])
  return (
    <div className='col gap-4 dark:text-neutral-300'>   
     <span className='flex gap-2 center justify-between '>
   <input name="from" value={options?.from} placeholder="from" onChange={(e)=>AnswerConfigs(e)} className='border rounded-xl border-neutral-800 p-2 w-24 dark:bg-neutral-800 dark:border-neutral-300'/>  <h6>to</h6> 
   <input name="to"   value={options?.to} placeholder="to" onChange={(e)=>AnswerConfigs(e)} className='border rounded-xl border-neutral-800 p-2 w-24 dark:bg-neutral-800 dark:border-neutral-300'/>  
        </span>
        <span className='flex w-full '>
        <input
      placeholder="Start Lable (Optional)"
      className="dark:placeholder-zinc-400 dark:bg-neutral-800 dark:border-neutral-300 placeholder-zinc-600 p-2 self-center border-b border-zinc-600"
      type="text"
      value={options.start_lable}
      name="start_lable"
      onChange={(e)=>AnswerConfigs(e)}
    />
        </span>
        <span className='flex'>
        <input
        value={options.end_lable}
      placeholder="End Lable (Optional)"
      className="dark:placeholder-zinc-400 placeholder-zinc-600 text-base p-2 self-center border-b border-zinc-600 dark:bg-neutral-800 dark:border-neutral-300"
      type="text"
      name="end_lable"
      onChange={(e)=>AnswerConfigs(e)}
    />
        </span>

    </div>
  )
}

export default LinearScale