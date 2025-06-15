import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogCard from "../landing/BlogSectionModules/BlogCard";

const MultiCarousel = ({ type, cards, responsive, css, itemcalss }) => {
  // this component will receive 3 props cards to show && responsive mode details && css


  const itemsToshow = cards;

  return (
    <Carousel
      itemClass={itemcalss}
      sliderClass="flex gap-4"
      keyBoardControl={true}
      className={css }
      renderArrowsWhenDisabled={true}
      responsive={responsive}
    >
  
       { itemsToshow?.map((item) => <BlogCard key={item.slug} blog={item} />)}
      {/* {type === "comment" &&
        itemsToshow?.map((item) => <span key={item.id}>{item.card}</span>)} */}
    </Carousel>
  );
};

export default MultiCarousel;
