import TagModule from "../../common/TagModule"
import Booknowbtn from "../../common/BookNowButton"
import JohnPicture from "../../../assets/img/therapistslist/male.png" 
import Image from "next/image"

const TherapistAvailability = () => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 p-6 max-lg:p-3 gap-3 dark:text-neutral-300 rounded-2xl col ">
    <h2 className="title-2 text-xl" >John Petrucci</h2>
    <div className="flex gap-3 max-lg:col ">
    <Image alt="tp-pic" className="rounded-xl w-64 h-64 max-lg:self-center max-lg:w-3/5" src={JohnPicture}  />
    <div className="col gap-2 justify-between w-full">
    <h4>Next Availability</h4>
    <h4 className="font-semibold">Wed ,June 26</h4>
    <span className="flex gap-2 max-lg:gap-1 flex-wrap justify-evenly">
    <TagModule css={" !px-6 "} title={"4:30 PM"}/>
    <TagModule  css={" !px-6 "}title={"6:30 PM"}/>
    <TagModule css={" !px-6 "} title={"10:30 PM"}/>
    <TagModule css={" !px-6 "} title={"4:30 PM"}/>
    <TagModule css={" !px-6 "} title={"20:30 PM"}/>
    <TagModule css={" !px-6 "} title={"4:30 PM"}/>
    </span>
    <span className="flex w-full justify-between gap-2 ">
    <span className="white-button w-1/2 px-1 text-center py-2 h-12 max-lg:text-sm text-sm  max-lg:!w-[200px] content-center" > More availability </span>
    <span className="blue-button w-1/2 px-2 text-center py-2 h-12 max-lg:text-sm  max-lg:!w-[200px] content-center" > Book Now </span>
    
    </span>
    </div>
    </div>
      </div>
  )
}

export default TherapistAvailability