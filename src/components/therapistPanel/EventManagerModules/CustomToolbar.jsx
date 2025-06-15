import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import ToggleButton from './ToggleButton';
const CustomToolbar  = (toolbar) => {
  const [alignment, setAlignment] = useState('events');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  console.log(toolbar);
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
    console.log(event);
  };

  const goToCurrent = () => {
    toolbar.onNavigate('TODAY');
  };
    const goToDayView = () => {
      toolbar.onView('day');
    };
  
    const goToWeekView = () => {
      toolbar.onView('week');
    };
  
    const goToMonthView = () => {
      toolbar.onView('month');
    };
    function checkTime(e) {
      if (e.target.value === "day") {
        goToDayView()
      }
      if (e.target.value === "week") {
        goToWeekView()
      }
      if (e.target.value === "month") {
        goToMonthView()
      }
    }

  return (
    
    <div className="max-lg:col p-4 ">
      <div className='flex gap-4 justify-between max-lg:justify-center pb-4 dark:text-neutral-100'>
      <div className='flex gap-2'>
  <ToggleButton/>
      <button className="text-blue rounded-2xl border border-neutral-800 dark:border-neutral-100 px-6 dark:text-blue-300 py-[10px]" onClick={goToCurrent}>Today</button>
      </div>
      <div className="flex gap-4 max-lg:hidden">
      <button className="border rounded-2xl px-4 py-[10px] w-12 h-12" onClick={goToBack}>{"<"}</button>
      <h4 className="flex center font-semibold text-2xl">
     {toolbar.label}
      </h4>
      <button className="border rounded-2xl px-4 py-[10px] w-12 h-12 " onClick={goToNext}>{">"}</button>
      </div>
      <div className='flex gap-2'>
      <select className="dark:bg-zinc-800 cursor-pointer border rounded-2xl px-4 py-[10px]" onChange={checkTime}>
   <option  >week</option>
   <option>day</option>
   <option selected >month</option>
      </select>
      <div className='max-lg:hidden border cursor-pointer w-12 px-4 py-[10px] flex center rounded-2xl '>
<SettingsIcon color='primary' />
      </div>
      </div>
      </div>
      <div className='lg:hidden center' >
      <div className="flex gap-4 justify-between mb-4 dark:text-neutral-300">
      <button className="flex center border rounded-2xl  py-[10px] text-2xl w-10 h-10" onClick={goToBack}>{"<"}</button>
      <h4 className="flex center font-semibold text-lg">
     {toolbar.label}
      </h4>
      <button className="flex center border rounded-2xl  py-[10px] text-2xl w-10 h-10" onClick={goToNext}>{">"}</button>
      </div> 
      </div>
    </div>
  );
};


const EventComponent = ({ event }) => {
  console.log(event.time);
  return (
    <div className='bg-[#C4DBF9] text-[#1C274F] text-sm font-medium rounded-2xl p-2 '>
      <div className='flex gap-2'>
<span className=''>{event.starttime}</span> - 
<span className=''>{event.endtime}</span>
      </div>
      <h4>{event.title}</h4>
    </div>
  );
};

export  {CustomToolbar,EventComponent} ;