"use client"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {  IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export default function BasicDateCalendar() {
  const [date, setDate] = useState(new Date());
  const CustomHeader = ({ currentMonth, onMonthChange }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex:"0"
        
      }}
    >
      <IconButton onClick={() => onMonthChange("prev")}>
 <KeyboardArrowLeft className="!border !relative !z-10 dark:border-neutral-300 dark:text-neutral-300 !p-2 !rounded-xl !w-10 !h-10" />
      </IconButton>
      <span variant="h6" className="font-semibold">
        {currentMonth.toUTCString().slice(8,16)}
      </span>
      <IconButton onClick={() => onMonthChange("next")}>
      <KeyboardArrowRight className="!border !z-10 dark:border-neutral-300 dark:text-neutral-300 !p-2 !rounded-xl !w-10 !h-10" />
      </IconButton>
    </div>
  );
  const customDayOfWeekFormatter = (date) => {
    return new Date(date).toLocaleDateString(undefined, { weekday: 'short' });
  };
  return (
    <LocalizationProvider localeText={{}} dateAdapter={AdapterDayjs}>
      <DateCalendar
       dayOfWeekFormatter={customDayOfWeekFormatter}
        sx={{
          width: "100%",
          padding: "10px",
          fontFamily: "!Poppins",
          position:"relative",
         
        }}
        slotProps={{
          // calendarHeader: { className: "calendar-header" },
          leftArrowIcon: { className: "calendar-arrow" },
          rightArrowIcon: { className: "calendar-arrow" },
          nextIconButton: { className: "calendar-icon" },
          previousIconButton: { className: "calendar-icon" },
          day: { 
           className:"dark:border-neutral-300 dark:text-neutral-300 !font-semibold ",
            sx:{border:"1px solid #454545",borderRadius:"13px",padding:"2px","&.Mui-disabled":{
              border:"none !important",fontFamily:"Poppins",fontWeight:600
              
            }} },
          calendarHeader: {
            disablePast: true,
            currentMonth: date,
            onMonthChange: (direction) => {
              const newDate = new Date(date);
              newDate.setMonth(
                date.getMonth() + (direction === "prev" ? -1 : 1)
              );
              setDate(newDate);
            },
          },
        }}
        slots={{
          calendarHeader: CustomHeader,
        }}
        disablePast={true}
        disableHighlightToday={false}
      />
    </LocalizationProvider>
  );
}
