import { Skeleton } from "@mui/material";
import Image from "next/image";

const About = ({avatar,TPProfile}) => {
  return (
    <div className="flex gap-5 pb-6 border-b border-zinc-400 max-lg:col  lg:h-[280px]">
      <div>
      {
        avatar?<Image alt="tp-avatar" width={286} height={300} className=" max-lg:w-48 " src={avatar?avatar.file:MalePic} />:
        <Skeleton variant="circular" animation="wave" width={200} height={200}  />
      }
      </div>
      
      <div className="col w-full" >
        <h2 className="font-semibold text-neutral-800 dark:text-zinc-400 text-[24px] max-lg:text-base">About</h2>
        <p className="text-zinc-700 dark:text-zinc-400 text-base overflow-auto max-lg:text-sm	">
        {TPProfile?TPProfile?.about_me:<>
          <Skeleton variant="text" animation="wave"   />
          <Skeleton variant="text" animation="wave"   />
          <Skeleton variant="text" animation="wave"   />
          <Skeleton variant="text" animation="wave"   />
          <Skeleton variant="text" animation="wave"   />
        
        </> }
        </p>
      </div>
    </div>
  );
};

export default About;
