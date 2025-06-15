"use client"
import SearchInput from "../common/SearchInput"
import UQDataGrid from "./ClientQuestionnairesModules/UQDataGrid"
import { useEffect, useState } from "react"
import { getClientQuestionnaire } from "../../core/services/api/Questionnaire/questionnaire"

const ClientQuestionnaires = () => {

  const [questionnaires,setquestionnaires] = useState();
  const [currentItems,setcurrentItems] = useState();
  const [searchedValue,setSearchedValues] = useState();

const searchHandler=(e)=>{
    setSearchedValues(e.target.value)
    const filtered = questionnaires?.filter((questionnaire) => questionnaire.title.toLowerCase().includes(e.target.value))
    setcurrentItems(filtered)
}

  const ClientQuestionnaires = async()=>{
        const res = await getClientQuestionnaire()
        setquestionnaires(res)
        setcurrentItems(res)
  }
  useEffect(()=>{
ClientQuestionnaires();
  },[])

  return (
    <div className="w-full col m-4 p-4 max-lg:m-0 bg-zinc-50 dark:bg-zinc-800 rounded-2xl max-lg:rounded-none gap-6 h-[calc(100vh-96px)]  ">

    <div className='flex justify-between max-lg:col max-lg:gap-4 items-center gap-2 '>
      <div className="flex self-start gap-1">
    <h2 className='title-2 max-lg:!text-base '>Questionnaires</h2>
      </div>
    <SearchInput searchedValue={searchedValue} onChange={(e)=>searchHandler(e)} css={"dark:bg-zinc-800 bg-zinc-50"}/>
    </div>
    <hr className=" text-zinc-400"/>
           <UQDataGrid questionnaires={currentItems} />
        </div>
  )
}

export default ClientQuestionnaires