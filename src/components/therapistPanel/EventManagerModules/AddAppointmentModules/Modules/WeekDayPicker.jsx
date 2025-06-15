import React, { useEffect, useState } from 'react'

const WeekDayPicker = ({onChange}) => {

  const [days,setDays] = useState([
        { key: 'sunday', label: 'S',selected: false},
        { key: 'monday', label: 'M',selected: false },
        { key: 'tuesday', label: 'T',selected: false },
        { key: 'wednesday', label: 'W',selected: false },
        { key: 'thursday', label: 'T',selected: false },
        { key: 'friday', label: 'F',selected: false },
        { key: 'saturday', label: 'S',selected: false },
      ])
  useEffect(()=>{

  },[days])

  const [selected,setSelected] = useState(false)
      const handleSelectDay = (index) => {
        const newDays = [...days];
        newDays[index].selected = !newDays[index].selected;
        setDays(newDays);
      };
  return (
      <div className='col gap-2'>
    <div className='flex gap-2'>
        {days?.map((day,index) =><span key={day.key}  name={day.key}  onClick={()=>{handleSelectDay(index),onChange(day.key)}} className={` dark:bg-zinc-800 hover:!text-deepBlue cursor-pointer rounded-full bg-zinc-50 w-9 h-9 ${day.selected&&"!bg-blue"} flex center`} >{day.label}</span>)}
    </div>
      </div>  
    )
}

export default WeekDayPicker