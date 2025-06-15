import TagModule from "../common/TagModule";
import manlogo from "../../assets/img/landing/blog/person.png";
import { changeDateFormat } from "../../core/services/common/storage.services";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getDocuments } from "@/core/services/api/Documents/documents";

const BlgHeroSection = ({blogs}) => {
  console.log(blogs);
  const [cover,setCover]= useState()
  const getBlogCover = async()=>{
    
    const res =  await getDocuments(blogs?.cover)
      setCover(res?.file)

  }
  useEffect(()=>{
getBlogCover()
},[blogs])
const backgroundImageStyle = {
    backgroundImage: `url(${cover})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    color: 'white',
  };
  console.log(cover);
  return (
    <Link href={`/blogs/${blogs?.slug}`} style={backgroundImageStyle } className={` cursor-pointer w-full bg-cover bg-center  h-[400px] rounded-[32px] `}>
      <div className="col px-10 py-8 h-full justify-end">
        <TagModule
          css="border-neutral-300 text-neutral-300 bg-neutral-500 w-fit h-fit"
          title="Depression"
        />
        <p className="text-neutral-100 font-semibold text-3xl max-lg:text-xl">
        {blogs?.short_summary}
        </p>

        <div className="flex">
          <span className="flex gap-2 center text-neutral-300 text-xl max-lg:text-xs font-normal">
          <Image width={36} height={36} className="h-[36px] rounded-full" src={blogs?.author?.display_avatar_link?.file} />
            <h4 className="font-medium">{blogs?.author?.display_name}</h4>{" "}
            <h4 className="font-medium">{blogs?.created_dt?changeDateFormat(blogs?.created_dt):""}</h4>{" "}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlgHeroSection;
