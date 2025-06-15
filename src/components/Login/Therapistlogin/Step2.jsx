import React from "react";
import StepHeader from "./StepHeader";
import FileUploader from "../../ClientPanel/ClientTicketModules/TicketSectionModules/FileUploader";

const Step2 = ({handleNextClick,setValues, therapistInfo, settherapistInfo}) => {
  return (
    <div className="col w-full  gap-3 center">
      <StepHeader />
      <span className="col gap-2 w-full">
        <lable htmlFor="Bank Account">Bank Account</lable>
        <input
        onChange={(e)=>setValues(e)}
          placeholder="Your bank account number*"
          className="register-input"
          type="text"
          id="Bank Account"
          name="credit_card_number"
        />
      </span>
      <span className="col gap-2 w-full">
        <lable htmlFor="Location">Location</lable>
        <input
                onChange={(e)=>setValues(e)}
        name="country"
          placeholder={"country"}
          className="register-input"
        />
      </span>
      <span className="col gap-2 w-full">
      <input
      name="city"
      onChange={(e)=>setValues(e)}
          placeholder={"City"}
          className="register-input"
        />
      </span>
      <span className="col gap-2 w-full">
      <input
              onChange={(e)=>setValues(e)}
        placeholder="Enter postal code*"
        className="register-input"
        type="text"
        id="Bank Account"
        name="postal_code"
      />
      </span>
      
           <span className="col gap-2 w-full">
 <h3>Upload your medical records*</h3>
 <FileUploader/>
      </span>
      <button onClick={()=>handleNextClick()} className='blue-button w-full ' >Next</button>
      <p className='text-xs'>You can also change it from Profile{`>`}Edit profile</p>
    </div>
  );
};

export default Step2;
