"use client"
import React, { useState } from 'react'
import PaidOut from './PaymentsModule/PaidOut'

const Payments = () => {
    const [activeTab,setActiveTab] = useState("paid out")
  return (
    <div className="w-full relative max-lg:m-0 m-4  p-4 max-lg:p-0 bg-zinc-50 dark:bg-zinc-800 rounded-2xl max-lg:rounded-xl ">
        <div className='flex dark:text-neutral-300  border-b border-zinc-400 gap-4'>
<span onClick={()=>setActiveTab("paid out")} className={`${activeTab=="paid out"&&" !text-blue border-b-2 border-blue"}  p-2 cursor-pointer pb-2`}>Paid Out</span>
<span onClick={()=>setActiveTab("in progress")} className={`${activeTab=="in progress"&&"!text-blue border-b-2 border-blue"} p-2 cursor-pointer pb-2`}>In Progress</span>
        </div>
        <PaidOut/>
        </div>
  )
}

export default Payments