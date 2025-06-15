"use client"
import TreatmentDataGrid from './TreatmentFilesModule/TreatmentDataGrid'
import SearchInput from '../common/SearchInput'
import ActionMenu from './TreatmentFilesModule/TreatmentDataGridModules/ActionMenu'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import InventoryIcon from '@mui/icons-material/Inventory';
import TvIcon from '@mui/icons-material/DesktopWindows';
import Link from 'next/link'

const TreatmentFiles = () => {
  const menuItems = [
   {id:1,item: <Link href={"/therapist/TreatmentFiles/pationreport"} className='flex gap-2 ' > <VisibilityIcon /> View </Link>},
  {id:2,item:  <Link href={"/therapist/TreatmentFiles/editpationreport"} className='flex gap-2 ' > <ModeEditIcon /> Edit </Link>},
    {id:3,item:<div  className='flex gap-2 ' > <InventoryIcon /> Archive </div>},
    {id:4,item:<Link  href={"/therapist/TreatmentFiles/meetinglist"} className='flex gap-2 ' > <TvIcon /> Meeting </Link>},
  {id:5,item:  <div  className='flex gap-2 ' >     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-ruled-fill" viewBox="0 0 16 16">
    <path d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7H6v2h8zm0 3H6v2h8zm0 3H6v3h6a2 2 0 0 0 2-2zm-9 3v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2z"/>
  </svg>  Questionnaire </div>},

];
  return (
    <div className="w-full col m-4 max-lg:m-0 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl gap-6 h-[calc(100vh-96px)]  ">
<div className='flex max-lg:col justify-between items-center max-lg:items-start gap-2 border-b dark:border-zinc-600 border-zinc-400 pb-4 '>
  <div className='w-1/5 max-lg:w-full max-lg:flex max-lg:justify-between'>
<h2 className='title-2  max-lg:!text-base'>Treatment File</h2>
<ActionMenu css={"lg:hidden"} />
  </div>
<div className='w-2/5 max-lg:w-auto' >
<SearchInput/>
</div>
<span className='w-fit white-button w-44 dark:text-blue-300 max-lg:hidden'> Treatment File Category</span>
<span className='!w-fit blue-button w-44 dark:bg-blue-300 dark:text-deepBlue max-lg:hidden'> Add new file</span>
<ActionMenu css={" max-lg:hidden "}  menuItems={menuItems} />
</div>
        <TreatmentDataGrid/>
    </div>
  )
}

export default TreatmentFiles