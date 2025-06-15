import React, { useState } from 'react'
import StepHeader from './StepHeader'
import DatePickerInput from '../ClientLogin.jsx/ClientLoginModule/DatePickerInput'
import { uploadCover } from '../../../core/services/api/Questionnaire/questionnaire'
import { useTheme } from 'next-themes';
import Image from 'next/image';



const Step1 = ({handleNextClick,therapistInfo,settherapistInfo,setValues}) => {

  const [avatar,setavatar] = useState("")
  const [errMsg,setErrMsg]=useState("none")
	const { theme, setTheme } = useTheme();
  
  const uploadAvatar =async(e)=>{
    const res = await uploadCover({name:e.target.files[0].name,file:e.target.files[0],description:"ok",is_public:true})
    setavatar(res.file)
    settherapistInfo({...therapistInfo,avatar:res.id})
  }

  const inputsValidator = ()=>{
    return true
    // if(therapistInfo?.first_name=="" || therapistInfo?.last_name=="" || therapistInfo?.gender=="" || therapistInfo?.birth_day=="" )
    // {
      
    //   return false;
    // }
    // else {
    //   return true
    // }
  }

    const [characterCount,setcharacterCount] = useState(0)
  return (
    <div className='col   gap-2 center'>
     <StepHeader/>
        <div className='col gap-2 max-lg:gap-[5px] w-full'>
      <h4 className='font-medium text-md'>fill your information</h4>
      <div className="w-48 rounded-full col self-center items-center">
        { avatar?<Image width={96} height={96} alt='avatar' src={avatar} className='rounded-full w-24 h-24' />:

      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill={theme=='dark'?"#454545":"#e7e7e7"} className="dark:!text-zinc-700 bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
        }
          <input
          type="file"
          onChange={(e)=>uploadAvatar(e)}
          accept="image/*"
          className="hidden"
          id="image-input"
        />
        {
          avatar?<p onClick={()=>setavatar("")} className=' cursor-pointer text-sm text-[#B3261E] dark:text-[#FBABA6]'>Remove profile picture</p>:  <label
          htmlFor="image-input"
          className=" dark:text-blue-300 max-lg:text-xs self-center font-medium text-sm text-blue px-4 rounded cursor-pointer"
        >
          Add profile picture
        </label>
        }
          </div>
          {
        errMsg=="show"&&<p className='text-xs dark:text-blue-300 max-lg:text-xs '> * fill required inputs </p>
        }
      <input value={therapistInfo?.first_name} onChange={(e)=>setValues(e)} required={true} name="first_name" className='register-input' placeholder='First Name *  ' />
      <input value={therapistInfo?.last_name} onChange={(e)=>setValues(e)} required={true} name="last_name" className='register-input' placeholder='Last Name *  ' />
   <DatePickerInput settherapistInfo={settherapistInfo} therapistInfo={therapistInfo} />
      <select
          defaultValue={"sex"}
          onChange={(e)=>setValues(e)} required={true} name="gender"
          className={`  rounded-xl text-md outline-none dark:text-neutral-300 font-medium h-10 p-2 text-neutral-800 border border-zinc-400 placeholder-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800`}
        >
          <option className='!text-zinc-400' disabled value={"sex"}>Sex *</option>
          <option>Man</option>
          <option>Woman</option>
        </select>
      <textarea onChange={(e)=>{setcharacterCount(e.target.value.length);setValues(e)}} name='about_me'  maxLength={1000} className='register-input h-24' placeholder='Write about yourself... ' />
      <span className="text-xs"> {characterCount} / 1000 character </span>
        </div>
        <button onClick={()=>{inputsValidator()?handleNextClick():setErrMsg("show")}} className='transition duration-300 ease-in-out hover:bg-deepBlue hover:text-blue-50 blue-button w-full ' >Next</button>
        <p className='text-xs'>You can also change it from Profile{`>`}Edit profile</p>
    </div>
  )
}

export default Step1