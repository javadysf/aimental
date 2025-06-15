import BlogCard from "../landing/BlogSectionModules/BlogCard";
import MultiCarousel from "../common/MultiCarousel"


const MostViewed = ({blogs}) => {

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
    <div className= "col gap-4 py-4 lg:h-[650px] overflow-hidden">
        <h1 className="font-semibold text-3xl text-deepBlue dark:text-neutral-100"  >Most Viewed</h1>
    <div className="flex relative flex-col max-lg:p-2 max-lg:py-4 gap-4 ">
      <div className="carousel-wrapper relative">
        <MultiCarousel itemcalss="flex justify-start !w-[328px]" cards={blogs} responsive={responsive} css={"carousel"} />
      </div>
      <span className="float-right  rounded-2xl w-32 self-end p-2 cursor-pointer dark:border-neutral-300">
        {/* <p className="text-blue text-center  dark:text-neutral-300">View all</p> */}
      </span>
    </div>
    </div>
  )
}

export default MostViewed