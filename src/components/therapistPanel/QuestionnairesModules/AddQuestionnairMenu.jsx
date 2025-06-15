
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {  MoreHoriz } from "@mui/icons-material";
import {  useState } from "react";
import Link from "next/link";


export default function AddQuestionnairMenu({ }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async () => {
    setAnchorEl(null);
  };

  return (
    <div className="lg:hidden">
      <MoreHoriz
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        sx={{ rotate: "90deg", alignSelf: "center", cursor: "pointer" }}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </MoreHoriz>
      <Menu
        sx={{
          boxShadow: "none",
          "& .MuiPopover-paper": {
            boxShadow: "none",
            border: "1px solid #b0b0b0",
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="flex gap-2">
          <Link href={`/therapist/questionnaires/newform`}>
          +  Add new questionnaire
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
