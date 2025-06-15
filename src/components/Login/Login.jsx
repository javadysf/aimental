import Image from "next/image";
import AIlogo from "../../assets/img/aimental.svg";
import DarkAIlogo from "../../assets/img/header/darkailogo.svg"
import { useTheme } from 'next-themes';
import Link from "next/link";

const Login = () => { 
	const { theme, setTheme } = useTheme();
  return (
    <div className='w-full h-screen flex center max-lg:bg-zinc-50 dark:bg-neutral-800 '>
   <div className="flex dark:bg-zinc-700 flex-col items-center max-lg:mx-4 gap-4 p-6 bg-zinc-50 rounded-3xl w-[450px]">
       <Image alt="aimental-logo" width={200} height={250}  src={theme=='dark'?DarkAIlogo:AIlogo}  />
       <h4 className="dark:text-neutral-300 font-medium  text-lg">Sign Up As: </h4>
       <Link href={"/login/client"} className="dark:bg-zinc-700 transition duration-300 ease-in-out hover:bg-deepBlue hover:text-blue-50 w-full  dark:text-blue-300 register-input text-center font-medium text-blue">Client</Link>
       <Link href={"/login/therapist"} className="dark:bg-zinc-700 transition duration-300 ease-in-out hover:bg-deepBlue hover:text-blue-50 w-full  dark:text-blue-300 register-input text-center font-medium text-blue">Therapist</Link>
    </div>
</div>
  )
}

export default Login