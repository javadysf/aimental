import React, { useState } from 'react'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import  Dayjs  from 'dayjs';
import { TextField } from '@mui/material';

const TimePicker = ({placeholder,css,onChange,id}) => {
  const [selectedTime, setSelectedTime] = useState(Dayjs());
  const handleTimeChange = (newValue) => {
    setSelectedTime(newValue);
    id&&onChange(id,newValue)
    onChange(newValue)
  };
  const TimePickerInput = ({ value, onChange }) => {
    return (
      <TextField
      className={` ${css} dark:bg-neutral-800 dark:placeholder-neutral-300 cursor-pointer hover:bg-blue-50 dark:border-neutral-500  border font-poppins border-zinc-600 text-xs rounded-xl dark:text-neutral-300 placeholder-neutral-800 p-2 h-9  w-20`}
      placeholder={placeholder?placeholder:"Start time"}
        // type="time"
        value={value}
        onChange={onChange}
      />
    );
  };
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileTimePicker
      value={selectedTime}
      onChange={handleTimeChange}
      className='!pr-0 !cursor-pointer '
      sx={{fontFamily:"inherit !important",border:"1px solid !important",borderRadius:"12px",cursor:"pointer"}}
      renderInput={(params)=><TextField sx={{cursor:"pointer"}} placeholder='startTie' {...params}/>}
        // slotProps={{
        //   textField: {
        //     InputProps: {
        //       inputComponent: TimePickerInput,
        //       className:"!pr-0"
        //     },
            
        //   },
        // }}
      />
    </LocalizationProvider>
    );
  };

export default TimePicker