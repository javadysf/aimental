import FormMenu from "./FormMenu";
import { useEffect, useState } from "react";
import { getDocuments } from "../../../../core/services/api/Documents/documents";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@mui/material";

const Form = ({ item,setrefresh,refresh,questionnaires }) => {
 
console.log(item);
  const [formpic,setformpic] = useState()

  const getFormPic = async()=>{
    const res = await getDocuments(item?.cover);
    setformpic(res?.file)
  }

  useEffect(()=>{
getFormPic()
  },[]);
  return (
    <div  className="dark:bg-neutral-800 rounded-2xl bg-white col lg:h-[170px] gap-2  w-[256px] max-lg:w-44 max-lg:h-[230px]  overflow-hidden border border-zinc-400 p-2">
      <Link href={`/therapist/questionnaires/${item?.id}`}>
      {

      formpic?<Image width={256} height={64} alt="formPic" className="rounded-lg w-full w-[256px] h-16" src={formpic} />:<div className="w-64 h-16" ></div>
      }
        
      </Link>
      <span className="flex justify-between overflow-y-auto gap-2">
        <Link  href={`/therapist-dashboard/questionnaires/${item?.id}/details`} className="col gap-2">
          <h3 className="font-medium text-base dark:text-neutral-300">
            {item.title}
          </h3>
          <p className="overflow-hidden text-xs lg:h-12 max-lg:h-8 text-zinc-400 font-medium dark:text-zinc-400 ">
          {item?.description}
          </p>
        </Link>
        <div className="self-center">
          <FormMenu item={item} refresh={refresh}  setrefresh={setrefresh} id={item?.id}/>
        </div>
      </span>
    </div>
  );
};

export default Form;
