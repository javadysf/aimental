import { KeyboardArrowLeft } from "@mui/icons-material"

const Step2 = ({setStep}) => {

const ContinueFunc=()=>{
    setStep("step3")
}

  return (
    <div className="col gap-4">
        <div  className="flex gap-4 items-center">
     <KeyboardArrowLeft className="!cursor-pointer !w-8 !h-8" onClick={()=>setStep("step1")} />
        <h2 className=" text-lg font-semibold">Please Enter your New Email</h2>
        </div>
            <input
    type="email"
      placeholder={"Example@gmail.com"}
      className="border border-zinc-600 rounded-[12px] p-2"
    />
           <button onClick={()=>ContinueFunc()} className="blue-button flex text-base self-end w-fit " >Continue</button>
    </div>
  )
}

export default Step2