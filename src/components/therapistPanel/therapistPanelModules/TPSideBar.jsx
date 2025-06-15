import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CalendarToday from "@mui/icons-material/CalendarTodayOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DoorIcon from "@mui/icons-material/DoorFrontOutlined";
import { LogOut } from "../../../core/services/api/Auth/auth";
import { clearStorage } from "../../../core/services/common/storage.services";
import { setReload } from "../../../redux/features/Reload/Reload";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";


const TPSideBar = ({setrefresh}) => {
const dispatch = useDispatch()
  const HandleLogout=async()=>{
       await LogOut()
       clearStorage()
       setrefresh(true)
       dispatch(setReload(true))
       Navigate("/")
  }
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
      address: "/therapist/treatmentfiles",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
      <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
      <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
    </svg>,
    },
    { id: "6", title: "My Patient", address: "/pations", icon: <PeopleOutlineIcon /> },
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

  const location = usePathname()

  return (
    <div className="dark:bg-neutral-800 pt-16 pb-4 px-4 dark:text-neutral-500 shadow-right-bottom dark:drop-shadow-[2px_0px_4px_rgba(0,0,0,0.05)] max-lg:hidden col text-neutral-800 h-[calc(100vh-80px)] justify-between font-normal">
      <div className="flex  self-center flex-col gap-4">
        {SideBarItems?.map(({ title, id, icon, address }) => (
          <Link key={id} href={address}>
            <span
              className={`flex gap-2 slef-start  p-2 w-[200px]  rounded-2xl transition-colors hover:bg-blue-50 ${
                location.includes(address)&& "bg-blue-50 dark:bg-zinc-800 rounded-2xl"
              } `}
            >
              <div
                className={`text-lg ${
                  location.includes(address)&&
                  "text-blue dark:text-blue-300 transition-colors"
                }`}
              >
                {icon}
              </div>
              <h2
                className={`text-lg ${
                  location.includes(address)&&
                  "text-blue dark:text-blue-300 transition-colors"
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
