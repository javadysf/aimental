import { KeyboardArrowLeft } from "@mui/icons-material"
import PasswordInput from "../PasswordInput"

const Step1 = ({setStep,setShowMenu}) => {

    const UpdateEmail = ()=>{
        setStep("step2")
    }

  return (
    <>
       <span className="col gap-2 relative">
        <span className="flex gap-2">

        <KeyboardArrowLeft onClick={()=>setShowMenu(false)} className=" lg:!hidden !cursor-pointer" />
        <h3 className="flex font-semibold">
        Please Enter your password
        </h3>
        </span>
        <input
          type="email"
          placeholder={"Example@gmail.com"}
          className="border border-zinc-600 rounded-[12px] p-2"
        />
      </span>
      <PasswordInput
        placeholder={"Enter Your Password"}
      />
         <button onClick={()=>UpdateEmail()} className="blue-button flex text-base self-end w-fit " >Update email address</button>
    </>
  )
}

export default Step1