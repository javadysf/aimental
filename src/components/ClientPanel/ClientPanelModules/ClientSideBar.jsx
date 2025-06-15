import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DoorIcon from "@mui/icons-material/DoorFrontOutlined";
import { LogOut } from "../../../core/services/api/Auth/auth";
import { clearStorage } from "../../../core/services/common/storage.services";
import { useDispatch } from "react-redux";
import { setReload } from "../../../redux/features/Reload/Reload";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';


const SideBarItems = [
  {
    id: "1",
    title: "Dashboard",
    address: "/client/dashboard",
    icon: <SpaceDashboardOutlinedIcon />,
  },
  {
    id: "2",
    title: "Messenger",
    address: "/therapist-dashboard/messenger",
    icon: <ChatOutlinedIcon />,
  },
  {
    id: "3",
    title: "Questionnaires",
    address: "/client/questionnaires",
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
    id: "4",
    title: "Explore",
    address: "/client/explore",
    icon: <PeopleOutlineIcon />,
  },
  { id: "5", title: "Ticket", address: "/client/ticket", icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
  </svg>},
  {
    id: "6",
    title: "Profile",
    address: "/client/profile",
    icon: <PersonOutlineIcon />,
  },
  {
    id: "7",
    title: "history",
    address: "/client/history",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
      <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
      <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
      <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
    </svg>
    ),
  },
  {
    id: "8",
    title: "Setting",
    address: "/client/setting",
    icon: (
      <SettingsIcon/>
    ),
  },
];
const TPSideBar = () => {
  
  const Navigate = useRouter()
  const dispatch = useDispatch();
  const HandleLogout=async()=>{
    await LogOut()
    clearStorage()
    dispatch(setReload(true))
    Navigate.push("/")
}
const router = usePathname()
console.log(router);
  return (
    <div className="dark:bg-neutral-800 pt-16 dark:text-neutral-500 border-r dark:border-zinc-700 border-zinc-400 dark:drop-shadow-[2px_0px_4px_rgba(0,0,0,0.05)] max-lg:hidden col text-neutral-800 h-[calc(100vh-96px)] w-[20%] justify-between font-normal">
      <div className="flex w-[80%] self-center flex-col gap-4">
        {SideBarItems?.map(({ title, id, icon, address }) => (
          <Link key={id} href={address}>
            <span
              className={`flex gap-2 slef-start  p-2 items-center rounded-2xl transition-colors hover:bg-blue-50 ${
                router.includes(address)&& "bg-blue-50 dark:bg-zinc-800 rounded-2xl"
              } `}
            >
              <div
                className={`text-lg center ${
                  router.includes(address)&&
                  "text-blue dark:text-blue-300 transition-colors"
                }`}
              >
                {icon}
              </div>
              <h2
                className={`text-base center ${
                  router.includes(address)&&
                  "text-blue dark:text-blue-300  transition-colors"
                }`}
              >
                {title}
              </h2>
            </span>
          </Link>
        ))}
      </div>
      <button onClick={()=>HandleLogout()} className="text-[#B3261E] text-lg dark:text-[#FBABA6]">
        <DoorIcon /> Logout
      </button>
    </div>
  );
};

export default TPSideBar;
