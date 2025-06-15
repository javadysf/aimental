"use client"
import { useState,useEffect } from "react";
import { useTheme } from 'next-themes';
import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { SideBarItems } from "@/core/services/common/ClientSideBarMenu";
import DoorIcon from "@mui/icons-material/DoorFrontOutlined";
import Link from "next/link";
import { Skeleton } from "@mui/material";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import Image from "next/image";


export default function SideMenu() {
  const Profile = useSelector((state) => state.CLProfileSlice)
  const CLAvatar = useSelector((state) => state.CLProfileSlice).avatar?.file
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
console.log(Profile?.profile?.first_name);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
console.log(CLAvatar);
  const DrawerList = (
    <div className="col justify-between pt-10 px-5">
      <div className="flex   self-center flex-col gap-4">
        <span className="flex items-center justify-between gap-1">
        {Profile ? (
            <Link className="w-full flex items-center justify-evenly" href={"/client/dashboard"}>
              {" "}
              <Image width={130} height={100} alt="client-avatar" className="med-icon rounded-full h-8 w-8" src={CLAvatar} />{" "}
              <p className="  text-sm font-normal">Hi {Profile?.profile?.first_name}!</p>
            </Link>
          ) : (
            <>
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
            <Skeleton animation="wave" width={90}  variant="text" sx={{ fontSize: '1rem' }} />
            </>
          )} <span className="w-[1px] h-[80%] bg-zinc-400 "></span>{" "}
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
