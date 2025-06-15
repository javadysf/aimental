"use client"
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"
import Link from "next/link"
import { getClientQuestionnaire } from "../../../core/services/api/Questionnaire/questionnaire";


const ClientQuestionnaires = () => {
  const [questionnaires,setquestionnaires] = useState();
  const ClientQuestionnaires = async()=>{
        const res = await getClientQuestionnaire()
        setquestionnaires(res)
  }
  useEffect(()=>{
ClientQuestionnaires();
  },[])
  return (
    <div className="col gap-6 h-fit   bg-zinc-50 px-6 py-4 rounded-2xl dark:bg-zinc-800 dark:text-neutral-300">
    <h1 className="title-2 text-xl ">Questionnaires</h1>
    <span className="col px-6 gap-3">
      {questionnaires?.slice(0,3)?.map(({title}, index)=>
    <span key={index} className="col gap-2" >
        <h4 className="font-semibold text-lg">{title}</h4>
        <h6 className="text-sm">Submited jun 03, 2024</h6>
        <hr className="text-zinc-400"/>
      </span> 
      )}

      
    </span>
    <Link href={"/client/questionnaires"} className="text-blue self-end text-sm px-6 hover:text-blue-300 dark:text-blue-300 " >Show more</Link>

  </div>
  )
}

export default ClientQuestionnaires