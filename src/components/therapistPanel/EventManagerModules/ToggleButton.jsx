
import Toggle from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import CalendarToday from "@mui/icons-material/CalendarTodayOutlined";
import CheckCircle from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';

const ToggleButton = ({name}) => {

  Link
  return (
    <ToggleButtonGroup
      color="primary"
      value={name?name:"events"}
      className='max-lg:m-0 ml-10'
      exclusive
      aria-label="Platform"
    >
        <Link href={"/therapist/eventmanager/events"}>
      <Toggle  className='!rounded-s-2xl w-12' value="events"><CalendarToday/></Toggle>
        </Link>
     <Link href={"/therapist/eventmanager/tasks"}>
     <Toggle className='!rounded-e-2xl w-12' value="tasks"><CheckCircle/></Toggle>
     </Link> 
     
    </ToggleButtonGroup>
  )
}

export default ToggleButton