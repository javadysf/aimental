import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from 'next-themes';

export default function BasicDatePicker({onChange,id}) {
  const { theme, setTheme } = useTheme();
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (event) => {
      console.log(event);
      id&&onChange(id,event)
      !id&&onChange(event)
    };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
        
        value={selectedDate}
        onChange={handleDateChange}
        InputAdornmentProps={{
          style: {
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          },
        }}
        sx={{border: theme=='dark'?'1px solid #d1d1d1':"1px solid",borderRadius:"12px",padding:"0px !important" ,'& .MuiInputBase-root': { height: '35px',color:theme=='dark'&&"#d1d1d1" }, "& .MuiSvgIcon-root": {
          color: theme=='dark'&&"#b0b0b0",
        },}}
  className='w-48 !h-[36px]'
/>
        </LocalizationProvider>
  );
}

