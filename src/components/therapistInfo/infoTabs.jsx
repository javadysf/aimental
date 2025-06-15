import { useState } from "react";
import TagModule from "../common/TagModule";


export default function InfoTabs({TPDetails}) {
  const [activeLink,setActiveLink] = useState("#1") 
  const TDetail = [
    {
      id: "1",
      title: "Overview",
      description:TPDetails?.bio
    },
    {
      id: "2",
      title: "About",
      description:
        TPDetails?.about_me,
    },
    {
      id: "3",
      title: "Treatment methods",
      description:
      <span className="flex gap-2">
{TPDetails?.therapeutic_approaches.map(({title,id})=>  <TagModule key={id} title={title} />)}
      </span>

    },
  ];
  return (
    <div className="flex flex-col ">
      <ul className="flex gap-4 max-lg:text-sm font-bold">
        {TDetail?.map(({ id, title }) => (
          <li key={id}>
            <a  onClick={()=>setActiveLink(`#${id}`)}  className={`dark:text-[#b0b0b0]   ${activeLink=="#"+id?"border-b-[3px] font-black border-blue":""}  font-normal`} href={`#${id}`}>
              {title}
            </a>
          </li>
        ))}
      </ul>
      <hr className="mb-4"/>
      <div className="flex flex-col gap-4">
      {TDetail?.map(({id,title ,description }) => (
          <div key={id} id={id} className="flex flex-col gap-4">
            <span className={`${activeLink=="#"+id && activeLink!= "#1"?"h-16":""}`}></span>
            <h2 className="text-2xl font-semibold max-lg:text-lg">{title}</h2>
            <span  className="dark:text-[#b0b0b0] text-justify flex gap-2 ">{description}</span>
          </div>
      ))}
      </div>
    </div>
  );
}
