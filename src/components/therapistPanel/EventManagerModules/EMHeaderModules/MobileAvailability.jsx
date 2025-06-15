import { KeyboardArrowLeft } from "@mui/icons-material"
import AvailabilityModule from "./AvailabilityModule"
// import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

    
    const WeekDays = [{
      id:"1",name:"Sunday"
    }, {
      id:"2",name:"Monday"
    }, {
      id:"3",name:"Tusday"
    }, {
      id:"4",name:"Wednesday"
    }, {
      id:"5",name:"Thursday"
    }, {
      id:"6",name:"Friday"
    }, {
      id:"7",name:"Saturday"
    }]
    const MobileAvailability = ({SetCurrentPage}) => {
        // const context  = useOutletContext();
        // const setshowFooter = context[1];
        useEffect(()=>{
            setshowFooter(false)
        },[])
  return (
    <div className="col gap-2 text-neutral-800 dark:text-neutral-300 gap-4 bg-white text-sm  dark:bg-neutral-800 ">
    <span className=" flex justify-start  items-center gap-3 font-normal ">
        <KeyboardArrowLeft onClick={()=>SetCurrentPage("Main")} className="!w-6 !h-6 " />
      <h4 className="text-lg max-lg:text-base">Available Time</h4>
    </span>
    <div className="col dark:bg-neutral-800 dark:text-neutral-100 gap-4 text-neutral-800 bg-white text-sm rounded-2xl">
            {
              WeekDays?.map(({id,name})=><AvailabilityModule key={id} name={name}/>)
            }


          <span className="flex justify-between center gap-2">
        <span className="white-button flex center w-full cursor-pointer">Cancel</span>
        <span className="blue-button flex center w-full">Create</span>
      </span>
          </div>
        </div>
  )
}

export default MobileAvailability