import React from 'react'
import TreatmentDataGrid from '../TreatmentFilesModule/TreatmentDataGrid'

const DashBoardTreatment = () => {
  return (
        <div className='col bg-zinc-50 rounded-2xl dark:bg-zinc-800 max-lg:items-start gap-4 border-b dark:border-zinc-600 border-zinc-400 p-6 '>
<h2 className='title-2  max-lg:!text-base'>Recent Treatment File</h2>
<hr className='text-zinc-400' />
        <TreatmentDataGrid/>
    </div>
  )
}

export default DashBoardTreatment