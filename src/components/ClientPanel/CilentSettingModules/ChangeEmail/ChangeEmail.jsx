import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const ChangeEmail = ({setShowMenu}) => {
    const [step,setStep] = useState("step1")
    const [EmailDetails,setEmailDetails] = useState("")
  return (
    <div className="col gap-4 rounded-xl h-full w-full bg-white p-6 max-lg:h-screen  lg:px-36">
        {step=="step1"&&<Step1 setShowMenu={setShowMenu} setStep={setStep}/>}
        {step=="step2"&&<Step2 setStep={setStep}  />}
        {step=="step3"&&<Step3 setStep={setStep}  />}
       
    </div>
  );
};

export default ChangeEmail;
