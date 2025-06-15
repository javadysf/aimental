import React from 'react'
import SideMenu from './MobileHeaderModules/SideMenu'
import darkailogo from "../../../assets/img/header/darkailogo.svg";
import aimentallogo from "../../../assets/img/aimental.svg";
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';


const MobileModeHeader = () => {
	const { theme, setTheme } = useTheme();
  return (
    <div className="flex dark:bg-neutral-800 dark:border-zinc-700 border-b border-zinc-400 dark:drop-shadow-md text-neutral-100  h-10 w-full px-8 center py-10 justify-between">
<SideMenu/>
         <Link href={"/"}>
        <Image alt='ai-logo' src={theme=='dark'?darkailogo:aimentallogo} />
        </Link>
    </div>
  )
}

export default MobileModeHeader