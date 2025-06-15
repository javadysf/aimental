"use client"
import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { getQuestionnaireDetails } from "../../../core/services/api/Questionnaire/questionnaire";
import { useParams } from 'next/navigation';
import QuestionnaireTimer from "./NewFormModules/CreateFormModules/QuestionnaireTimer";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import { Button } from "@mui/material";
import BasicDatePicker from "../EventManagerModules/AddAppointmentModules/BasicDatePicker";
import TimePicker from "../EventManagerModules/EMHeaderModules/AvailabilityModules/TimePicker";
import { getDocuments } from "../../../core/services/api/Documents/documents";
import Link from "next/link";
import Image from "next/image";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const QuestionnairesDetails = () => {
  const router = useParams()
  const {id} = router
  const [details, setDetails] = useState([]);
  const [Qpic, setQpic] = useState(null);

  const getDetails = async () => {
    const p = await getQuestionnaireDetails(id)
    debugger
    setDetails(p);
    const res = await getDocuments(p.cover)
    setQpic(res?.file)
  };
  const Noy=(first,second,qId)=>{
    const nums=[];
    for (let index = first; index <= second;  index++) {
     nums.push(index)
      
    }
    return <span className="flex gap-8 flex-wrap max-lg:gap-6">
    {nums.map((item)=><span key={item} className="col gap-3 center "><input name="mybtnGroup" onClick={(e)=>handleAnswerChange(qId,e.target.value)} type="radio" value={item} /> <p>{item}</p>  </span>
    )}
    </span>
  }
  console.log(details);
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="w-full col m-4 p-4 max-lg:m-0 max-lg:p-2 bg-zinc-50 dark:bg-zinc-800 rounded-2xl gap-6 h-[calc(100vh-96px)] overflow-y-scroll  ">
   <div className="flex w-full p-2 justify-between border-b border-zinc-400">
        <h2 className="title-2 max-lg:text-base "> <Link href={"/therapist/questionnaires"} > <ArrowLeftIcon className="!w-8 !h-8 cursor-pointer" /> </Link>{details?.title} </h2>
      </div>
    <div className="col w-full p-4  gap-3 lg:px-44">
      {
       details?.is_timer&&
      <QuestionnaireTimer flag={false} minutes={details?.max_response_time}   />
      }
      <Image width={800} height={224} alt="question-pic"  className="w-full h-56 rounded-2xl " src={Qpic?Qpic:""} />
        <div className="col rounded-2xl border border-zinc-400 p-4 gap-4">
            <h2 className="font-semibold text-lg">
            {details?.title}
            </h2>
            <hr/>
            {details?.description}
        </div>
      {details?.questions?.reverse().map((question) => (
        <div  key={question.id} className="col gap-4 w-full border border-zinc-400 rounded-2xl p-4">
          <h4>
          {question?.content}
          </h4>
          <hr className="text-zinc-600" />
          {question?.answer_type=="Short Answer"&&<textarea className="h-40 border dark:border-[#B0B0B0] rounded-xl p-4 pb-10 dark:bg-neutral-800"  placeholder="write your comment..."></textarea>}
          {question?.answer_type=="Time"&&<TimePicker/>}
          {question?.answer_type=="Date"&&<BasicDatePicker/>}
          {question?.answer_type=="Linear Scale"&&   <span className="flex flex-wrap gap-12 max-lg:gap-4 center">
                <p>{question?.answer_config?.start_lable}</p>{" "}
                <span >{Noy(question?.answer_config?.from,question?.answer_config?.to,question?.id)}</span>
              
                <p>{question?.answer_config?.end_lable}</p>
              </span>}
          {question?.answer_type=="Paragraph"&&<textarea className="h-40 border dark:border-[#B0B0B0] rounded-xl p-4 pb-10 dark:bg-neutral-800"  placeholder="write your comment..."></textarea>}
          {question?.answer_type=="Checkboxes"&& Object.values(question?.answer_config).map((value, index) => (
            <span key={index} className="flex gap-2">
        <input key={index} type="checkbox" value={value} />
            {value}
            </span>
      ))
          }
          {question?.answer_type=="File Upload"&&<span className="col gap-3">
            <h6>Upload {question?.answer_config?.maxNum} supported file. Max {question?.answer_config?.maxSize}.</h6>
            <Button
    className={`!bg-zinc-50 !rounded-xl !h-12 !font-medium  dark:!bg-zinc-800 dark:!border-zinc-400  !text-neutral-800  !normal-case `}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      sx={{border:"1px solid #262626",boxShadow:"none",fontWeight:500}}
    >
      <div className="flex gap-2 items-center text-blue dark:!text-blue-300 ">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
</svg>
Upload File
      </div>
      <VisuallyHiddenInput type="file" />
    </Button>
          </span>}
          {question?.answer_type=="Multi Choices"&&Object.values(question?.answer_config).map((value, index) => (
            <span  key={index} className="flex gap-2">
        <input type="radio" value={value} />
            {value}
            </span>
      ))}


          </div>
      ))}
    </div>
    </div>
  );
};

export default QuestionnairesDetails;
