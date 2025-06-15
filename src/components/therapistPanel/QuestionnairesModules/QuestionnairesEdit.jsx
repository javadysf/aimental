"use client"
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useParams,useRouter } from 'next/navigation'
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeftOutlined";
import CreateForm from "./NewFormModules/CreateForm";
import AddQuestion from "./NewFormModules/AddQuestion";
import {
  getQuestionnaireDetails,
  EditQuestionnaire,
  EditQuestion,
  AddQuestionToQuestionnaire,
} from "../../../core/services/api/Questionnaire/questionnaire";
import { getDocuments } from "../../../core/services/api/Documents/documents";
import Link from "next/link";

const QuestionnairesEdit = () => {
  const params = useParams()
  const router = useRouter()
  const {id} = params
  const [Existedquestions, setExistedquestions] = useState([]);
  const [questionnaireId, setquestionnaireId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [displaycover, setdisplaycover] = useState(false);

  const [questionnaire, setquestionnaire] = useState({
    title: "",
    cover: "",
    description: "",
    is_timer: "",
    max_response_time: "",
    assign_to:[]
  });

  const [questions, setquestions] = useState([]);

  const loadQuestionnaire = async(id)=>{
    const res = await getQuestionnaireDetails(id)
    setquestionnaire({
      title: res.title,
      cover: res.cover?res.cover:"",
      description: res.description,
      is_timer: res.is_timer,
      max_response_time: res.max_response_time?res.max_response_time:"",
      assign_to:res.assign_to,
      questions:res.questions?.reverse()
    })
    
    console.log(res);
    setExistedquestions(res.questions)
    setquestionnaireId(res.id)
    const CoverRes = await getDocuments(res.cover)
    setdisplaycover(CoverRes?.file)
    
  }


useEffect(()=>{
  loadQuestionnaire(id)
},[])
console.log(questionnaire);
  const [Showsetting, setShowSetting] = useState(false);

  const EditQuestionnaireHandler = async (id) => {
// const quest = questions.map(item=>{const {id,question}=item; return {...question}});
const res = await EditQuestionnaire(id,questionnaire);

// const k = {items:quest}
// const json = JSON.stringify(k)
// await Promise.all(
//   questions?.map(async (question, index) => {
//     const response = await EditQuestion(id,question.id,question);
//   })
// );
const existedQuestionsMap = Existedquestions.reduce((map, question) => {
 map[question.id] = question;
 return map;
}, {});

questions.forEach(async(question) => {
 if (existedQuestionsMap[question.id]) {
   console.log(`Edit question ${question.question}`);
  const res =  await EditQuestion(id,question.id,question.question)
  console.log(res);
 } else {
   console.log(`Add question ${question.id}`);
AddQuestionToQuestionnaire(id,question.question)
 }
});

// const questionres = await EditQuestion(id,res.id,json);
// console.log(questionres);
router.push("/therapist/questionnaires");

};

  return (
    <div className="col gp6 w-full h-[calc(100vh-96px)] max-lg:p-0  overflow-auto">
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
              <KeyboardArrowLeft className="!w-9 !h-9" />  Edit Form
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
          
            onClick={() => EditQuestionnaireHandler(id,questionnaire)}
            className={`${editMode?"!bg-blue":"!bg-blue-300 !text-neutral "} dark:!bg-blue-50 !rounded-xl dark:!text-deepBlue !text-base !px-5 !normal-case !py-2 !text-white`}
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
      <div className="flex w-full lg:pl-48 justify-end gap-4">
        <div className={`w-full  max-lg:${Showsetting ? "hidden" : ""}`}>
          <CreateForm
          questionnaireId={questionnaireId}
          Existedquestions={Existedquestions}
          displaycover={displaycover}
          setEditMode={setEditMode}
            questions={questions}
            setquestions={setquestions}
            questionnaire={questionnaire}
            setquestionnaire={setquestionnaire}
          />
        </div>
        <div className={`w-full max-lg:${Showsetting ? "" : "hidden"}`}>
          <AddQuestion
          displaycover={displaycover}
          setdisplaycover={setdisplaycover}
           setEditMode={setEditMode}
            questions={questions}
            setquestions={setquestions}
            questionnaire={questionnaire}
            setquestionnaire={setquestionnaire}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionnairesEdit;
