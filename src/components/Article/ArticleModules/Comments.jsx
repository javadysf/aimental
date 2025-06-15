import { useState } from "react";
import { PostUserReaction } from "../../../core/services/api/Blogs/blogs";
import manlogo from "../../../assets/img/landing/blog/person.png";
import Image from "next/image";
import { toast } from "react-toastify";

const Comments = ({userReactions,setUserReactions,comments,slug}) => {
  const sendcm = async()=>{
      const res =  await PostUserReaction(userReactions,slug)
      toast.success("Comment Sended Successfully!", {
        position: "top-left",
        autoClose: 3000,
        type: "success",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setUserReactions({replay_to:"",comment:"",
        impression:""
      })
      console.log(res);
  }

  return (
    <div className="col gap-5">
      <h1 className="text-[18px] font-medium">Comments</h1>
      {comments?.map(({comment,id}) =>      <div key={id}  className="col gap-1">
      <span className="flex gap-2 items-center text-xl font-normal">
        <Image alt="user-logo" width={36} height={36} className="w-9" src={manlogo} />{" "}
        <h4 className="font-medium text-sm">John Petrucci</h4>{" "}
        <h4 className="font-medium text-xs">
          september 26, 2004
        </h4>
      </span>
        <span className="text-xs pl-10">
         {comment}
        </span>
      </div>)}

        <hr  className="bg-neutral-100" />
        <textarea value={userReactions.comment} onChange={(e)=>setUserReactions({...userReactions,comment:e.target.value})} className="h-40 border dark:border-[#B0B0B0] rounded-xl p-4 pb-10 dark:bg-neutral-800"   placeholder="write your comment..."></textarea>
        <button onClick={()=>sendcm()} className="blue-button self-end">Send</button>
    </div>
  );
};

export default Comments;
