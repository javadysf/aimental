import React from 'react'
import HistoryDataGrid from './ClientHistoryModules/HistoryDataGrid'

const ClientHistory = () => {
  return (
    <div className="w-full col m-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl gap-6 h-[calc(100vh-96px)]  ">
    <div className='flex justify-between items-center gap-2 '>
    <h2 className='title-2 '>Therapis list</h2>
  </div>
    <hr className=" text-zinc-400"/>
        <HistoryDataGrid/>
        </div>
  )
}

export default ClientHistory