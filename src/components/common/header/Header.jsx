import {  useEffect, useState } from "react";
import aiLogo from "../../../assets/img/aimental.svg";
import darkailogo from "../../../assets/img/header/darkailogo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import DropDownItems from "../dropdownItems/DropDownItems";
import { useSelector } from "react-redux";
import { useTheme } from 'next-themes';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { getItem } from "../../../core/services/common/storage.services";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "../ThemeSwitcher";
import { Skeleton } from "@mui/material";

const Header = () => {
  const [token,settoken]=useState(null)
  useEffect(()=>{
    settoken(getItem("access_token"))
  },[])
  const { theme, setTheme } = useTheme();
  const CLProfile = useSelector((state) => state.CLProfileSlice).profile
  const TPProfile = useSelector((state) => state.TPProfileSlice).profile;
  const CLAvatar = useSelector((state) => state.CLProfileSlice).avatar?.file
  const TPAvatar = useSelector((state) => state.TPProfileSlice).avatar?.file
  const [toggle, setToggle] = useState(false);

  return (
    <header
      id="header"
      className=" w-full border-b border-zinc-400 fixed relative dark:bg-neutral-800  py-1 px-12  bg-white z-50 max-sm:gap-0 justify-between items-center  max-lg:p-1 max-sm:text-sm"
    >
      <div className=" w-full flex justify-between max-sm:gap-0 max-lg:p-1">
        <nav className="flex gap-10 center">
          <div className=" list-none flex text-black gap-5 max-sm:text-sm center self-center">
            <Link href="/" >  
            <Image
            
            alt="aimental-logo"
              src={theme=='dark' ? darkailogo : aiLogo}
              className="h-16 w-32 max-lg:w-24"
            />{" "}
            </Link>
            <ThemeSwitcher/>
            <span className="flex max-lg:hidden h-10 w-[1px] dark:transition-colors bg-black dark:bg-neutral-300 "></span>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 cursor-pointer dark:text-neutral-300  max-lg:hidden h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <ul className="gap-4 list-none lg:flex hidden items-center flex-1">
            <li
              className={`font-poppins font-medium	 cursor-pointer text-[16px]`}
            >
              <Link href={"./"}>Home</Link>
            </li>
            <li
              className={`font-poppins font-medium	 cursor-pointer text-[16px]`}
            >
              <DropDownItems itemName={"Analyses"} />
            </li>
            <li
              className={`font-poppins font-medium	 cursor-pointer text-[16px]`}
            >
              <DropDownItems itemName={"Comunity"} />
            </li>
            <li
              className={`font-poppins font-medium	 cursor-pointer text-[16px]`}
            >
               <Link href={"/blogs"}> Blog </Link>
            </li>
            <li
              className={`font-poppins font-medium	 cursor-pointer text-[16px]`}
            >
              <DropDownItems itemName={"About us"} />
            </li>
          </ul>
        </nav>

{
  token&&
       <>
       {TPProfile?.first_name? <>
            <Link className="flex text-neutral-800 dark:text-neutral-300 items-center max-lg:hidden gap-4" href={TPProfile?.first_name?"/therapist/dashboard":"/client/dashboard"}>
            {TPAvatar?<Image alt="tp-avatar" width={50} height={50} className="med-icon" src={TPAvatar} />:<Skeleton animation="wave" variant="circular" width={50} height={50} />}  {" "}
              <p className=" text-lg font-normal ">Hi {TPProfile?.first_name}!</p>
            </Link>
            </>:CLProfile?.first_name?
            <>
             <Link className="flex text-neutral-800 dark:text-neutral-300 items-center max-lg:hidden gap-4" href={CLProfile?.first_name?"/client/dashboard":"/therapist/dashboard"}>
             {CLAvatar?<Image alt="cl-avatar" width={50} height={50} className="med-icon" src={CLAvatar} />:<Skeleton animation="wave" variant="circular" width={50} height={50} />}
             <p className=" text-lg font-normal ">Hi {CLProfile?.first_name}!</p>
           </Link>
           </>:""

             }
       </> }{!token&&
        
       <span className="flex gap-3 max-lg:hidden justify-end items-center  ">
            <a href={"https://aimental.hsg-stage.ir/api/v1/sso/start"} className="bg-blue content-center text-center rounded-2xl dark:bg-blue-200 dark:text-deepBlue font-medium text-white h-12 w-32">
              Sing Up
            </a>{" "}
            <a href={"https://aimental.hsg-stage.ir/api/v1/sso/start"} className="text-blue rounded-2xl font-medium h-12 w-32 border-black border-2  dark:text-blue-200 dark:border-neutral-500 flex center ">
            Sing In
          </a>
          </span> 
}
      </div>

      {/* Desktop Navigation */}

      <div className="flex flex-row gap-5">
        <div className="relative flex center pl-2"></div>
      </div>
      {/* Mobile Navigation */}
      <div className="lg:hidden ">
        <div
          className="w-[28px] h-[28px] absolute right-6 top-6 object-contain"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <CloseIcon sx={{color:theme=='dark'?"#D1D1D1":""}} /> : <MenuIcon sx={{color:theme=='dark'?"#D1D1D1":""}} />}
        </div>
        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          }   w-full h-screen col bg-white dark:bg-neutral-800 absolute right-0 top-[80px] z-80 sidebar`}
        >
          <div className="col  p-4 h-[90%] justify-between">
          <div className="w-full flex flex-col  z-10 bg-white dark:bg-neutral-800">
            <div className="flex items-center gap-5 px-6 py-4  bg-white dark:bg-neutral-800 ">
          <ThemeSwitcher/>
              <span className="flex h-6 w-[1px] bg-neutral-800 dark:bg-neutral-300 "></span>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 cursor-pointer h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <hr />
            <div className="col bg-white dark:bg-neutral-800  ">
              <Link href={"/"} className="h-12 p-4 dark:text-neutral-300 content-center">
                Home
              </Link>
              <hr />
            </div>
            <Accordion
              sx={{
                boxShadow: "none",
                borderBottom: `1px solid ${theme=='dark'?"#d1d1d1":"black"}`,
                backgroundColor: theme=='dark' ? "#262626" : "",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:theme=='dark'?"#d1d1d1":""}} />}
                aria-controls="panel1-content"
                id="paneld1-header"
              >
                <h4 className="text-black dark:text-neutral-300">
                  Accordion 1
                </h4>
              </AccordionSummary>
              <AccordionDetails>item 1</AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                boxShadow: "none",
                borderBottom: `1px solid ${theme=='dark'?"#d1d1d1":"black"}`,
                backgroundColor: theme=='dark' ? "#262626" : "",
              }}
            >
              <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:theme=='dark'?"#d1d1d1":""}} />}
                aria-controls="panel1-content"
                id="paneld1-header"
              >
                <h4 className="text-black dark:text-neutral-300">
                  Accordion 1
                </h4>
              </AccordionSummary>
              <AccordionDetails>item 1</AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                boxShadow: "none",
                borderBottom: `1px solid ${theme=='dark'?"#d1d1d1":"black"}`,
                backgroundColor: theme=='dark' ? "#262626" : "",
              }}
            >
              <AccordionSummary
           expandIcon={<ExpandMoreIcon sx={{color:theme=='dark'?"#d1d1d1":""}} />}
                aria-controls="panel1-content"
                id="paneld1-header"
              >
                <h4 className="text-black dark:text-neutral-300">
                  Accordion 1
                </h4>
              </AccordionSummary>
              <AccordionDetails>item 1</AccordionDetails>
            </Accordion>
           
      
          </div>
             { TPProfile?            <>
            <Link className="flex items-center gap-4" href={"/therapist-dashboard"}>
              <Image alt="ai-usericon" width={32} height={32} className="med-icon" src={TPAvatar?TPAvatar:""} />{" "}
              <p className="text-neutral-800 text-lg font-normal">hi {TPProfile.first_name}!</p>
            </Link>
            </>:
          <div className="flex gap-3 justify-evenly items-center w-full h-[200px]">
            <a href={"https://aimental.hsg-stage.ir/api/v1/sso/start"} className="bg-blue content-center text-center rounded-2xl dark:bg-blue-200 dark:text-deepBlue font-medium text-white h-12 w-32">
              Sing Up
            </a>{" "}
            <a href={"https://aimental.hsg-stage.ir/api/v1/sso/start"} className="text-blue rounded-2xl font-medium h-12 w-32 border-black border-2  dark:text-blue-200 dark:border-neutral-500 flex center ">
            Sing In
          </a>
          </div>
             }
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
