import Review from "./ClientReviewsModule/Review";


const ClientReviews = () => {
  return (
    <div className="col w-1/2 max-lg:w-full bg-zinc-50 dark:bg-zinc-800 p-6 max-lg:p-2 gap-2 h-fit rounded-2xl">
      <h2 className="title-2 text-2xl max-lg:text-md "> Your Reviews</h2>
<Review/>
<Review/>
    </div>
  );
};

export default ClientReviews;
