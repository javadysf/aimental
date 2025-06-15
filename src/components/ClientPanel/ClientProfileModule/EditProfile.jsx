import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DatePickerInput from "../../Login/ClientLogin.jsx/ClientLoginModule/DatePickerInput";
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import { uploadCover } from "../../../core/services/api/Questionnaire/questionnaire";
import { useDispatch } from "react-redux";
import { editCLProfile } from "../../../core/services/api/ClientProfile/ClientProfile";
import { setCLProfile } from "../../../redux/features/UserProfile/CLProfile";
import { setReload } from "../../../redux/features/Reload/Reload";
import Image from "next/image";
import { getAddictionHistory, getClientEducation, getClientOccupation, getClientSex, getEconomicStatus, getMedicalHistory, getMeritalStatus, getPhysicalStatus } from "@/core/services/api/BaseInfo/BaseInfo";

const EditProfile = ({ setEditmode }) => {
  const [Education,setEducation] = useState("")
  const [EconomicStatus,setEconomicStatus] = useState("")
  const [Occupation,setOccupation] = useState("")
  const [HistoryofAddiction,setHistoryofAddiction] = useState("")
  const [MedicalHistory,setMedicalHistory] = useState("")
  const [PhysicalCondition,setPhysicalCondition] = useState("")
  const [MaritalStatus,setMaritalStatus] = useState("")
  const [SexualOrientation,setSexualOrientation] = useState("")


  useEffect(()=>{
    const getClientPfOptions =async()=>{
      setEducation(await getClientEducation())
      setEconomicStatus(await getEconomicStatus())
      setOccupation(await getClientOccupation())
      setHistoryofAddiction(await getAddictionHistory())
      setMedicalHistory(await getMedicalHistory())
      setPhysicalCondition(await getPhysicalStatus())
      setMaritalStatus(await getMeritalStatus())
      setSexualOrientation(await getClientSex())
    }
    getClientPfOptions()
  },[])
console.log(Education);
    const dispatch = useDispatch()
    const [avatar,setAvatar]=useState(null)
  const Profile = useSelector((state) => state.CLProfileSlice).profile;
  const CLAvatar = useSelector((state) => state.CLProfileSlice).avatar
  const [ClientDetail, setClientDetail] = useState({
    education: "",
    job: "",
    economic_situation_status: "",
    drug_use_status: "",
    drug_used_description: "",
    addiction_status: "",
    addiction_description: "",
    physical_condition: "",
    disability_type: "",
    marital_status: "",
    sexual_orientation: "",
    avatar: CLAvatar?.id,
    gender: "",
    birth_date: Profile?.birth_date,
    first_name: Profile?.first_name,
    last_name: Profile?.last_name,
  });
  const setValues = (e)=>{
    setClientDetail({...ClientDetail,[e.target.name]:e.target.value})
  }
  
  const uploadAvatar =async(e)=>{
    const res = await uploadCover({name:e.target.files[0].name,file:e.target.files[0],description:"ok",is_public:true})
    setClientDetail({...ClientDetail,avatar:res.id})
    setAvatar(res.file)
  }


  const handleEditPf = async()=>{
    const res = await editCLProfile(ClientDetail)
    dispatch(setCLProfile([res]))
    dispatch(setReload(true))
}
  return (
    <div className="col w-1/2 max-lg:w-full bg-zinc-50 dark:bg-zinc-800 p-3 gap-2 max-lg:overflow-visible overflow-y-scroll rounded-2xl">
      <div className="flex justify-between center">
        <h3 className="font-semibold text-2xl dark:text-neutral-300">
          Profile
        </h3>
        <span className="flex gap-3">
          <span
            onClick={() => setEditmode(false)}
            className="white-button text-center border-[#B3261E] dark:border-blue-300 text-[#B3261E] !w-fit !px-4  !py-3"
          >
            {" "}
            Cancel
          </span>
          <span onClick={()=>{handleEditPf();setEditmode(false)}} className="blue-button text-center !w-fit !px-4  !py-3">
            Save
          </span>
        </span>
      </div>
      <span className="h-52 w-fit col gap-2 items-center">
        {
            ClientDetail?.avatar?<>
              <Image
              alt="avatar"
              width={160}
              height={160}
          className="w-40 h-40
 rounded-full border-4 border-blue"
          src={avatar?avatar:CLAvatar.file}
        />
        <span onClick={()=>setClientDetail({...ClientDetail,avatar:null})} className="flex cursor-pointer gap-2 transition duration-300 ease-in-out hover:text-[#B3261E]">
          <svg
            onClick={""}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className=" cursor-pointer bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
          <span className="text-xs font-medium mb-2 text-[#B3261E]">Remove</span>
        </span>
            </>:<span className="col cursor-pointer items-center transition duration-300 ease-in-out hover:text-[#B3261E]">
            <AccountIcon className="!w-40 !h-40 !text-zinc-400"/>     <input
          type="file"
          onChange={(e)=>uploadAvatar(e)}
          accept="image/*"
          className="hidden"
          id="image-input"
        />
            <label
          htmlFor="image-input"
          className=" dark:text-blue-300 self-center  font-medium text-xs text-blue px-4 rounded cursor-pointer"
        >
          Add profile picture
        </label>
            </span>
            
        }
      
      </span>
      <input
        required={true}
        name="first_name"
        value={ClientDetail.first_name}
        onChange={e=>setValues(e)}
        className="register-input"
        placeholder="First Name *  "
      />
      <input
      value={ClientDetail.last_name}
      onChange={e=>setValues(e)}
        name="last_name"
        className="register-input"
        placeholder="Last Name *  "
      />
  <DatePickerInput setClientDetail={setClientDetail} ClientDetail={ClientDetail}  />
      <select
        defaultValue={"country"}
        className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
      >
        <option value={"country"}>gender</option>
        <option>Man</option>
        <option>Woman</option>
        <option>Other</option>
      </select>
      <select
        defaultValue={"country"}
        className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
      >
        <option value={"country"}>Education</option>
        {Education&&Education?.map(({title,id})=><option key={id} >{title}</option>)}

      </select>
      <select
        defaultValue={"country"}
        className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
      >
        <option value={"country"}>Occupation</option>
        {Occupation&&Occupation?.map(({title,id})=><option key={id} >{title}</option>)}

      </select>
      <select
        defaultValue={"country"}
        className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
      >
        <option value={"country"}>Economic status</option>
        {EconomicStatus&&EconomicStatus?.map(({title,id})=><option key={id} >{title}</option>)}
      </select>
      <select
        defaultValue={"country"}
        className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
      >
        <option value={"country"}>History of Addiction</option>
        {HistoryofAddiction&&HistoryofAddiction?.map(({title,id})=><option key={id} >{title}</option>)}
      </select>
      <select
        defaultValue={"country"}
        className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
      >
        <option value={"country"}>Medical History</option>
        {MedicalHistory&&MedicalHistory?.map(({title,id})=><option key={id} >{title}</option>)}
      </select>
      <select
        defaultValue={"country"}
        className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
      >
        <option value={"country"}>Physical Condition</option>
        {PhysicalCondition&&PhysicalCondition?.map(({title,id})=><option key={id} >{title}</option>)}
      </select>
      <select
        defaultValue={"country"}
        className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
      >
        <option value={"country"}>Marital Status</option>
        {MaritalStatus&&MaritalStatus?.map(({title,id})=><option key={id} >{title}</option>)}
      </select>
      <select
        defaultValue={"country"}
        className="rounded-xl text-sm outline-none font-medium h-9 p-2 border border-zinc-600 text-zinc-400 cursor-pointer bg-zinc-50 dark:bg-zinc-800"
      >
        <option value={"country"}>Sexual Orientation</option>
        {SexualOrientation&&SexualOrientation?.map(({title,id})=><option key={id} >{title}</option>)}
      </select>
    </div>
  );
};

export default EditProfile;
