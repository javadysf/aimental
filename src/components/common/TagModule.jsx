const TagModule = ({ title, css }) => {
  return (
    <span
      className={`border dark:bg-zinc-800 dark:text-neutral-300 w-fit h-9  text-xs cursor-pointer content-center  rounded-[16px] px-4 py-1 max-lg:px-2  ${css}`}
    >
      {title}
    </span>
  );
};

export default TagModule;
