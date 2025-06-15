import { useState } from "react";
import FileUploade from "./PersonalDataEditModules/FileUpload"
import { CheckCircle } from "@mui/icons-material";
const PersonalDataEdit = ({editedprofile,  
  setEditedProfile}) => {
    const [error, setError] = useState('');
  const setValues = (e)=>{
    setEditedProfile({...editedprofile,[e.target.name]:e.target.value})
  }
  const CreditCardValidate=(e)=>{
    const value = e.target.value.replace(/\D/g, '');
    validateCardNumber(value);
    setEditedProfile({...editedprofile,[e.target.name]:value})
  }
  const validateCardNumber = (number) => {
    const regex = /^\d{16}$/;
    if (!regex.test(number)) {
      setError('Invalid credit card number. Please enter a 16 digit number.');
    } else {
      setError('');
    }
  };
  return (
    <div className='col gap-4 w-full'>
        <h3 className=' text-xl font-semibold'>Bio</h3>
        <input value={editedprofile&&editedprofile?.first_name}  onChange={(e)=>setValues(e)} name="first_name" className='w-fit border rounded-xl p-2 outline-none dark:bg-zinc-800 dark:text-neutral-300' placeholder='first Name' />
        <input value={editedprofile&&editedprofile?.last_name}  onChange={(e)=>setValues(e)} name="last_name" className='w-fit border rounded-xl p-2 outline-none dark:bg-zinc-800 dark:text-neutral-300' placeholder='last name' />
        <input value={editedprofile&&editedprofile?.birth_date} type="date" onChange={(e)=>setValues(e)} name="birth_date" className='w-fit border rounded-xl p-2 outline-none dark:bg-zinc-800 dark:text-neutral-300' placeholder='birth date' />
        <input value={editedprofile&&editedprofile?.gender}  onChange={(e)=>setValues(e)} name="gender" className='w-fit border rounded-xl p-2 outline-none dark:bg-zinc-800 dark:text-neutral-300' placeholder='gender' />
        <hr className='text-zinc-400'/>
        <h3 className='text-xl font-semibold'>Bank Account *</h3>
        <input value={editedprofile&&editedprofile?.credit_card_number} onChange={(e)=>CreditCardValidate(e)} name="credit_card_number" className='lg:w-1/2 border rounded-xl p-2 outline-none dark:bg-zinc-800 dark:text-neutral-300' placeholder='Enter your 16 digit credit card number' />
        {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}
      {editedprofile?.credit_card_number.length === 16 && !error && (
        <div className="flex gap-2 items-center mb-4">
        <p className="text-[#008000] text-sm ">Valid credit card number</p>
        <CheckCircle className="!text-[#008000] !w-4 !h-4 " color="#008000" />
        </div>
      )}<hr className='text-zinc-400' />
        <h3 className='text-xl font-semibold'>Location *</h3>
        <input value={editedprofile&&editedprofile?.country} onChange={(e)=>setValues(e)} name="country" className='w-fit border rounded-xl p-2 outline-none dark:bg-zinc-800 dark:text-neutral-300' placeholder='country' />
        <input value={editedprofile&&editedprofile?.city} onChange={(e)=>setValues(e)} name="city" className='w-fit border rounded-xl p-2 outline-none dark:bg-zinc-800 dark:text-neutral-300' placeholder='city' />
        <p>4845-562</p>
        <hr className='text-zinc-400' />
        <h3 className='text-xl font-semibold'>medical certificates*</h3>
        <FileUploade editedprofile={editedprofile} setEditedProfile={setEditedProfile}  />

        </div>
  )
}

export default PersonalDataEdit