"use client"
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useParams } from "next/navigation";
import { getBlogsDetail } from "../../core/services/api/Blogs/blogs";
import manlogo from "../../assets/img/landing/blog/person.png";
import { Backdrop } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AriticleDetails from "./ArticleModules/AriticleDetails";
import TagModule from "../common/TagModule";
import Comments from "./ArticleModules/Comments";
import { changeDateFormat } from "../../core/services/common/storage.services";
import ClientReaction from "./ArticleModules/ClientReaction";
import Image from "next/image";
import { getDocuments } from "@/core/services/api/Documents/documents";


const Article = () => {

  const [cover,setCover]= useState("")
  const [details, setDetails] = useState();
  console.log(details);
  const getBlogCover = async()=>{
    if(details?.cover)
    {
      const res =  await getDocuments(details?.cover)
      setCover(res?.file)
    }
  }
  useEffect(()=>{

getBlogCover()
},[details])

  const [userReactions,setUserReactions] =useState({replay_to:"",comment:"",
    impression:""
  }) 
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
  const slug = useParams().slug;
  
  const getBlogDetails = async () => {
    const result = await getBlogsDetail(slug);
    setDetails(result);
  };

  useEffect(() => {
    getBlogDetails();
    goToTop()
  }, []);
  console.log(details);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="px-64 max-lg:px-4 py-24 max-lg:py-6 col gap-3">
      <h1 className="font-normal font-semibold text-3xl max-lg:text-xl">
      {details?.short_summary}
      </h1>
      <div className="flex">
        <span
          onClick={handleOpen}
          className="flex gap-2 center text-xl font-normal cursor-pointer"
        >
          {/* <Image className="w-10 rounded-full" src={details?.author?.display_avatar} />{" "} */}
          <h4 className="font-medium text-sm">{details?.author?.display_name}</h4>{" "}
          <h4 className="font-medium text-xs">
           {changeDateFormat(details?.created_dt)} || 15 min read
          </h4>
        </span>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <span className=" col gap-3 text-black bg-white rounded-[32px] p-8 w-[500px] h-[450px] ">
            <CloseIcon sx={{ alignSelf: "self-end", cursor: "pointer" }} />
            <span className="flex w-full center gap-3">
              <Image alt="author" layout="fill" className="w-24 h-24" src={manlogo} />
              <span className="col gap-2">
                <h3 className="font-semibold text-xl">{details?.author?.display_name}</h3>
                <h3 className="font-medium text-md">Neuroscientist</h3>
              </span>
            </span>
            <h5>
            {details?.author?.display_bio}
            </h5>
          </span>
        </Backdrop>
      </div>
      <AriticleDetails details={details} visitedDetail={true} />
      <Image  alt="cover" width={800} height={500} className="w-full h-[500px] rounded-[32px]" src={cover} />
      <span className="text-md">
        <div className="[&>blockquote]:qoutes" dangerouslySetInnerHTML={{ __html:  details?.content} }>

        </div>
      </span>
     <ClientReaction details={details} slug={slug} userReactions={userReactions} setUserReactions={setUserReactions} />
      <hr />
      <span className="flex py-4 gap-4">
        {details?.tags?.map(tag =>  <TagModule key={tag.id} title={tag.title}/>)}
      </span>
      <hr />
          <Comments userReactions={userReactions} setUserReactions={setUserReactions}  slug={slug} comments={details?.comments} />
    </div>
  );
};

export default Article;
