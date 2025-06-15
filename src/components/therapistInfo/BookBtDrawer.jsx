"use client"
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import DropDownItems from '../common/dropdownItems/DropDownItems';
import TagModule from '../common/TagModule';
import BookNowButton from '../common/BookNowButton';
import Link from 'next/link';
import { useTheme } from 'next-themes';


export default function DrawerBasic() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <div  className='flex w-full '>
      <BookNowButton css={"h-12 w-full "} onClick={toggleDrawer(true)} />
      <Drawer   open={open} onClose={toggleDrawer(false)} anchor='bottom' >
        <Box
          role="presentation"
          onKeyDown={toggleDrawer(false)}
       sx={{backgroundColor:theme=='dark'?"#323232":"#f6f6f6",height:"100%"}}
        >
          <div className={`col gap-2 h-max ${theme=='dark'?"bg-zinc-800":"bg-neutral-100"} ${theme=='dark'&&"text-neutral-100"} max-lg:w-full p-2`}>
        <h1 className= "font-semibold dark:text-blue text-xl">Book Session</h1>
        <label>Insurance</label>
        <div className='border rounded-3xl p font-medium text-xs'>
        <DropDownItems itemName={"Gender"}/>
        </div>
        <h4>Next availabilities</h4>
        <h4 className="font-semibold" >Wed , june 26</h4>
        <span className="flex flex-wrap justify-between gap-3">
          <TagModule title={"4:30 PM"} css={"p-2 w-24 h-12 content-center !text-sm text-center"} />
          <TagModule title={"4:30 PM"} css={"p-2 w-24 h-12 content-center !text-sm text-center"} />
          <TagModule title={"4:30 PM"} css={"p-2 w-24 h-12 content-center !text-sm text-center"} />
          <TagModule title={"4:30 PM"} css={"p-2 w-24 h-12 content-center !text-sm text-center"} />
          <TagModule title={"4:30 PM"} css={"p-2 w-24 h-12 content-center !text-sm text-center"} />
          <TagModule title={"4:30 PM"} css={"p-2 w-24 h-12 content-center !text-sm text-center"} />
        </span>
          <Link href={"/therapist-calendar"} className={`border ${theme=='dark'&&"border-neutral-100"} rounded-[16px] p-1 text-blue h-10 text-center`}>
          <span className={` ${theme=='dark'&&"text-neutral-100" }`}>More availabilities</span> </Link>
          <button className={`w-80 max-lg:w-full h-10 p-4 gap-2 font-medium text-md flex center max-lg:w-56 text-white bg-blue ${theme=='dark'&&"bg-blue-200"} rounded-[16px]`}>
      <span className={`${theme=='dark'&&"text-deepBlue" }`}>Book Now</span> 
         </button>
    </div>
        </Box>
      </Drawer>
    </div>
  );
}