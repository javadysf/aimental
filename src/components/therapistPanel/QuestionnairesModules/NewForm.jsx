"use client"
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation'
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeftOutlined";
import CreateForm from "./NewFormModules/CreateForm";
import AddQuestion from "./NewFormModules/AddQuestion";
import {
  CreateQuestions,
  CreateQuestionnaire,
} from "../../../core/services/api/Questionnaire/questionnaire";
import Link from "next/link";

const NewForm = () => {
  const router = useRouter();
 const [displaycover,setdisplaycover] = useState(null)
  const [questionnaire, setquestionnaire] = useState({
    title: "",
    cover: "",
    description: "",
    is_timer: "",
    max_response_time: "",
    assign_to:[]
  });
  const [questions, setquestions] = useState([]);
useEffect(()=>{
},[
  questions
])
  const [Showsetting, setShowSetting] = useState(false);
  const creatQuestionnaire = async () => {
    const quest = questions.map(item=>{const {id,question}=item; return {...question}});
    const res = await CreateQuestionnaire(questionnaire);    
    const k = {items:quest}
    const json = JSON.stringify(k)
    const questionres = await CreateQuestions(res.id,json);
    router.push("/therapist/questionnaires")

  };
  return (
    <div className="col gp6 w-full  max-lg:p-0  ">
      <div className="flex w-full p-2 justify-between items-center border-b border-zinc-400">
        {Showsetting ? (
          <h2 className="title-2">
            {" "}
            <KeyboardArrowLeft
              onClick={() => {
                setShowSetting(false);
              }}
              className="!w-9 !h-9"
            />{" "}
            Form Setting{" "}
          </h2>
        ) : (
          <h2 className="title-2">
            {" "}
            <Link href="/therapist/questionnaires">
              <KeyboardArrowLeft className="!w-9 !h-9" /> Form Title
            </Link>{" "}
          </h2>
        )}

        <div className="flex gap-2 max-lg:hidden">
          <Link
            href="/therapist/questionnaires"
            className="white-button cursor-pointer !w-fit"
          >
            Cancel
          </Link>
          <Button
            onClick={() => creatQuestionnaire()}
            className="!bg-blue dark:!bg-blue-50 !rounded-xl dark:!text-deepBlue !text-base !px-5 !normal-case !py-2 !text-white"
          >
            Save
          </Button>
        </div>
        <div
          onClick={() => setShowSetting(true)}
          className="lg:hidden dark:text-zinc-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-gear"
            viewBox="0 0 16 16"
          >
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
          </svg>
        </div>
      </div>
      <div className="flex w-full justify-between gap-4 max-lg:text-sm overflow-y-scroll">
        <div className={` overflow-y-auto lg:flex lg:justify-end w-full max-lg:w-full max-lg:${Showsetting ? "hidden" : ""}`}>
          <CreateForm
            questions={questions}
            setquestions={setquestions}
            questionnaire={questionnaire}
            setquestionnaire={setquestionnaire}
            displaycover={displaycover}
            setdisplaycover={setdisplaycover}
          />
        </div>
        <div className={` max-lg:w-full max-lg:h-[calc(100vh-220px)] max-lg:${Showsetting ? "" : "hidden"}`}>
          <AddQuestion
            questions={questions}
            setquestions={setquestions}
            questionnaire={questionnaire}
            setquestionnaire={setquestionnaire}
            setdisplaycover={setdisplaycover}
            displaycover={displaycover}
          />
        </div>
      </div>
    </div>
  );
};

export default NewForm;
