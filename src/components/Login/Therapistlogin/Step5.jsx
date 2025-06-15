import StepHeader from "./StepHeader";
import Ailogo from "../../../assets/img/aimental.svg"
import DarkAilogo from "../../../assets/img/header/darkailogo.svg"
import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import { getTherapistServices } from "../../../core/services/api/BaseInfo/BaseInfo";
import { getProfile, SendPrices } from "../../../core/services/api/Auth/auth";
import Image from "next/image";
import Link from "next/link";
import { Backdrop } from "@mui/material";


const Step5 = () => {
	const { theme, setTheme } = useTheme();
  const [services,setservices] = useState([])
  const [prices,setPrices] = useState([])

  const getservices = async()=>{
    const res = await getTherapistServices();
    setservices(res)
  }
  useEffect(()=>{
    getservices()
  },[])

  const handlePriceChange = (service, price) => {
    const existingPrice = prices.find((p) => p.service === service);
    if (existingPrice) {
      setPrices((prevPrices) =>
        prevPrices.map((p) => (p.service === service ? { ...p, price } : p))
      );
    } else {
      setPrices((prevPrices) => [
        ...prevPrices,
        { service, price },
      ]);
    }
  };

  const sendPrice = async()=>{
    prices?.map((price)=>(SendPrices(price)))
  }

const [open,setopen] = useState(false)

const handleOpen=()=>{
  setopen(true)
}
  return (
    <div className="col  gap-5 center">
      <StepHeader />
      <span className="col mt-8 gap-3 w-full">
        <h3 className="font-medium">Select Pricing</h3>
        {services?.map((service) =>  <div key={service.id} className="flex items-center gap-4 text-md font-normal max-lg:text-sm  ">
          <input className="w-4 h-4" type="checkbox"  />
          <h5 className="text-neutral-800 whitespace-nowrap dark:text-neutral-300">
            {service.title}
          </h5>
          <span className="border w-full h-[1px] border-dashed dark:border-zinc-600  "></span>
          <span>70$</span>
          {/* <input className="text-neutral-800 w-16 rounded-xl pl-4 dark:text-neutral-300"  value={prices.find((priceInput) => prices.serviceId === service.id)?.price}               onChange={(event) => handlePriceChange(service.id, event.target.value)}  /> */}
        </div>)}
      
      </span>
      <button onClick={() =>{handleOpen()}} className="blue-button w-full ">
        Done
      </button>
      <p
        onClick={() => handleOpen()}
        className="cursor-pointer text-sm text-blue font-medium"
      >

        skip
      </p>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
       <span className="bg-zinc-50 text-center dark:bg-zinc-800 dark:text-neutral-300 col w-[500px] rounded-3xl center text-neutral-800 gp8" >
        <Image width={200} height={200} src={theme=='dark'?DarkAilogo:Ailogo} alt="aimental-logo" />
        Thank you for your patience.<br/>
        Your account will be verified by admin.
        <Link className="w-fit blue-button dark:text-deepBlue " href={"/therapist-dashboard"} >Go to Dashboard</Link>
       </span>
       
      </Backdrop>
      <p className="text-xs">
        You can also change it from Profile{`>`}Edit profile
      </p>
    </div>
  );
};

export default Step5;
