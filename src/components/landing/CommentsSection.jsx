import CommentsCard from "./CommentsSectionModule/CommentsCard";
import MultiCarousel from "../common/MultiCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CommentsSection = () => {
  const comments = [
    { id: "1", card: <CommentsCard /> },
    { id: "2", card: <CommentsCard /> },
    { id: "3", card: <CommentsCard /> },
    { id: "4", card: <CommentsCard /> },
    { id: "5", card: <CommentsCard /> },
    { id: "6", card: <CommentsCard /> },
  ];
  const responsive = {
    // the naming can be any, depends on you.
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };
  return (
    <div className="p-8 max-lg:p-4 flex flex-col gap-8 dark:text-neutral-300 mb-16 ">
      <h1 className="text-4xl text-bold text-deepBlue max-lg:text-2xl dark:text-blue-200">How others think about AIMental</h1>
      <div className="carousel-wrapper flex relative flex-col">
      <Carousel
      sliderClass="flex gap-4"
      keyBoardControl={true}
      className={"carousel" }
      renderArrowsWhenDisabled={true}
      responsive={responsive}
    >
     {   comments?.map((item) => <span key={item.id}>{item.card}</span>)}
    </Carousel>
      </div>
    </div>
  );
};
export default CommentsSection;
