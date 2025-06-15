import BlogCard from "../landing/BlogSectionModules/BlogCard";
import MultiCarousel from "../common/MultiCarousel"


const Suggested = ({blogs}) => {
console.log(blogs);
    const blogItems = [
        { id: "1", card: <BlogCard /> },
        { id: "2", card: <BlogCard /> },
        { id: "3", card: <BlogCard /> },
        { id: "4", card: <BlogCard /> },
        { id: "5", card: <BlogCard /> },
        { id: "6", card: <BlogCard /> },
      ];
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
    <div className= "col gap-4 py-4 lg:h-[700px] overflow-hidden">
        <h1 className="font-semibold text-3xl text-deepBlue dark:text-blue-50"  >Suggested</h1>
    <div className="flex flex-col max-lg:p-2 max-lg:py-4 gap-4  ">
      <div className="carousel-wrapper">
        <MultiCarousel itemcalss="flex justify-start !w-[328px]" type="blogs" cards={blogs?blogs:""} responsive={responsive} css={"carousel"} />
      </div>
      <span className="float-right  rounded-2xl w-32 self-end p-2 cursor-pointer ">
        {/* <p className="text-blue text-center  dark:text-neutral-300">View all</p> */}
      </span>
    </div>
    </div>
  )
}

export default Suggested