"use client"

import { useState, Fragment } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import { ArrowLeft } from 'lucide-react';

const Step = ({ stepNumber, isActive, activeStep }) => {
  return (
      <div className={`flex flex-col items-center ${isActive ? 'text-blue-500' : 'text-gray-500'}`}>
        <div className={`w-8 h-8 max-lg:w-6 max-lg:h-6 rounded-full flex justify-center items-center border-2 ${activeStep >= stepNumber ? 'bg-blue-500 dark:bg-neutral-800 border-blue-500 text-white' : 'bg-white dark:bg-deepBlue text-blue-300 border-blue-300'}`}>
          <span className="text-lg max-lg:text-sm">{stepNumber}</span>
        </div>
      </div>
  );
};

const TherapistLogin = () => {
  const [therapistInfo, setTherapistInfo] = useState({
    bio: "",
    display_name: "",
    about_me: "",
    work_field: [],
    therapeutic_approaches: [],
    id_card_image: "",
    registration_code: "",
    credit_card_number: "",
    cripto_wallet_number: "",
    avatar: "",
    gender: "",
    birth_date: "",
    first_name: "",
    last_name: ""
  });

  const [registerationDetail, setRegisterationDetail] = useState({});

  const setValues = (e) => {
    setTherapistInfo({...therapistInfo, [e.target.name]: e.target.value});
  };

  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    { stepNumber: 1, stepContent: <Step1 setValues={setValues} therapistInfo={therapistInfo} setTherapistInfo={setTherapistInfo} handleNextClick={() => handleNextClick(activeStep)} /> },
    { stepNumber: 2, stepContent: <Step2 setValues={setValues} therapistInfo={therapistInfo} setTherapistInfo={setTherapistInfo} activeStep={activeStep} handleNextClick={() => handleNextClick(activeStep)} /> },
    { stepNumber: 3, stepContent: <Step3 setValues={setValues} therapistInfo={therapistInfo} setTherapistInfo={setTherapistInfo} handleNextClick={() => handleNextClick(activeStep)} /> },
    { stepNumber: 4, stepContent: <Step4 setValues={setValues} therapistInfo={therapistInfo} setTherapistInfo={setTherapistInfo} handleNextClick={() => handleNextClick(activeStep)} /> },
    { stepNumber: 5, stepContent: <Step5 setValues={setValues} therapistInfo={therapistInfo} setTherapistInfo={setTherapistInfo} registerationDetail={registerationDetail} handleNextClick={() => handleNextClick(activeStep)} /> },
  ];

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber);
  };

  const handleNextClick = (stepNumber) => {
    setActiveStep(stepNumber + 1);
  };

  const handleBackClick = (stepNumber) => {
    if (stepNumber !== 1) {
      setActiveStep(stepNumber - 1);
    }
  };

  return (
      <div className='w-full max-lg:bg-zinc-50 dark:bg-neutral-800 max-lg:dark:bg-zinc-800 h-screen flex items-center justify-center'>
        <div className="flex flex-col items-center p-4 py-6 max-lg:w-[85%] dark:bg-zinc-800 dark:text-neutral-300 max-lg:h-screen bg-zinc-50 rounded-3xl lg:w-[450px]">
        <span className='flex w-[90%] max-lg:justify-end items-center'>
          <span onClick={() => handleBackClick(activeStep)}>
            <ArrowLeft className='dark:text-neutral-300 w-10 h-10 mb-[6px] text-neutral-800 cursor-pointer'/>
          </span>

          <div className="flex items-center w-[90%] mb-2">
            {steps.map((step, index) => (
                <Fragment key={step.stepNumber}>
                  <div className="cursor-pointer" onClick={() => {step.stepNumber <= activeStep && handleStepClick(step.stepNumber)}}>
                    <Step index={index} activeStep={activeStep} stepNumber={step.stepNumber} isActive={activeStep === step.stepNumber} />
                  </div>
                  {index < steps.length - 1 && (
                      <div className={`w-16 h-1 ${activeStep > step.stepNumber ? 'bg-blue-500' : 'bg-blue-300'} `}></div>
                  )}
                </Fragment>
            ))}
          </div>
        </span>
          {steps.map((step) => (
              <div key={step.stepNumber} className={`w-full ${activeStep === step.stepNumber ? 'block' : 'hidden'}`}>
                {step.stepContent}
              </div>
          ))}
        </div>
      </div>
  );
};

export default TherapistLogin;