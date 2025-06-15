import MultiCarousel from "../common/MultiCarousel";
import Link from "next/link";
import { getBlogs } from "../../core/services/api/Blogs/blogs";
import { useEffect, useState } from "react";
const BlogSection = () => {

  const [blogs,setBlogs] = useState([])
  const getBlogsList = async () => {
    setBlogs(await getBlogs())
  };
  
  useEffect(()=>{
    getBlogsList();
      },[])

console.log(blogs);
  const responsive = {
    // the naming can be any, depends on you.
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2 ,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className="flex flex-col py-[48px] px-[80px] max-lg:p-2 max-lg:py-4 overflow-hidden gap-4 ">
      <h1 className="text-deepBlue text-3xl dark:text-blue-200  font-normal">Blog</h1>
      <div className="carousel-wrapper overflow-x-clip">
        <MultiCarousel itemcalss="flex justify-start !w-[328px]" type="blogs" cards={blogs} responsive={responsive} css={"carousel"} />
      </div>
      <span className="float-right border rounded-2xl w-32 text-center self-end p-2 cursor-pointer dark:border-neutral-300">
        <Link href={"/blogs"} className="text-blue dark:text-neutral-300">View all</Link>
      </span>
    </div>
  );
};

export default BlogSection;
