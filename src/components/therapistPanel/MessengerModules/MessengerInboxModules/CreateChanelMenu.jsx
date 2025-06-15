import { TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import SearchIcon from "@mui/icons-material/SearchRounded";
import { useState } from 'react';
import ContactList from './ContactList';



const CreateChanelMenu = ({open,close}) => {

  const [display,setDisplay] = useState(true)

  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
    
  >
    {display?
    <div className="bg-white col rounded-3xl center gp8 ">
    <div className='col center '>
 <span className="bg-blue-50 rounded-full w-20 h-20 text-blue gp4 " >
 <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
<path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
<path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1z"/>
</svg>
 </span>
<h4 className='text-neutral-800'>Choose Image</h4>
    </div>
<span className='w-full'>
 <TextField id="outlined-basic" fullWidth={true} label="GroupName" variant="outlined" />
</span>
 <div className='flex gap-4 justify-between'>
<button className='white-button' onClick={close} >Cancel</button>
<button className='blue-button'onClick={()=>setDisplay(!display)} >Next</button>
 </div>
  </div>:
     <div className="bg-white col rounded-3xl center gp8 ">
        <span className="flex h-10 border-zinc-600 gap-2 border-[1px] w-full text-neutral-800 text-medium rounded-xl py-1 px-4">
          <SearchIcon
            sx={{ width: "24px", height: "24px", alignSelf: "center" }}
            />{" "}
          <input className="outline-none w-full" placeholder="Search" />
        </span>
            <ContactList/>
 <div className='flex gap-4 justify-between'>
<button className='white-button' onClick={()=>{setDisplay(!display) }} >Back</button>
<button className='blue-button' >Create</button>
 </div>
      </div>}
   
  </Backdrop>
  )
}

export default CreateChanelMenu