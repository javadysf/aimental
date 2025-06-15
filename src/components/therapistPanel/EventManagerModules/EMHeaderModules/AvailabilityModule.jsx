import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SwitchButton from "./AvailabilityModules/SwitchButton";
import AddRemove from "./AvailabilityModules/AddRemove";
import TimePicker from "./AvailabilityModules/TimePicker";
const AvailabilityModule = ({name,AvailableTimes,setAvailableTime}) => {
  const [switchbtn, setSwitchbtn] = useState(false);
  const [expanded, setExpanded] = useState(false);



  const setStratedTime = (newValue)=>{
    setAvailableTime(AvailableTimes.map((item)=>item.day==name?{ ...item, startTime:newValue.$H + newValue.m } : item))
  }
  const setEndedTime = (newValue)=>{
    setAvailableTime(AvailableTimes.map((item)=>item.day==name?{ ...item, end_time:newValue } : item))
  }

  const handleToggle = (event) => {
    setExpanded((prevExpanded) => !prevExpanded);
  
  };
  const handleSwitch = (event) => {
    setSwitchbtn((Switchbtn) => !Switchbtn);
    !switchbtn&&setAvailableTime([...AvailableTimes,{"day":name}])
    switchbtn&&setAvailableTime(AvailableTimes?.filter((item)=>item.day!=name))
  };
console.log(AvailableTimes);

  return (
    <div className="availability relative">
      <div className="absolute top-2 left-4 z-10" >
      <SwitchButton name={name} checked={switchbtn}  handleToggle={handleSwitch} />
      </div>
      <Accordion 
     disabled={switchbtn?false:true}
        expanded={expanded}
        className={`border ${expanded&&"border-blue dark:!border-blue-300"} !rounded-2xl !shadow-none`}
      >
        <AccordionSummary className="flex ">
          <div className="w-full flex justify-end items-center">
            <KeyboardArrowDownIcon onClick={handleToggle} />
          </div>
        </AccordionSummary>
        {switchbtn&&
        
        <AccordionDetails  className="flex gap-2">
          <div className="flex justify-between w-full center">
            <div className="col gap-3">
       
          <div className="flex justify-start gap-2 items-center ">
   <TimePicker  onChange={setStratedTime}/> <span className="">-</span> <TimePicker onChange={setEndedTime} /> 
          </div>
            </div>
        <AddRemove />
          </div>
        </AccordionDetails>
        }
      </Accordion>
    </div>
  );
};

export default AvailabilityModule;
