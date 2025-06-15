"use client"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';



const ITEM_HEIGHT = 48;

export default function ActionMenu({menuItems,css}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={`${css}  z-0`}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon className=' dark:text-neutral-300' />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        sx={{padding:"2px !important"}}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: window.innerWidth>1000?ITEM_HEIGHT *  4.75:ITEM_HEIGHT *  4.5,
            width: '18ch',
          },
        }}
      >
        {menuItems?.map((option) => (
          
          <MenuItem key={option.id} onClick={handleClose}>
            {option.item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}