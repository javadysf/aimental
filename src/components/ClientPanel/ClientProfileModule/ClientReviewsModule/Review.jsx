import JohnPic from "../../../../assets/img/therapistslist/male.png";
import TagModule from "../../../common/TagModule";
import Rating from "@mui/material/Rating";
import ActionMenu from "../../../therapistPanel/TreatmentFilesModule/TreatmentDataGridModules/ActionMenu";
import Image from "next/image";

const Review = () => {
  return (
    <div className="col">
    <div className="flex w-full gap-2 p-3 justify-between  border border-zinc-400 rounded-2xl">
      <span className="col gap-2">
        <span className="flex gap-2">
          <Image alt="tp-pic" width={64} height={64} className="w-16 h-16 max-lg:w-10 max-lg:h-10 rounded-full" src={JohnPic} />
          <span className="col dark:text-neutral-300">
            <h5 className="title-2 text-lg max-lg:text-sm ">John Petrucci</h5>
            <h5 className="text-sm font-medium max-lg:text-xs ">Submited jun 03, 2024</h5>
          </span>
        </span>
        <Rating name="half-rating" defaultValue={2.5} disabled={true} precision={0.5} />
        <p className="h-12 overflow-hidden dark:text-zinc-400 max-lg:text-sm">
          Feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris sit
          amet massa vitae tortor condimentum. Ipsum faucibus vitae aliquet
          nec ullamcorper sit amet risus. Sed odio morbi quis commodo odio.
        </p>
        <span className="pl-2 text-blue dark:text-blue-300 cursor-pointer text-sm">Show more</span>
      </span>
      <span className="col gap-2 items-end">
        <ActionMenu />
        <TagModule css={" bg-[#EAFFF5] dark:bg-[#006B4A] !py-0 !max-lg:text-sm "} title={"Approved"} />
      </span>
    </div>
  </div>
  )
}

export default Review