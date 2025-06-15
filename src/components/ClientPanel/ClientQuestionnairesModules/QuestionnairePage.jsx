"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
// import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import {
  AnswerToAnswersheet,
  CreateAnswersheet,
  getQuestionnaireDetails,
} from "../../../core/services/api/Questionnaire/questionnaire";

import CloseIcon from "@mui/icons-material/Close";
import BasicDatePicker from "../../therapistPanel/EventManagerModules/AddAppointmentModules/BasicDatePicker";
import TimePicker from "../../therapistPanel/EventManagerModules/EMHeaderModules/AvailabilityModules/TimePicker";
import QuestionnaireTimer from "../../therapistPanel/QuestionnairesModules/NewFormModules/CreateFormModules/QuestionnaireTimer";
import { Backdrop, Button } from "@mui/material";
import { getDocuments } from "../../../core/services/api/Documents/documents";
import Image from "next/image";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const QuestionnairePage = () => {
  // const navigate = useNavigate("/")
  // const context  = useOutletContext();
  // const setshowFooter = context[1];
  //  const showFooter = context[0]
  const {id} = useParams();
  const [open, setOpen] = useState(true);
  const [questionnaire, setquestionnaires] = useState();
  const [Answers, setAnswers] = useState([]);
  const [cover, setCover] = useState();

  const handleAnswerChange = (questionId, answer) => {
    const existingAnswer = Answers.find((ans) => ans.question === questionId);
    if (existingAnswer) {
      setAnswers(
        Answers.map((ans) =>
          ans.question === questionId ? { question: questionId, "ans": { "answer":answer } } : ans
        )
      );
    } else {
      setAnswers([...Answers, { question: questionId, "ans": { "answer":answer } }]);
    }
  };
  const QuestionnaireDetails = async (id) => {
    const res = await getQuestionnaireDetails(id);
    setquestionnaires(res);
    setCover(await getDocuments(res.cover))
  };

  const handleResetForm = () => {
    setAnswers((prevQuestions) =>
      prevQuestions.map((question) => ({ ...question, ans: { answer: '' } }))
    );
  };

  const createAnswersheet = async(details) => {
    const res = await CreateAnswersheet(details);
    Answers.map((answer)=>AnswerToAnswersheet(JSON.stringify(answer),res.id))
  }
  useEffect(() => {
    QuestionnaireDetails(id);
    "setshowFooter(false)"
  }, [open]);
  //show linear questions items
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
  return (
    <div className="w-full col m-4 p-4 max-lg:m-0 max-lg:p-2 bg-zinc-50  h-[calc(100vh-110px)] overflow-y-scroll dark:bg-zinc-800 rounded-2xl  gap-6  ">
      <div className="flex w-full p-2 justify-between border-b border-zinc-400">
        <h2 className="title-2 max-lg:text-base ">
          {" "}
          <Link onClick={()=>"setshowFooter(true)"} href={"/client/questionnaires"}>
            {" "}
            <ArrowLeftIcon className="!w-8 !h-8 cursor-pointer" />{" "}
          </Link>
          {questionnaire?.title}{" "}
        </h2>
        <span className="max-lg:hidden flex gap-2">
          <span onClick={()=>handleResetForm()} className="white-button self-center"> Reset form</span>
          <button
            onClick={() =>
             {
              createAnswersheet({ questionnaire: questionnaire?.id })
              navigate("/client/questionnaires")
             } }
            className="!blue-button"
          >
            {" "}
            Submit
          </button>
        </span>
      </div>
      <div className="col w-full p-4  gap-3 lg:px-44">
        {questionnaire?.is_timer && (
          <>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <span className="col gap-6 p-4 bg-white w-[450px]  rounded-2xl text-neutral-800 dark:text-neutral-300">
                <span className="col">
                  <span className="flex justify-between items-center ">
                    <h3 className="text-lg">Quiz</h3>{" "}
                    <CloseIcon
                      className="cursor-pointer"
                      onClick={() => {
                        setOpen(false);
                      }}
                    />
                  </span>
                  <hr />
                </span>
                <span className="font-normal text-md flex text-center center">
                  you should fill this form in{" "}
                  {questionnaire?.max_response_time} minutes <br /> are you
                  ready?
                </span>
                <span className="flex justify-between gap-4">
                  <Link
                    href={"/client/questionnaires"}
                    className="white-button w-full"
                  >
                    No
                  </Link>
                  <button
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="blue-button w-full "
                  >
                    Yes
                  </button>
                </span>
              </span>
            </Backdrop>
            <QuestionnaireTimer
              flag={!open}
              minutes={questionnaire?.max_response_time}
            />
          </>
        )}
        <Image alt="ai-cover" width={700} height={224} className="w-full h-56 rounded-2xl " src={cover?.file} />
        <div className="col rounded-2xl border border-zinc-400 p-4 gap-4">
          <h2 className="font-semibold text-lg">{questionnaire?.title}</h2>
          <hr />
          {questionnaire?.description}
        </div>
        {questionnaire?.questions?.map((question) => (
          <div key={question.id} className="col gap-4 w-full border border-zinc-400 rounded-2xl p-4">
            <h4>{question?.content}</h4>
            <hr className="text-zinc-600" />
            {question?.answer_type == "Short Answer" && (
              <textarea
              
              name="Short Answer"
              value={
                Answers.find((ans) => ans.question === question.id)?.ans.answer || ''
              }
              onChange={(e) =>{handleAnswerChange(question?.id,e.target.value)}}
              className="h-40 border dark:border-[#B0B0B0] rounded-xl p-4 pb-10 dark:bg-neutral-800"
              placeholder="write your comment..."
              ></textarea>
            )}
            {question?.answer_type == "Time" && <TimePicker id={question?.id} value={Answers} setValue={setAnswers}  onChange={handleAnswerChange}  />}
            {question?.answer_type == "Date" && <BasicDatePicker id={question?.id} onChange={handleAnswerChange} />}
            {question?.answer_type == "Linear Scale" && (
              <span className="flex flex-wrap gap-12 max-lg:gap-4 center">
                <p>{question?.answer_config?.start_lable}</p>{" "}
                <span >{Noy(question?.answer_config?.from,question?.answer_config?.to,question?.id)}</span>
              
                <p>{question?.answer_config?.end_lable}</p>
              </span>
            )}
            {question?.answer_type == "Paragraph" && (
              <textarea
                className="h-40 border dark:border-[#B0B0B0] rounded-xl p-4 pb-10 dark:bg-neutral-800"
                placeholder="write your comment..."
                value={
                  Answers.find((ans) => ans.question === question.id)?.ans.answer || ''
                }
                onChange={(e) =>{handleAnswerChange(question?.id,e.target.value)}}
                ></textarea>
              )}
            {question?.answer_type == "Checkboxes" &&
              Object.values(question?.answer_config).map((value, index) => (
                <span key={index} className="flex gap-2">
                  <input  type="checkbox"  onChange={(e) =>{handleAnswerChange(question?.id,e.target.value)}} value={value} />
                  {value}
                </span>
              ))}
            {question?.answer_type == "File Upload" && (
              <span className="col gap-3">
                <h6>
                  Upload {question?.answer_config?.maxNum} supported file. Max{" "}
                  {question?.answer_config?.maxSize}.
                </h6>
                <Button
                  className={`!bg-zinc-50 !rounded-xl !h-12 !font-medium  dark:!bg-zinc-800 dark:!border-zinc-400  !text-neutral-800  !normal-case `}
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  sx={{
                    border: "1px solid #262626",
                    boxShadow: "none",
                    fontWeight: 500,
                  }}
                >
                  <div className="flex gap-2 items-center text-blue dark:!text-blue-300 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-image"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
                    </svg>
                    Upload File
                  </div>
                  <VisuallyHiddenInput type="file" />
                </Button>
              </span>
            )}
            {question?.answer_type == "Multi Choices" &&
              Object.values(question?.answer_config).map((value, index) => (
                <span  key={index} className="flex gap-2">
                  <input type="radio"  value={value} onChange={(e) =>{handleAnswerChange(question?.id,e.target.value)}} />
                  {value}
                </span>
              ))}
          </div>
        ))}
      </div>
<span className="flex fixed w-full bottom-[0px] bg-zinc-50  mx-[-8px] py-[4px] justify-evenly lg:hidden ">
          <span onClick={()=>handleResetForm()} className="white-button bg-white"> Reset form</span>
          <button
           onClick={() =>
            {
             createAnswersheet({ questionnaire: questionnaire?.id })
             navigate("/client/questionnaires")
            } }
            className="!blue-button"
          >
            {" "}
            Submit
          </button>
</span>
    </div>
  );
};

export default QuestionnairePage;
