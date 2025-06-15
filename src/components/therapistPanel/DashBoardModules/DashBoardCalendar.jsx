import { useState } from "react"
import CalendarModule from "../../../components/therapistCalender/CalenderModule"
import UpComing from "../../common/UpComing"

const DashBoardCalendar = ({setShowDetails}) => {

  return (
    <div className="col lg:w-1/2 bg-neutral-100 rounded-2xl dark:bg-zinc-800 gp8 max-lg:p-2">
        <div className="flex flex-col">
            <h1 className="font-semibold text-xl max-lg:text-lg">Calander</h1>
        <CalendarModule/>
        </div>
        <div className="w-full flex flex-col gap-4">
        <h1 className="font-semibold text-xl max-lg:text-lg ">Upcoming</h1>
        <UpComing setShowDetails={setShowDetails}/>
        <UpComing setShowDetails={setShowDetails}/>
        <UpComing setShowDetails={setShowDetails}/>
        </div>

    </div>
  )
}

export default DashBoardCalendar