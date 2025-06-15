"use client"
import { KeyboardArrowRight } from "@mui/icons-material";
import PasswordInput from "./CilentSettingModules/PasswordInput";
import { useState } from "react";
import ChangePassword from "./CilentSettingModules/ChangePassword.jsx/ChangePassword";
import ChangeEmail from "./CilentSettingModules/ChangeEmail/ChangeEmail";

const settingItems = [
  { id: "1", title: "Change Email" },
  { id: "2", title: "Change password" },
  { id: "3", title: "Help" },
];

const ClientSetting = () => {
  const [Renderedcomponent,setRenderedComponent] = useState("Change Email")
  const [showMenu,setShowMenu] = useState(false)
  return (
    <div className="flex w-full">
      <div className={`${showMenu&&"max-lg:hidden"} col px-4 gap-6 py-8 lg:w-2/5 max-lg:w-full dark:text-neutral-300 border-r dark:border-zinc-700 border-zinc-400`}>
        {settingItems.map(({ id, title }) => (
          <div
          onClick={()=>{setRenderedComponent(title);setShowMenu(true)}}
            key={id}
            className={` ${Renderedcomponent==title&&"bg-blue-50 dark:bg-zinc-800 rounded-2xl"} flex dark:text-neutral-300 hover:dark:bg-zinc-600 p-3 rounded-2xl w-full text-neutral-800 cursor-pointer hover:bg-blue-50 justify-between items-center`}
          >
            <h5 className={` ${Renderedcomponent==title&&"text-blue"} font-medium text-base`}>{title}</h5>{" "}
            <KeyboardArrowRight className="!w-6 !h-6" />{" "}
          </div>
        ))}
      </div>
      <div className={` ${!showMenu&&"max-lg:hidden"} bg-blue-50 w-full p-4`}>
          {Renderedcomponent==="Change password"&&<ChangePassword setShowMenu={setShowMenu} />}
         { Renderedcomponent==="Change Email"&&<ChangeEmail setShowMenu={setShowMenu} />} 
      </div>
    </div>
  );
};

export default ClientSetting;
