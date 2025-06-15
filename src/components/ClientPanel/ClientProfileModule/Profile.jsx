import Image from "next/image";
import { useSelector } from "react-redux";


const Profile = ({setEditmode}) => {
  const CLAvatar = useSelector((state) => state.CLProfileSlice).avatar?.file
  const Profile = useSelector(
    (state) => state.CLProfileSlice).profile

    return (
      <div className="col w-1/2 max-lg:w-full bg-zinc-50 dark:bg-zinc-800 p-3 gap-2 max-lg:overflow-visible overflow-y-scroll rounded-2xl">
        <div className="flex justify-between center">
        <h3 className="font-semibold text-2xl dark:text-neutral-300">Profile</h3>
<span onClick={()=>setEditmode(true)} className="blue-button text-center !w-fit !px-4  !py-3" >Edit Profile</span>
        </div>
        <span className="h-40">

        <Image width={160} height={160} alt="cl-avatar"  className="w-40 h-40
         rounded-full border-4 border-blue" src={CLAvatar} />
        </span>
        <span >
          <h4 className="text-base  dark:text-zinc-400"> Full Name </h4>
          <h3 className="text-md font-semibold dark:text-neutral-300 ">{`${Profile?.first_name} ${Profile?.last_name} `}</h3>
        </span>
        <span >
          <h4 className="text-base  dark:text-zinc-400"> Date of Brith </h4>
          <h3 className="text-md font-semibold dark:text-neutral-300 ">{Profile?.birth_date} </h3>
        </span>
        <span >
          <h4 className="text-base  dark:text-zinc-400"> Sex </h4>
          <h3 className="text-md font-semibold dark:text-neutral-300 ">{Profile?.gender}</h3>
        </span>
        <span >
          <h4 className="text-base  dark:text-zinc-400"> Education </h4>
          <h3 className="text-md font-semibold dark:text-neutral-300 ">{Profile?.education?.title}</h3>
        </span>
        <span >
          <h4 className="text-base  dark:text-zinc-400"> Occupation </h4>
          <h3 className="text-md font-semibold dark:text-neutral-300 ">{Profile?.job?.title}</h3>
        </span>
        <span >
          <h4 className="text-base  dark:text-zinc-400"> Economic Status </h4>
          <h3 className="text-md font-semibold dark:text-neutral-300 ">{Profile?.economic_situation_status}</h3>
        </span>
        <span >
          <h4 className="text-base  dark:text-zinc-400"> History of Addiction </h4>
          <h3 className="text-md font-semibold dark:text-neutral-300 ">{Profile?.addiction_status}</h3>
        </span>
        <span >
          <h4 className="text-base  dark:text-zinc-400"> Medical History </h4>
          <h3 className="text-md font-semibold dark:text-neutral-300 ">{Profile?.physical_condition}</h3>
        </span>
        <span >
          <h4 className="text-base  dark:text-zinc-400"> Physical Condition </h4>
          <h3 className="text-md font-semibold dark:text-neutral-300 ">{Profile?.physical_condition}</h3>
        </span>
        <span >
          <h4 className="text-base  dark:text-zinc-400"> Marital Status </h4>
          <h3 className="text-md font-semibold dark:text-neutral-300 ">{Profile?.marital_status}</h3>
        </span>
        <span >
          <h4 className="text-base  dark:text-zinc-400"> Sexual Orientation </h4>
          <h3 className="text-md font-semibold dark:text-neutral-300 ">{Profile?.sexual_orientation?.title}</h3>
        </span>

      </div>
    );
  };
  
  export default Profile;
  