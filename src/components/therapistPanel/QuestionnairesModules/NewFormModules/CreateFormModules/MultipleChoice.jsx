import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
const MultipleChoice = ({handleQuestionChange,id,answerConfig}) => {
  
 const [inputs, setInputs] = useState([{ value: '' }]);
 const [options, setOptions] = useState();

 useEffect(()=>{
  answerConfig&&
setInputs(Object.values(answerConfig).map((obj)=>({ value:obj})))
setOptions(Object.values(answerConfig).map((obj)=>( obj)))
},[])
useEffect(()=>{
  handleQuestionChange(id,options,"answer_config")
},[options])

const handleAddInput = () => {
  setInputs([...inputs, { value: '' }]);
};

const handleInputChange = (index, event) => {
  setOptions((option)=>({...option,[index]:[event.target.value]}))
  const newInputs = inputs.map((input, i) => 
    i === index ? { value: event.target.value } : input
);
setInputs(newInputs);
  };
  return (
    <>
      <div className="col gap-4 w-full">
        <span className="col gap-2 w-full ">
          {inputs.map((input, index)=> (
            <div key={index} className="flex w-full justify-between">
              <div className="flex gap-2">
              <input  type="radio" />{" "}
              <input
                className="outline-none dark:bg-neutral-800 dark:text-neutral-300"
                placeholder={`option ` + `${index}`}
                id={index}
                type="text"
                onChange={(event) => handleInputChange(index, event)}
                value={input.value}
              />
              </div>
                 <div className="flex  gap-2 items-center">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="blue"
          viewBox="0 0 16 16"
        >
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
        </svg> */}
        <CloseIcon className="!w-4 !h-4" />
      </div>
            </div>
          ))}
        </span>
        <span className="flex gap-2">
          <input type="radio"  />{" "}
          <span onClick={handleAddInput} className=" cursor-pointer text-sm flex gap-2">
            {" "}
            <h5 className="text-neutral-300">Add option</h5> or{" "}
            <h5 className="text-blue">
              add <q>other</q>
            </h5>
          </span>
        </span>
      </div>
    </>
  );
};

export default MultipleChoice;
