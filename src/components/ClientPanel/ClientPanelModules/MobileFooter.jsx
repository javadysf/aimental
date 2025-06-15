import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";

const MobileFooter = () => {

  
    const location = "jj"
  const FooterItems = [
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
    { id: "3", title: "Explore", address: "/client/explore", icon: <PeopleOutlineIcon /> },
    { id: "4", title: "Profile", address: "/client/profile", icon: <PersonOutlineIcon /> },
  ];
  return (
    <div className="sticky bottom-0"> 
    {
      <div className=" dark:bg-neutral-800 dark:text-neutral-500 w-full flex gap-2 p-2 bg-white  justify-between text-xs">
      {FooterItems.map(({address,id,title,icon}) => 
        <Link key={id} href={address} className={`${location==address&&"!text-blue dark:!text-blue-300"} col center  text-neutral-500`}>
        {icon}
          <h4 className="">{title}</h4>
        </Link>
      )}
    </div>
    }  
   
    </div>
  );
};

export default MobileFooter;