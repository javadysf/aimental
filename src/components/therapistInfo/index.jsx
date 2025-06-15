"use client"
import InfoTabs from "./infoTabs";
import malePic from "../../assets/img/therapistslist/male.png";
import TagModule from "../common/TagModule";
import BookBtDrawer from "./BookBtDrawer";
import BookCard from "./BookCard";
import GoBackButton from "../common/GoBackButton";
import Image from "next/image";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getTherapistDetails } from "@/core/services/api/BaseInfo/BaseInfo";
import Link from "next/link";

const index = () => {

const id = useParams().id
console.log(id);
const [TPDetails,setTPDetails]= useState()
  useEffect(()=>{
    const getTherapistDetailsHandler=async()=>{
  setTPDetails(await getTherapistDetails(id))
    }
    getTherapistDetailsHandler()
  },[])
console.log(TPDetails);
  return (
    <div className="flex gap-4 px-36 py-10 max-lg:p-4 max-lg:flex-col">
    <Link
        className=" lg:hidden w-10 h-10 border border-black dark:border-neutral-300 rounded-2xl flex center cursor-pointer text-3xl"
       href={"/therapists"}
      >
        {`<`}
      </Link>
      <div className="col bg-white rounded-xl  w-[65%] max-lg:w-full gap-8 dark:bg-neutral-800">
        <div className="flex max-lg:flex-col gap-2 max-lg:items-center max-lg:p-4">
          <Image width={300} height={300}   alt="tp-avatar" className="w-[30%] max-lg:w-[70%] " src={TPDetails?.avatar_link?.file} />
          <div className="col gap-4 w-3/4 justify-start max-lg:items-center max-lg:w-full  ">
            <h1 className="font-semibold text-4xl max-lg:text-2xl">
              {`${TPDetails?.first_name} ${TPDetails?.last_name}`}
            </h1>
            <h4 className="max-lg:text-xl">London,UK</h4>
            <span className="flex gap-3 flex-wrap max-lg:justify-center">
             <TagModule title={TPDetails?.work_field?.title} />
            </span>
          </div>
        </div>
        <InfoTabs TPDetails={TPDetails} />
      </div>
      <BookCard />
      <div className=" lg:hidden w-full fixed bottom-0 left-0 p-2 rounded-[15px 0] dark:bg-zinc-800 bg-white">
        <BookBtDrawer />
      </div>
    </div>
  );
};

export default index;
