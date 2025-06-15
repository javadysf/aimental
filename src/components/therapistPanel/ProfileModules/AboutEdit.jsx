import { useState } from "react";
import MalePic from "../../../assets/img/therapistslist/male.png";
import { Button } from "@mui/material";
import CameraIcon from '@mui/icons-material/CameraAltOutlined';
import Image from "next/image";

const AboutEdit = ({avatar, editedprofile,
  setEditedProfile }) => {
  console.log(avatar);
  const [characterCount,setcharacterCount] = useState(editedprofile?.about_me?.length)
  return (
    <div className="flex gap-5 pb-6 border-b border-zinc-400  h-[280px] max-lg:col max-lg:h-auto">
      <div className="relative col center">
      <Image alt="tp-avatar" width={286} height={300} className="w-72 max-lg:w-48 " src={avatar?avatar.file:MalePic} />
      <Button className="!bg-blue !mt-[-50px] max-lg:!mt-2  dark:!bg-blue-50 !rounded-xl dark:!text-deepBlue !text-sm !px-5 !normal-case !flex !gap-2 !py-3 !text-white"><CameraIcon className="!w-4 !h-4"/> Change</Button>
      </div>
      <div className="col w-full ">
        <h2 className="font-semibold text-neutral-800 dark:text-zinc-400 text-[24px]">
          About
        </h2>
        <textarea
          className=" p-3 text-zinc-700 border rounded-2xl w-full dark:text-zinc-400  h-[220px] text-base overflow-auto	"
          value={editedprofile?.about_me}
          onChange={(e) => {setEditedProfile({...editedprofile,about_me:e.target.value}) ; setcharacterCount(e.target.value.length)}}
          maxLength={1000}
        />
        <span className="text-xs"> {1000-characterCount} / 1000 character </span>
      </div>
    </div>
  );
};

export default AboutEdit;
