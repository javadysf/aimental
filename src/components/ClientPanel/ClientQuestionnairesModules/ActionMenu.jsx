import * as React from 'react';
import Menu from '@mui/material/Menu';
import { MoreHoriz, Visibility } from '@mui/icons-material';
import Link from 'next/link';


export default function FormMenu({id}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className='flex justify-center'>
      <MoreHoriz
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        sx={{ rotate: "90deg", alignSelf: "center", cursor: "pointer" }}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </MoreHoriz>
      <Menu
        transformOrigin={{
          vertical: "center",
          horizontal: "right", }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{padding:"10px"}}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <Link
    href={`/client/questionnaires/${id}`}
    className="flex gap-2 center px-2 font-normal text-base "
  >
    {" "}
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg> View{" "}
  </Link>
      </Menu>
    </div>
  );
}