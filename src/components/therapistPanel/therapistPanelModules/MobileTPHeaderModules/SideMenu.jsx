"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DoorIcon from "@mui/icons-material/DoorFrontOutlined";
import { CalendarToday } from "@mui/icons-material";
import Image from "next/image";
import { useTheme } from 'next-themes';
import ThemeSwitcher from "@/components/common/ThemeSwitcher";


const SideBarItems = [
  {
    id: "1",
    title: "Dashboard",
    address: "/therapist/dashboard",
    icon: <SpaceDashboardOutlinedIcon />,
  },
  {
    id: "2",
    title: "Messenger",
    address: "/therapist/messenger",
    icon: <ChatOutlinedIcon />,
  },
  {
    id: "3",
    title: "Event Manager",
    address: "/therapist/eventmanager",
    icon: <CalendarToday />,
  },
  {
    id: "4",
    title: "Questionnaires",
    address: "/therapist/questionnaires",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-file-ruled"
        viewBox="0 0 16 16"
      >
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1zm9 6H6v2h7zm0 3H6v2h7zm0 3H6v2h6a1 1 0 0 0 1-1zm-8 2v-2H3v1a1 1 0 0 0 1 1zm-2-3h2v-2H3zm0-3h2V7H3z" />
      </svg>
    ),
  },
  {
    id: "5",
    title: "Treatment Files",
    address: "/therapist/Treatmentfiles",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
  </svg>,
  },
  { id: "6", title: "My Patient", address: "/", icon: <PeopleOutlineIcon /> },
  {
    id: "7",
    title: "Payments",
    address: "/therapist/payments",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-cash-stack"
        viewBox="0 0 16 16"
      >
        <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    id: "8",
    title: "Profile",
    address: "/therapist/profile",
    icon: <PersonOutlineIcon />,
  },
];
export default function SideMenu() {
  const TPProfile = useSelector((state) => state.TPProfileSlice).profile;
  const TPAvatar = useSelector((state) => state.TPProfileSlice).avatar.file;
    const location = usePathname();

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const { theme, setTheme } = useTheme();
  const DrawerList = (
    <div className="col justify-between pt-10 px-5">
      <div className="flex   self-center flex-col gap-4">
        {
          TPProfile&&
        <span className="flex items-center gap-4">
          <Image alt="tp-avatar" width={150} height={80} className="w-10" src={TPAvatar} />
          Hi {TPProfile.first_name} <span className="w-[1px] h-[80%] bg-zinc-400 "></span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-bell"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
          </svg>{" "}
        </span>
        }
        {SideBarItems?.map(({ title, id, icon, address }) => (
          <Link key={id} href={address}>
            <span
              className={` text-base flex gap-2 slef-start dark:text-neutral-300  p-2 items-center rounded-2xl transition-colors hover:bg-blue-50 ${
                location == address && "bg-blue-50 dark:bg-zinc-800 rounded-2xl"
              } `}
            >
              <div
                className={`text-base center dark:text-neutral-300  ${
                  location == address &&
                  "text-blue dark:text-blue-300 transition-colors"
                }`}
              >
                {icon}
              </div>
              <h2
                className={`text-base center  dark:bg-neutral-300 ${
                  location == address &&
                  "text-blue dark:text-blue-300 transition-colors"
                }`}
              >
                {title}
              </h2>
            </span>
          </Link>
        ))}
      </div>
   
        <span className="flex my-8 w-full justify-between items-center">
        <button
        className={` ${
          theme=='dark' && "text-[#FBABA6]"
        } self-start px-2  text-[#B3261E] text-lg`}
      >       <DoorIcon /> Logout </button>
   <span className="flex gap-2 items-center">
   <span className="w-[1px] h-[25px] bg-zinc-400  "></span>
     <ThemeSwitcher/>
   </span>
        </span>
     
    </div>
  );

  return (
    <div>
      <MenuIcon
        className=" !text-neutral-800 dark:!text-neutral-300  "
        onClick={toggleDrawer(true)}
      />
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: theme=='dark' && "#262626",
            color: theme=='dark' ? "#d1d1d1" : "#262626",
          },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
