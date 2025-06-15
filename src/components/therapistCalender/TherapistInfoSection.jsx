import Link from "next/link";
import malePic from "../../assets/img/therapistcalender/man.png"

import BookNowButton from "../common/BookNowButton"
import Image from "next/image";

const TherapistInfoSection = () => {
  return (
    <div className="bg-neutral-100 rounded-2xl p-4 gap-3 h-fit w-[30%] max-lg:w-full col dark:bg-zinc-800">
      <div className="col max-lg:flex-row w-full gap-3 ">
    <Image width={150} height={150} alt="tp-pic" src={malePic} className="max-lg:w-[40%]" />
    <span className="max-lg:flex-col gap-2">
    <h2 className="text-xl font-semibold">John Petrucci</h2>
    <h4>New York , Us</h4>
    <span className="lg:hidden text-sm ">60 min | virtual </span>
    </span>
      </div>
    <Link href={"/therapist-info"} className="border rounded-2xl p-1 items-center h-10 text-blue dark:text-neutral-100 text-center content-center ">View Profile</Link>
<BookNowButton css={"max-lg:hidden !rounded-2xl h-10 "}/> 
    </div>
  )
}

export default TherapistInfoSection