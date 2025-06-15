import SearchInput from "../../common/SearchInput"
import MeetingDataGrid from "./MeetingListModules/MeetingDataGrid"



const MeetingList = () => {
  return (
    <div className="w-full col m-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl gap-6 h-[calc(100vh-96px)]  ">
    <div className='flex justify-between items-center gap-2 '>
    <h2 className='title-2 w-1/5'>Meeting List</h2>
    <div className='w-3/5' >
    <SearchInput/>
    </div>
    <span className='blue-button w-44'> Gadget Reports</span>
    </div>
            <MeetingDataGrid/>
        </div>
  )
}

export default MeetingList