import { Backdrop, Button, MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react"
import { styled } from '@mui/material/styles';
import ContactList from "../../MessengerModules/MessengerInboxModules/ContactList"
import SwitchButton from "../../EventManagerModules/EMHeaderModules/AvailabilityModules/SwitchButton";
import CloseIcon from "@mui/icons-material/Close";
import { uploadCover } from "../../../../core/services/api/Questionnaire/questionnaire";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const AddQuestion = ({questions,setquestions,questionnaire,setquestionnaire,setdisplaycover,setEditMode,displaycover}) => {

  const [switchbtn, setSwitchbtn] = useState(questionnaire.is_timer?questionnaire.is_timer:false);
  const [showContacts,setShowContacts] = useState(false)
  const handleSwitch = () => {
    setSwitchbtn(!switchbtn);
    setquestionnaire({...questionnaire,is_timer:!switchbtn})
    setEditMode&&setEditMode(true)
  };
  const [cover,setcover] = useState({name:"",description:"ok",file:"",is_public:true})

  const handleUpload = async(e)=>{
    const res = await uploadCover({name:e.target.files[0].name,description:"ok",file:e.target.files[0],is_public:true})
    setdisplaycover(res.file)
    setquestionnaire({...questionnaire,cover:res.id})
  }
const questionForm =()=>{
  setquestions([...questions,{id:questions.length+1 ,question:{
    content: "",
    answer_type: "Short Answer",
    answer_config: {},
    required: false,
  }
  }])
}

 const removeCover=()=>{
  setdisplaycover(null)
  setEditMode(true)
  setquestionnaire({...questionnaire,cover : ""})
 }

//  useEffect(()=>{},[displaycover])

 const inputHandler = (e)=>{
    setquestionnaire({...questionnaire,[e.target.name] : e.target.value})
    setEditMode&&setEditMode(true)
 }

  return (
    <div className="self-start col bg-zinc-50 rounded-[32px] dark:bg-zinc-800 gp4 max-lg:w-full">
     <Button onClick={()=>questionForm()} className="!bg-blue dark:!bg-blue-300 !rounded-2xl dark:!text-deepBlue !text-base !px-5 !normal-case !py-3 !text-white">+ Add Question</Button>
     <span className="border p-3 rounded-2xl border-zinc-600 cursor-pointer dark:text-neutral-300 " onClick={()=>setShowContacts(true)} >Assign To</span>
     <Backdrop sx={{zIndex:"20"}} open={showContacts} >
     <div className="col w-[400px] bg-white text-neutral-800 rounded-2xl gap-4 px-5 py-4">
          <span className="  flex justify-between font-normal text-neutral-800 border-b border-zinc-400 p-2 ">
            <h4 className="text-lg">Choose Participation</h4>
            <CloseIcon className="cursor-pointer" onClick={()=>setShowContacts(false)} />
          </span>
          <ContactList isUpdate={false} questionnaire={questionnaire} setquestionnaire={setquestionnaire} />
          <span className="flex justify-between center gap-2">
            <span
              onClick={()=>setShowContacts(false)}
              className="white-button flex center w-full cursor-pointer"
            >
              Cancel
            </span>
            <span onClick={()=>setShowContacts(false)} className="blue-button flex center w-full">Done</span>
          </span>
        </div>
     </Backdrop>
     <SwitchButton css={"self-start"} name={"Timer"} checked={questionnaire.is_timer} handleToggle={handleSwitch} />
     <span className="flex gap-8 items-center dark:text-neutral-300 ">
 <input disabled={!questionnaire?.is_timer} value={questionnaire.max_response_time} onChange={(e)=>inputHandler(e)} type="number" name="max_response_time" className="border rounded-xl pl-2 p-2 dark:bg-zinc-800 dark:text-neutral-300 " placeholder="Set time" />
Minutes
     </span>
     {
      displaycover?     <div onClick={removeCover} className="flex p-3 w-full rounded-2xl text-sm  gap-2 border cursor-pointer center text-[#B3261E] dark:!text-blue-300 ">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
</svg>
Remove header image
      </div>:

     <Button
    className={`!bg-zinc-50 !rounded-xl !h-12 !font-medium  dark:!bg-zinc-800 dark:!border-zinc-400  !text-neutral-800  !normal-case `}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      sx={{border:"1px solid #262626",boxShadow:"none",fontWeight:500}}
    >
      <div className="flex gap-2 items-center text-blue dark:!text-blue-300 ">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
</svg>
Choose header image
      </div>
      <VisuallyHiddenInput type="file" onChange={(e)=>{handleUpload(e)}} />
    </Button>
     }
    </div>
  )
}

export default AddQuestion