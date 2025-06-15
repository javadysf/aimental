import { EyeIcon, Eyeslash } from "@/assets/img/images";
import { useState } from "react";

const PasswordInput = ({title,placeholder,Passwords,setPasswords,name}) => {

    const [inputType,setinputType] = useState(false)
  return (
    <span className="col gap-2 relative">
    {title&&<span className="flex font-semibold">
     {title}
      <h5 className="text-[#B3261E]">*</h5>
    </span>}
    <input
    value={Passwords?.name}
    type={inputType?"text":"password"}
      placeholder={placeholder}
      onChange={(e)=>setPasswords({...Passwords,[name]:e.target.value})}
      className="border border-zinc-600 rounded-[12px] p-2"
    />
    <span onClick={()=>setinputType(!inputType)} className={` ${title?"top-10":"top-2"} absolute right-4 cursor-pointer`}>
     {
      inputType?Eyeslash:EyeIcon

     }
    </span>
    </span>
  )
}

export default PasswordInput