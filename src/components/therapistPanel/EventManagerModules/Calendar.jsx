import {EventComponent,CustomToolbar}  from "./CustomToolbar"
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEffect, useState } from "react";

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


const Calendar = ({events}) => {

useEffect(() => {},
[events]
)

  return(
  <div className="max-lg:h-[80vh] h-[500px]" style={{position:"relative",zIndex:"0" }}>
    <BigCalendar
      localizer={localizer}
      events={events}
      components={{toolbar:CustomToolbar  }}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
  )
}

export default Calendar;