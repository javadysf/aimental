"use client"
import SearchInput from "../common/SearchInput";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Forms from "./QuestionnairesModules/Forms";
import { useEffect, useState } from "react";
import { getQuestionnaire } from "../../core/services/api/Questionnaire/questionnaire";
import AddQuestionnairMenu from "./QuestionnairesModules/AddQuestionnairMenu";
import Link from "next/link";
import SortMenu from "./QuestionnairesModules/SortMenu";


const Questionnaires = () => {
  const [searchedValues,setSearchedValues] = useState("")
  const [showSortMenu, setshowSortMenu] = useState(false);
  const [currentItems, setCurrentItems] = useState(null);
  const [refresh, setrefresh] = useState(false);
  const [questionnaires,setQuestionnaires] = useState([])
  const getQuestionnaires =async()=>{
    const res =await getQuestionnaire();
           setQuestionnaires(res.results);
  }
  const SearchHandler=(e)=>{
    setSearchedValues(e.target.value)
    console.log(questionnaires,e.target.value);
    const filtered = questionnaires?.filter((questionnaire) => questionnaire.title.toLowerCase().includes(e.target.value))
    setCurrentItems(filtered)
  }
  useEffect(() => {
    getQuestionnaires()
  },[refresh])
console.log(questionnaires);
  return (
    <div className="w-full col m-4 p-4 h-[calc(100vh-96px)] max-lg:m-0 max-lg:p-2 bg-zinc-50 dark:bg-zinc-800 rounded-2xl gap-6 ">
      <div className="flex w-full p-2 justify-between border-b border-zinc-400">
        <h2 className="title-2 max-lg:text-base ">Questionnaires </h2>
        <Link href={"/therapist/questionnaires/newform"}  className=" max-lg:hidden !bg-blue dark:!bg-blue-50 !rounded-xl dark:!text-deepBlue !text-base !px-5 !normal-case !py-2 !text-white">
        Create new Form
        </Link> 
        <AddQuestionnairMenu/>
      </div>
    
      <div className="flex gap-2 px-5 max-lg:p-0 relative">
        <SearchInput  searchedValue={searchedValues} onChange={(e)=>SearchHandler(e)}  placeholder={"Search Form"} css={"bg-zinc-50 dark:bg-zinc-800 "}  />
        <button className="flex gap-1 border-zinc-600 border rounded-xl dark:text-neutral-300 center p-2">
          <SwapVertIcon onClick={()=>setshowSortMenu(!showSortMenu)} /> Sort
        </button>
        {showSortMenu && <SortMenu setshowSortMenu={setshowSortMenu} questionnaire={currentItems} setquestionnaire={setCurrentItems} />}

      </div>
      <Forms currentItems={currentItems} setCurrentItems={setCurrentItems}  setrefresh={setrefresh} refresh={refresh} questionnaires={questionnaires} setQuestionnaires={setQuestionnaires}/>
  </div>
  )
}

export default Questionnaires