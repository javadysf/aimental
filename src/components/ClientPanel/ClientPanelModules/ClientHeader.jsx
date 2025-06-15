import aimentallogo from "../../../assets/img/aimental.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import darkailogo from "../../../assets/img/header/darkailogo.svg";
import { useTheme } from 'next-themes';
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";

const ClientHeader = () => {
	const { theme, setTheme } = useTheme();
  const Profile = useSelector((state) => state.CLProfileSlice).profile
  const CLAvatar = useSelector((state) => state.CLProfileSlice).avatar?.file

  
  return (
    <div className="flex dark:bg-neutral-800 dark:border-zinc-700 border-b border-zinc-400 dark:drop-shadow-md text-neutral-100  h-24 w-full px-20 py-4 justify-between">
      <div className="flex items-center">
        <Link href={"/"}>
        <Image alt="logo" src={theme=='dark'?darkailogo:aimentallogo} />
        </Link>
      </div>
      <div className="max-lg:hidden flex gap-8 item-center">
        <span className="flex gap-4 items-center">
         <ThemeSwitcher/>
          <span className="h-[60%] w-[1px] bg-neutral-800 dark:bg-neutral-100"></span>
          <NotificationsNoneIcon
            sx={{ height: "24px", width: "24px", cursor: "pointer",color:theme=='dark'?"#d1d1d1":"#262626"}}
          />
        </span>
        <span className="flex items-center gap-4">
          {Profile? (
            <>
              {" "}
              <Image width={130} height={80} alt="avatar" className="med-icon rounded-full h-12 w-12" src={CLAvatar} />{" "}
              <p className="text-neutral-800 text-lg font-normal dark:text-neutral-300">Hi {Profile?.first_name}!</p>
            </>
          ) : (
            <>
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
            <Skeleton animation="wave" width={90}  variant="text" sx={{ fontSize: '1rem' }} />
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default ClientHeader;
