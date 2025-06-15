import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

 const QuestionnaireTimer= ({ minutes,flag,restime }) => {

  const [time, setTime] = useState(minutes * 60);
  const [loading, setLoading] = useState(100);
  // const navigate= useNavigate()
  // console.log(minutes*60-time);

  useEffect(() => {
    if(flag)
    {
      const intervalId = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
          setLoading(Math.floor((time / (minutes * 60)) * 100));
        } else {
          alert("done")
          // navigate("/therapist-dashboard/questionnaires")
          clearInterval(intervalId);
        }
      }, 1000);
  
      return () => clearInterval(intervalId);
    }
  }, [time, minutes,flag]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-1 h-16 justify-between border border-zinc-400 rounded-full p-6">
      <div className="text-md text-blue font-semibold">{formatTime(time)} minutes</div>
      <div className=' w-[80%] flex'>

      <div className="w-full  flex bg-blue-50 rounded-2xl h-1">
        <div
          className="bg-blue h-1 rounded-2xl"
          style={{ width: `${loading}%` }}
          />
      </div>
      <div className='bg-blue h-1 w-1 rounded-2xl'></div>
          </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="!text-zinc-600 bi bi-alarm" viewBox="0 0 16 16">
  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"/>
  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"/>
</svg>
    </div>
  );
};
export default QuestionnaireTimer;