import aimentallogo from "../../../assets/img/aimental.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import darkailogo from "../../../assets/img/header/darkailogo.svg";
import { useSelector} from "react-redux";
import { Skeleton } from "@mui/material";
import { useTheme } from 'next-themes';
import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";

const TPHeader = () => {
  const TPProfile = useSelector((state) => state.TPProfileSlice).profile;
  const TPAvatar = useSelector((state) => state.TPProfileSlice).avatar.file;

	const { theme, setTheme } = useTheme();

  const ThemeHandler = () => {
    
    dispatch(
      setTheme()
    );
  };  

  return (
    <div className="flex dark:bg-neutral-800  dark:drop-shadow-md text-neutral-100  h-20 w-full px-20 py-2 justify-between">
      <Link href={"/"} className="flex items-center">
        <Image alt="aimental-logo" src={theme=='dark'?darkailogo:aimentallogo} />
      </Link>
      <div className="flex gap-8 item-center">
        <span className="flex gap-4 items-center">
          <ThemeSwitcher/>
          <span className="h-[60%] w-[1px] bg-neutral-800 dark:bg-neutral-100"></span>
          <NotificationsNoneIcon
            sx={{ height: "24px", width: "24px", cursor: "pointer",color:theme=='dark'?"#d1d1d1":"#262626"}}
          />
        </span>
          {TPProfile? (
            <>
            <Link className="flex items-center gap-4" href={"/therapist-dashboard"}>
              {TPAvatar?<Image alt="tp-avatar" width={130} height={100} className="med-icon" src={TPAvatar} />:<Skeleton animation="wave" variant="circular" width={50} height={50} />}{" "}
              <p className="text-neutral-800 dark:text-neutral-300 text-lg font-normal">Hi {TPProfile.first_name}!</p>
            </Link>
            </>
          ) : (
            <div className="flex gap-2 center">
            
            <Skeleton animation="wave" variant="circular" width={50} height={50} />
            <Skeleton animation="wave" width={90}  variant="text" sx={{ fontSize: '1rem' }} />
            </div>
          )}
      </div>
    </div>
  );
};

export default TPHeader;
