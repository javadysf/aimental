// import CloseIcon from "@mui/icons-material/Close";
const Tags = ({ title, onClick }) => {
  return (
    <span
      className={`border flex gap-3  dark:bg-zinc-800 dark:text-neutral-300 w-fit h-8  text-xs center  rounded-[16px] px-2  py-1 max-lg:px-2`}
    >
      <span>{title}</span>
    {/* <CloseIcon onClick={()=>onClick()} className=" !cursor-pointer !w-4 !h-4 " /> */}
    <span onClick={()=>onClick()} className=" !cursor-pointer !w-4 !h-4 " />
    </span>
  );
};

export default Tags;
