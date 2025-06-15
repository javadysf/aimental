import StepHeader from "./StepHeader"
import SearchInput from "../../common/SearchInput"
import { useSelector } from "react-redux"
import { getMethods } from "../../../core/services/api/TherapistProfile/TherapistProfile"
import { useEffect, useState } from "react"
import TagModule from "../../common/TagModule"
import Tags from "./Tags"


const Step3 = ({handleNextClick,setValues,therapistInfo,settherapistInfo}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [TherapistMethods,setTherapistMethods] = useState([])
  const [filteredMethods, setfilteredMethods] = useState([]);
  const [selectedMethods, setselectedMethods] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const methods = async()=>{
    setTherapistMethods(await getMethods())
  }
  useEffect(()=>{
 methods()
  },[])
  useEffect(() => {
    const filtered = TherapistMethods?.filter((work) => work.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setfilteredMethods(filtered);
  }, [searchTerm,TherapistMethods]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (work,name) => {
    setselectedMethods([...selectedMethods,work]);
    settherapistInfo({...therapistInfo,therapeutic_approaches:[...therapistInfo.therapeutic_approaches,{id:work.id,title:work.title}]})
    setIsOpen(false);
  };

  return (
    <div className='col  gap-4 center'>
    <StepHeader/>
      <span className="col mt-8 gap-3 w-full">
    <h3 className="font-medium">select your treatment method</h3>
    <SearchInput searchedValue={searchTerm}  onClick={()=>setIsOpen(true)}   onChange={(e)=>handleSearch(e)} placeholder={"Search in Treatment methods"} />
    {isOpen && (
        <ul className="w-full bg-white rounded-xl shadow-md max-h-60 overflow-y-auto">
          {filteredMethods?.map((work) => (
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
{selectedMethods&&selectedMethods?.map((item)=><Tags  key={item.id} onClick={()=>{setselectedMethods(selectedMethods=>selectedMethods.filter(method => method.id !== item.id))}} title={item.title} />)}
    </span>
      </span>
       <button onClick={()=>handleNextClick()} className='blue-button w-full ' >Next</button>
       <p onClick={()=>handleNextClick()} className="cursor-pointer text-sm text-blue font-medium" >skip</p>
       <p className='text-xs'>You can also change it from Profile{`>`}Edit profile</p>
   </div>
  )
}

export default Step3