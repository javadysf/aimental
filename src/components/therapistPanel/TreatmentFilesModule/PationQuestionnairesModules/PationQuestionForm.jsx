import { Link } from "react-router-dom";
import { KeyboardArrowLeft } from "@mui/icons-material";

const PationQuestionForm = () => {
  return (
    <div className="col p-6 gap-6 w-full h-[calc(100vh-96px)] overflow-auto text-neutral-800">
      <div className="flex w-full p-2 justify-between border-b border-zinc-400">
        <h2 className="title-2">
          {" "}
          <Link to={"/therapist-dashboard/TreatmentFiles/pationquestionnaires"}>
            <KeyboardArrowLeft className="!w-10 !h-10 cursor-pointer" />{" "}
          </Link>
          Questionnaires
        </h2>
      </div>
      <div className="px-32 w-full">
        <div className="w-full border rounded-2xl gp4 border-zinc-400">
          <h3 className="font-semibold text-xl border-b border-zinc-600 pb-4 dark:text-neutral-300">
            Integer feugiat
          </h3>
          <p className="pt-4 text-base text-neutral-800 dark:text-zinc-400">
            Feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris sit
            amet massa vitae tortor condimentum. Ipsum faucibus vitae aliquet
            nec ullamcorper sit amet risus. Sed odio morbi quis commodo odio.
            Eget nullam non nisi est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PationQuestionForm;
