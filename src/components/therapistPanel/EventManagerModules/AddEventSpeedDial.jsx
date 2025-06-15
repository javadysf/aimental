import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { CalendarToday, CheckCircleOutline, Schedule } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useTheme } from 'next-themes';

const ITEM_HEIGHT = 48;

const AddEventSpeedDial = ({SetCurrentPage}) => {
  const { theme, setTheme } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='w-12 h-12 bg-blue rounded-xl fixed bottom-20 right-5 z-50 flex center text-xl text-white dark:bg-blue-300 dark:text-deepBlue'>
      <div className={``}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className='!text-white dark:!text-deepBlue'

      >
   +
      </IconButton>
      <Menu
      
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        anchorEl={anchorEl}
        open={open}
        sx={{padding:"2px !important","& .MuiPopover-paper": {
            backgroundColor:theme=='dark'&&"#262626 !important",
            color:theme=='dark'&&"#d1d1d1 !important",
            border:theme=='dark'&&"0px !important"
            },}}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT *  4,
            width: '25ch',
            border:"1px solid #b0b0b0",
            borderColor:"#b0b0b0",
          fontFamily:"!poppins"
          },
        }}
      >
        
          <MenuItem  className='flex gap-2 text-xs  !justify-end' onClick={()=>{handleClose;SetCurrentPage("AddAppointment")}}>
          Add Appointment <CalendarToday/>
          </MenuItem>
          <MenuItem className='flex gap-2 !justify-end' onClick={()=>{handleClose;SetCurrentPage("AddTask")}}>
          Tasks <CheckCircleOutline/>
          </MenuItem>
          <MenuItem className='flex gap-2 !justify-end' onClick={()=>{handleClose;SetCurrentPage("Available")}}>
          Available Times <Schedule/>
          </MenuItem>
     
      </Menu>
    </div>
    </div>
  )
}

export default AddEventSpeedDial