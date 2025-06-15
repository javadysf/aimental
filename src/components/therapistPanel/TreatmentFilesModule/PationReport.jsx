import { KeyboardArrowLeft } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import Report from "./PationReportModule/Report"
import PationProfile from "./PationReportModule/PationProfile"


const PationReport = () => {
  return (
    <div className="col p-6 gap-6 w-full h-[calc(100vh-96px)] overflow-auto">
    <div className="flex w-full p-2 justify-between border-b border-zinc-400">
      <h2 className="title-2"> <Link to={"/therapist-dashboard/TreatmentFiles/meetinglist"}><KeyboardArrowLeft className="!w-10 !h-10 cursor-pointer" /> </Link>Ruth S. Mills</h2>

      <div className="flex gap-2">
 <Link to={"/therapist-dashboard/TreatmentFiles/editpationreport"}>
 <Button className="!bg-blue dark:!bg-blue-50 !rounded-xl dark:!text-deepBlue !text-base !px-5 !normal-case !py-2 !text-white">
        Edit 
      </Button>
 </Link>  
    </div>
    </div>
    <div className="flex gap-4 w-full">
    <Report/>
    <PationProfile/>
    </div>
    </div>
  )
}

export default PationReport