import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import AttachFileIcon from "@mui/icons-material/AttachFile";


export default function AttachFile() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="cursor-pointer">
       <AttachFileIcon onClick={handleOpen} />
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
       <span className="bg-white rounded-3xl center text-neutral-800 gp8" >
        choose image
       </span>
      </Backdrop>
    </div>
  );
}