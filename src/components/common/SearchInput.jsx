const SearchInput = ({placeholder,onChange,searchedValue,onClick,css}) => {
  return (
    <span onClick={onClick?()=>onClick():()=>{}} className="flex h-10 text-sm border-zinc-600 gap-1 border-[1px] w-full text-medium rounded-xl dark:text-neutral-300 py-1 px-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className=" !self-center !dark:text-neutral-300 " viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
    <input onChange={(e)=>onChange(e)}  value={searchedValue} className={` pl-2 ${css}  dark:placeholder-zinc-400 outline-none w-full `} placeholder={placeholder?placeholder:"Search"} />
  </span>
  )
}

export default SearchInput