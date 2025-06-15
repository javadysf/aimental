import StepHeader from "./StepHeader"
import SearchInput from "../../common/SearchInput"
import { getSpecialization, getTPProfile } from "../../../core/services/api/TherapistProfile/TherapistProfile";
import { useEffect, useState } from "react";
import Tags from "./Tags"
import { TherapistRegister } from "../../../core/services/api/Auth/auth";
import { useDispatch } from "react-redux";
import { setTPAvatar, setTPProfile } from "../../../redux/features/UserProfile/TPProfile";
import { getDocuments } from "../../../core/services/api/Documents/documents";

const Step4 = ({handleNextClick,setValues,therapistInfo,settherapistInfo}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [Specialization,setSpecialization] = useState([])
  const [filteredSp, setfilteredSp] = useState([]);
  const [selectedSp, setselectedSp] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch()
  
  const getProfileHandler = async()=>{
    const res = await getTPProfile()
    dispatch(setTPProfile(res)) 
    dispatch(setTPAvatar(await getDocuments(res?.avatar)))
  }


  const getSp = async()=>{
    setSpecialization(await getSpecialization())
  }
  useEffect(()=>{
    getSp()

  },[])
  useEffect(() => {
    const filtered = Specialization?.filter((work) => work.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setfilteredSp(filtered);
  }, [searchTerm,Specialization]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (work,name) => {
    setselectedSp([...selectedSp,work]);
    console.log(work);
    settherapistInfo({...therapistInfo,work_field:[...therapistInfo.work_field,{id:work.id,title:work.title}]})
    setIsOpen(false);
  };

  const TherapistRegisterHandler = async()=>{
    const res = await TherapistRegister(therapistInfo)
    console.log(res);
   getProfileHandler()
    handleNextClick();
    }

  return (
    <div className='col  gap-4 center'>
    <StepHeader/>
      <span className="col mt-8 gap-3 w-full">
    <h3 className="font-medium">Select your Specialization</h3>
    <SearchInput searchedValue={searchTerm}  onClick={()=>setIsOpen(true)}   onChange={(e)=>handleSearch(e)} placeholder={"Search in Specialization"} />
    {isOpen && (
        <ul className="w-full bg-white rounded-xl shadow-md max-h-60 overflow-y-auto">
          {filteredSp?.map((work) => (
            <li
              key={work.id}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(work,"therapeutic_approaches")}
            >
              {work.title}
            </li>
          ))}
        </ul>
      )}
    <span className="rounded-2xl flex gap-2 p-2 flex-wrap min-h-20 border border-zinc-600" >
    {selectedSp&&selectedSp?.map((item)=><Tags  key={item.id} onClick={()=>{setselectedSp(selectedSp=>selectedSp.filter(method => method.id !== item.id))}} title={item.title} />)}
    </span>
      </span>
       <button onClick={()=>{TherapistRegisterHandler();handleNextClick()}} className='blue-button w-full ' >Next</button>
       <p onClick={()=>handleNextClick()} className="cursor-pointer text-sm text-blue font-medium" >skip</p>
       <p className='text-xs'>You can also change it from Profile{`>`}Edit profile</p>
   </div>
  )
}

export default Step4