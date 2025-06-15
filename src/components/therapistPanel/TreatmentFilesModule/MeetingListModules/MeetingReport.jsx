import { KeyboardArrowLeft } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Quill from "../../EventManagerModules/AddAppointmentModules/Quill"
import MeetingDetail from "./MeetingReportModules/MeetingDetail"
import UploadButton from "./MeetingReportModules/UploadButton"


const MeetingReport = () => {
  return (
    <div className="col p-6 gap-6 w-full h-[calc(100vh-96px)] overflow-auto">
    <div className="flex w-full p-2 justify-between border-b border-zinc-400">
      <h2 className="title-2"> <Link to={"/therapist-dashboard/TreatmentFiles"}><KeyboardArrowLeft className="!w-10 !h-10 cursor-pointer" /> </Link>Ruth S. Mills</h2>

      <div className="flex gap-2">
  <Link to={"/therapist-dashboard/TreatmentFiles/pationreport"} className=" white-button !w-fit dark:text-blue-300">
        cancel 
      </Link> 
      <Link className="w-fit blue-button dark:text-deepBlue dark:bg-blue-300">
        save
      </Link> 
    </div>
    </div>
    <div className="flex gap-4 w-full">
    <div className="col gap-4 w-full text-neutral-800">
        <div className="col gap-2">
            <h3 className="font-semibold title-2 !text-2xl ">Overall Report</h3>
        <div className="border rounded-2xl p-2 w-full dark:border-neutral-500">
        <Quill/>
        </div>
        </div>
        <div className="col gap-2 w-fit">
        <h3 className="title-2 !text-2xl "> Upload File </h3>
       <UploadButton/>
        </div>
    </div>
<MeetingDetail/>
    </div>
    </div>
  )
}

export default MeetingReport