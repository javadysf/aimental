import Link from "next/link";
import Image from "next/image";
import { useTheme } from 'next-themes';
import darkailogo from "../../../assets/img/header/darkailogo.svg";
import aimentallogo from "../../../assets/img/aimental.svg";
import SideMenu from "./MobileTPHeaderModules/SideMenu";


const MobileTPHeader = () => {
	const { theme, setTheme } = useTheme();
  return (
    <div className="sticky  flex dark:bg-neutral-800 dark:border-zinc-700 border-b border-zinc-400 dark:drop-shadow-md text-neutral-100  h-10 w-full px-8 center py-10 justify-between">
<SideMenu/>
         <Link  href={"/"}>
        <Image  alt="aimental-logo" src={theme=='dark'?darkailogo:aimentallogo} />
        </Link>
    </div>
  )
}

export default MobileTPHeader