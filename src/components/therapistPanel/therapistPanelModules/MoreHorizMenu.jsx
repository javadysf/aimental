import { useState } from "react";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import CreateChanelMenu from "../MessengerModules/MessengerInboxModules/CreateChanelMenu";

export default function MoreHorizMenu({ moreHorizetems, position }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [Backdrop, setBackdrop] = useState(false);
  const [Backdropcp, setBackdropcp] = useState();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (backdrop, componentName) => {
    setAnchorEl(null);
    setBackdrop(backdrop);
    setBackdropcp(componentName);
  };

  const handleBdClose = () => {
    setBackdrop(false);
  };

  const id = open ? "simple-popover" : undefined;

  
  return (
    <div className="text-neutral-800 dark:text-neutral-300">
      <MoreHoriz
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={
          position == "horizental"
            ? { rotate: "90deg", alignSelf: "center", cursor: "pointer" }
            : {}
        }
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{ padding: "10px" }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: position == "horizental" ? "right" : "left",
        }}
      >
        {moreHorizetems?.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => handleClose(item?.backDropMenu, item.componentName)}
          >
            <span className="flex text-lg font-medium gap-3 center  ">
              <span className="flex center w-6 h-6">{item.icon} </span>{" "}
              {item.title}
            </span>
          </MenuItem>
        ))}
      </Popover>
      {Backdropcp == "CreateChanelMenu" && (
        <CreateChanelMenu close={handleBdClose} open={Backdrop} />
      )}
    </div>
  );
}
