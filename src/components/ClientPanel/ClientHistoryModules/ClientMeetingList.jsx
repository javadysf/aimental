import React from 'react'
import ClientMeetingDataGrid from './ClientMeetingListModules/ClientMeetingDataGrid'
import { KeyboardArrowLeft } from '@mui/icons-material'
// import { Link } from 'react-router-dom'
import Link from "next/link"

const ClientMeetingList = () => {
  return (
    <div className="w-full col m-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl gap-6 h-[calc(100vh-96px)]  ">
    <div className='flex items-center gap-2 '>
        <Link href={"/client/history"} >
        <KeyboardArrowLeft className=' cursor-pointer !w-12 !h-11'/>
        </Link>
    <h2 className='title-2 '>Meeting list</h2>
  </div>
    <hr className=" text-zinc-400"/>
        <ClientMeetingDataGrid/>
        </div>
  )
}

export default ClientMeetingList