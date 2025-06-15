import AiLogo from "../../../assets/img/aimental.svg"
import DarkAiLogo from "../../../assets/img/header/darkailogo.svg"
import Image from "next/image";
import { useTheme } from 'next-themes';

const StepHeader = () => {
	const { theme, setTheme } = useTheme();
  return (
    <>
         <Image width={96} height={96} className='w-24 text-blue' alt="aimental-logo" src={theme=='dark'?DarkAiLogo:AiLogo} />
         <h3 className='text-lg font-normal'>Therapist information</h3>
    </>
  )
}

export default StepHeader