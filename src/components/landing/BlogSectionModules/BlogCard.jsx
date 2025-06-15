import TagModule from "../../common/TagModule";
import { changeDateFormat } from "../../../core/services/common/storage.services";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AccountIcon from "@/assets/img/account.svg"
import { getDocuments } from "@/core/services/api/Documents/documents";

const BlogCard = ({blog}) => {
  const [cover,setCover]= useState("")
  const [authorPic,setauthorPic]= useState("")
  const getBlogCover = async()=>{
    if(blog?.cover)
      {
        const res =  await getDocuments(blog?.cover)
        const authorPicres = await getDocuments(blog?.author?.display_avatar)
        setCover(res?.file)
        setauthorPic(authorPicres?.file)
      }
    }
    useEffect(()=>{
      
      getBlogCover()
    },[])

    
  return (
    <Link href={`/blogs/${blog?.slug}`}  className="bg-neutral-100 overflow-hidden lg:w-[330px] lg:h-[500px] dark:bg-zinc-800 flex flex-col justify-between w-80 p-4  gap-3 rounded-xl">
      <span className="col gap-3">
      <Image alt="cover" width={300} height={200} className="h-[200px]  rounded-lg" src={cover?cover:""} /> 
      <div className="flex gap-1 max-lg:hidden">
      {
        blog?.tags?.map((tag)=><TagModule key={tag.title} title={tag.title}  />)
      }
      </div>
      <span className="text-[1rem] overflow-hidden text-wrap w-72 h-[130px] text-wrap font-semibold max-lg:text-md	">{blog?.short_summary}</span>
      </span>
      <span className="col gap-2  ">
      <p className="text-sm">{blog?.created_dt?changeDateFormat(blog?.created_dt):""}</p>
      <span className="flex h-[40px] gap-2 items-center">

        <Image width={36} height={36} className="h-[36px] rounded-full" src={authorPic?authorPic:AccountIcon} />
        <p className="text-sm">{blog?.author?.display_name}</p>
      </span>
      </span>
    </Link>
  );
};

export default BlogCard;
