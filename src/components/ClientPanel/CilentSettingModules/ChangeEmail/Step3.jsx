import { KeyboardArrowLeft } from "@mui/icons-material";

const Step3 = ({ setStep }) => {
  const UpdateFunc = () => {};
  const ResendCode = () => {};

  return (
    <div className="col gap-4">
      <div className="flex gap-4 items-center">
        <KeyboardArrowLeft
          className="!cursor-pointer !w-8 !h-8"
          onClick={() => setStep("step2")}
        />
        <h2 className=" text-lg font-semibold">
          Please Enter your Verification code
        </h2>
      </div>
      <input
        type="email"
        placeholder={"Verification code"}
        className="border border-zinc-600 rounded-[12px] p-2"
      />
      <div className="flex justify-between ">
<div className="col gap-6 h-full">
    <span onClick={()=>ResendCode()} className=" cursor-pointer text-blue font-semibold text-sm">Resend Code</span>
    <span onClick={()=>setStep("step2")} className=" cursor-pointer text-blue font-semibold text-sm">Change Email</span>
</div>
      <button
        onClick={() => UpdateFunc()}
        className="blue-button flex text-base self-start w-fit "
      >
        Update
      </button>
      </div>
    </div>
  );
};

export default Step3;
