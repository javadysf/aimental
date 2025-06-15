import Link from "next/link";
import BookNowButton from "../common/BookNowButton";
import DropDownItems from "../common/dropdownItems/DropDownItems";
import TagModule from "../common/TagModule";

const BookCard = () => {
  return (
    <div className="max-lg:hidden flex flex-col gap-3 h-max bg-neutral-100 rounded-[32px] w-[35%] max-lg:w-full dark:bg-zinc-800 p-4">
      <h1 className="font-semibold text-2xl">Book Session</h1>
      <label>Insurance</label>
      <div className="border rounded-[16px] p h-12 content-center font-medium text-xs">
        <DropDownItems itemName={"Gender"} />
      </div>
      <h4>Next availabilities</h4>
      <h4 className="font-semibold">Wed , june 26</h4>
      <span className="flex flex-wrap justify-between gap-3">
        <TagModule title={"4:30 PM"} css={" w-[30%] !text-lg text-center"} />
        <TagModule title={"4:30 PM"} css={" w-[30%] !text-lg text-center"} />
        <TagModule title={"4:30 PM"} css={" w-[30%] !text-lg text-center"} />
        <TagModule title={"4:30 PM"} css={" w-[30%] !text-lg text-center"} />
        <TagModule title={"4:30 PM"} css={" w-[30%] !text-lg text-center"} />
        <TagModule title={"4:30 PM"} css={" w-[30%] !text-lg text-center"} />
        
      </span>
      <Link href={"/therapist-calendar"} className="border rounded-[16px] p-4 h-12 text-center flex items-center justify-center ">
        {" "}
        <span className="dark:text-neutral-100">
          More availabilities
        </span>
      </Link>
      <BookNowButton css={" h-12 "} />
    </div>
  );
};

export default BookCard;
