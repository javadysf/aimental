import malePic from "../../assets/img/therapistslist/male.png";
import TagModule from "../../components/common/TagModule";
import Link from "next/link";
import Image from "next/image";
const TherapistsCard = ({therapist}) => {




  return (
    <div className="flex gap-4 bg-neutral-100 dark:bg-zinc-800 p-4 rounded-[32px] max-lg:flex-col dark:text-neutral-300 ">
      <div className="flex flex-col gap-2 max-lg:flex-row">
        <Image  alt="therapist-image" width={300} height={400} className="max-lg:w-[150px]" src={therapist?therapist?.avatar_link?.file:malePic} />
        <div className="lg:hidden">
          <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl max-lg:text-base">{therapist?.first_name + ` ` + therapist?.last_name}</h1>
        <h4>London,UK</h4>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-lg:hidden">
        <Link href={`/therapists/${therapist?.id}`} className="text-blue dark:text-blue-200 dark:border-neutral-500 rounded-2xl font-medium cursor-pointer text-center w-full border-black border p-3 h-12">
          View Profile
        </Link>
        <button className=" text-white dark:bg-blue-200 dark:text-deepBlue bg-blue rounded-2xl font-medium p-3 h-12 ">
          Book Now
        </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-3/4 max-lg:w-full justify-start  ">
      <div className="flex flex-col gap-4 max-lg:hidden">
        <h1 className="font-semibold text-4xl">{therapist?.first_name + ` ` + therapist?.last_name}</h1>
        <h4>London,UK</h4>
        <span className="flex gap-3 flex-wrap">
            <TagModule   title={therapist?.work_field?.title} />
  
        </span>
      </div>
        <p className="text-justify">
      {therapist?.about_me}
        </p>
        <div className="flex flex-col gap-2 lg:hidden">
        <Link href={"/therapist-info"} className="text-blue dark:text-blue-200 dark:border-neutral-500 rounded-2xl font-medium cursor-pointer text-center w-full border-black border p-3 h-12">
          View Profile
        </Link>
        <button className=" text-white dark:bg-blue-200 dark:text-deepBlue bg-blue rounded-2xl font-medium p-3 h-12 ">
          Book Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default TherapistsCard;
