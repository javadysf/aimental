
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CalendarToday from "@mui/icons-material/CalendarTodayOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";

const InboxFooter = () => {
  // console.log(showFooter);
  
  //   const location = useLocation().pathname
  const FooterItems = [
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
    { id: "3", title: "Events", address: "/therapist/eventmanager", icon: <CalendarToday /> },
    { id: "4", title: "Patients", address: "/therapist/mypatients", icon: <PeopleOutlineIcon /> },
    { id: "5", title: "Account", address: "/therapist/profile", icon: <PersonOutlineIcon /> },
  ];
  return (
    <div className="fixed bottom-0 w-full">
    {   
    <div className=" dark:bg-neutral-800 dark:text-neutral-500 w-full flex gap-2 p-2 bg-white lg:hidden justify-between text-xs">
      {FooterItems.map(({address,id,title,icon}) => 
        <Link key={id} href={address} className={`${"location==address&& !text-blue dark:!text-blue-300"} col center  text-neutral-500`}>
        {icon}
          <h4 className="">{title}</h4>
        </Link>
      )}
    </div>
    }
    </div>
  );
};

export default InboxFooter;
