import { KeyboardArrowLeft } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Quill from "../../EventManagerModules/AddAppointmentModules/Quill"

const EditReport = () => {
  return (
    <div className="col p-6 gap-6 w-full h-[calc(100vh-96px)] overflow-auto">
    <div className="flex w-full p-2 justify-between border-b border-zinc-400">
      <h2 className="title-2"> <Link to={"/therapist-dashboard/TreatmentFiles/meetinglist"}><KeyboardArrowLeft className="!w-10 !h-10 cursor-pointer" /> </Link>Ruth S. Mills</h2>
      <div className="flex gap-2">
  <Link to={"/therapist-dashboard/TreatmentFiles/pationreport"} className=" dark:text-blue-300 white-button !w-fit">
        cancel 
      </Link> 
      <Link className="w-fit blue-button dark:bg-blue-300 dark:text-deepBlue">
        save
      </Link> 
    </div>
    </div>
    <div className="col gap-4 w-full">
        <div className="col gap-2">
            <h3 className="font-semibold dark:text-neutral-300 ">Reason</h3>
        <div className="border rounded-2xl p-2 w-full">
        <Quill/>
        </div>
        </div>
    </div>
    <div className="col gap-4 w-full">
        <div className="col gap-2">
            <h3 className="font-semibold dark:text-neutral-300 ">Overall Report</h3>
        <div className="border rounded-2xl p-2 w-full">
        <Quill/>
        </div>
        </div>
    </div>
    <div className="col gap-4 w-full">
        <div className="col gap-2">
            <h3 className="font-semibold dark:text-neutral-300  ">Self Statement</h3>
        <div className="border rounded-2xl p-2 w-full">
        <Quill/>
        </div>
        </div>
    </div>
    <div className="col gap-4 w-full">
        <div className="col gap-2">
            <h3 className="font-semibold dark:text-neutral-300 ">Self Statement</h3>
        <div className="border rounded-2xl p-2 w-full">
        <Quill/>
        </div>
        </div>
    </div>
    <div className="col gap-4 w-full">
        <div className="col gap-2">
            <h3 className="font-semibold dark:text-neutral-300 ">Treatment Expectation</h3>
        <div className="border rounded-2xl p-2 w-full">
        <Quill/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default EditReport