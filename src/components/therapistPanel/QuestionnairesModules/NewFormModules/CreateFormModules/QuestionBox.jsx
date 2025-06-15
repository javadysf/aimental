import { useEffect, useState } from "react";
import ShortQuestions from "../CreateFormModules/ShortQuestions";
import LongAnswerQuestion from "../CreateFormModules/LongAnswerQuestion";
import MultipleChoice from "../CreateFormModules/MultipleChoice";
import CheckBoxes from "../CreateFormModules/CheckBoxes";
import FileUpload from "../CreateFormModules/FileUpload";
import LinearScale from "../CreateFormModules/LinearScale";
import TimePicker from "../../../EventManagerModules/EMHeaderModules/AvailabilityModules/TimePicker";
import BasicDatePicker from "../../../EventManagerModules/AddAppointmentModules/BasicDatePicker";
import SwitchButton from "../../../EventManagerModules/EMHeaderModules/AvailabilityModules/SwitchButton";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { DeleteQuestion } from "../../../../../core/services/api/Questionnaire/questionnaire";
import { questionType } from "@/core/services/common/QuestionTypes";


const QuestionBox = ({ content,id,handleQuestionChange,displayAns,questions,setquestions,
  onDragStart,
  onDragOver,
  onDragEnd,
  Existedquestions,
  questionnaireId}) => {

  
  const [showOptions, setShowOptions] = useState(false);
  const [SelectedOption, setSelectedOption] = useState(content?content?.answer_type:questionType[0]?.option);
  const [Qcomponent, setQcomponent] = useState(content?content?.answer_type:questionType[0]?.name);
  const [required, setRequired] = useState(content?content.required:false);

  const handleSwitch = () => {
    setRequired(!required);
    handleQuestionChange(id,!required,"required")
  };

  const   HandleDeleteQuestion = async(id) => {
   
    const found = Existedquestions?.find((question) => question.id === id);
    if (found) {
      await DeleteQuestion(questionnaireId,id)
      setquestions(questions.filter((item)=>id!=item.id))
    } else {
      setquestions(questions.filter((item)=>id!=item.id))
    }
  //  Existedquestions.map((item=>item.id==id?console.log("y"):setquestions(questions.filter((item)=>id!=item.id))))

    // setResult(resultArray);
    
  }

  return (
    <div         draggable
    onDragStart={onDragStart}
    onDragOver={onDragOver}
    onDragEnd={onDragEnd} className="col w-full gp4 dark:border-neutral-500 border max-lg:text-xs dark:text-neutral-300 border-zinc-400 rounded-3xl">
      <div className="flex justify-between items-center max-lg:col max-lg:gap-2  lg:gap-6">
        <input
        value={content?.content}
          name="content"
          placeholder="Question"
          id={id}
          className=" w-3/4 max-lg:w-full dark:placeholder-zinc-400 dark:border-neutral-500 placeholder-zinc-600 p-2 border border-zinc-600 rounded-xl dark:bg-neutral-800"
          type="text"
          onChange={(e)=>handleQuestionChange(id,e.target.value,e.target.name)}
        />
        <span className="text-blue dark:text-blue-300">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
          </svg> */}
        </span>
        <div className=" relative col w-1/2 max-lg:w-full">
          <span
            onClick={() => setShowOptions(!showOptions)}
            className="flex max-lg:w-full  cursor-pointer gap-2 items-center justify-between dark:border-neutral-300  placeholder-zinc-600 p-2 border border-zinc-600 rounded-xl"
          >
            <div  name="questionType"  className="flex gap-2 text-sm items-center dark:text-neutral-300 ">{SelectedOption}</div>
            <div className="dark:text-neutral-300">
              <KeyboardArrowDownOutlined />
            </div>
          </span>

          {showOptions && (
            <span className="border w-[240px] dark:bg-neutral-800 border-zinc-400 rounded-xl max-lg:w-full col bg-white  z-10 absolute  top-[-100px]">
              {questionType?.map((item) => (
                <div
                key={item.name}
                  className="cursor-pointer text-sm max-lg:text-xs rounded-xl p-2 max-lg:p-[3px] dark:text-neutral-300 hover:bg-blue-50 dark:hover:bg-blue-300 dark:hover:text-neutral-800 "
                  onClick={(e) => {
                    setSelectedOption(item.option);
                    setShowOptions(false);
                    setQcomponent(item.name)
                    handleQuestionChange(id,item.name,"answer_type")
                  }}
                >
                  {item.option}
                </div>
              ))}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-between w-full">
        {Qcomponent=="Short Answer"&&displayAns&&<ShortQuestions/>}
        {Qcomponent=="Paragraph"&&displayAns&&<LongAnswerQuestion/>}
        {Qcomponent=="Checkboxes"&&<CheckBoxes answerConfig={content.answer_config} id={id} handleQuestionChange={handleQuestionChange} />}
        {Qcomponent=="Multi Choices"&&<MultipleChoice answerConfig={content.answer_config} id={id}handleQuestionChange={handleQuestionChange} />}
        {Qcomponent=="Linear Scale"&&<LinearScale answerConfig={content.answer_config} id={id}handleQuestionChange={handleQuestionChange} />}
        {Qcomponent=="File Upload"&&<FileUpload id={id}handleQuestionChange={handleQuestionChange}/>}
        {Qcomponent=="Date"&&displayAns&&<BasicDatePicker/>}
        {Qcomponent=="Time"&&displayAns&&<TimePicker/>}
      </div>
        <span className="flex gap-2 self-end items-center dark:text-neutral-300 ">
          {/* <CopyIcon /> */}
          <span className="flex gap-2">
            {" "}
            Required <SwitchButton css={"self-start"} checked={required} handleToggle={handleSwitch} 
            />{" "}
          </span>
          <svg
          onClick={()=>HandleDeleteQuestion(id)
          }
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="transition duration-300 ease-in-out hover:text-[#B3261E] cursor-pointer bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </span>
    </div>
  );
};

export default QuestionBox;
