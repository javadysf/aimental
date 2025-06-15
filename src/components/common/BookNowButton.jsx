
const BookNowButton = ({css,onClick}) => {
  return (
      <button onClick={onClick} className={`${css} max-lg:auto  max-lg:text-sm gap-2 font-medium text-md flex h-12 center  text-white bg-blue dark:bg-blue-200 dark:text-deepBlue rounded-[16px]`}>
        Book Now
      </button>
  );
};

export default BookNowButton;
