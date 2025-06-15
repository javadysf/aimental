const SortMenu = ({blogs,setBlogs,setshowSortMenu}) => {
    const handleSort = (type) => {
        const sorted = [...blogs];
        sorted.sort((a, b) => {
          const dateA = new Date(a.created_dt);
          const dateB = new Date(b.created_dt);
          if (type === 'asc') {
            return dateA.getTime() - dateB.getTime();
          } else if(type === 'desc') {
            return dateB.getTime() - dateA.getTime();
          }
        });
        setBlogs(sorted);
        setshowSortMenu(false)
      };
      const handleAZSort = (type) => {
        if(type === 'a-z')
            {
              setBlogs([...blogs].sort((a, b) => a.short_summary.localeCompare(b.short_summary)));
      }
       else if (type === 'z-a') {
        setBlogs([...blogs].sort((a, b) => b.short_summary.localeCompare(a.short_summary)));
      }
      setshowSortMenu(false)
      };
  return (
    <div className='dark:bg-neutral-800  absolute col shadow-right-bottom bg-white p-4 gap-3 rounded-[16px] w-[200px] border border-zinc-400  right-[80px] top-[45px] '>
        <span onClick={()=>handleSort("asc")} className='cursor-pointer hover:bg-blue-50 rounded-2xl p-2 font-normal'>Date ascending</span>
        <span onClick={()=>handleSort("desc")} className='cursor-pointer hover:bg-blue-50 rounded-2xl p-2 font-normal'>Date descending</span>
        <span onClick={()=>handleAZSort("a-z")} className='cursor-pointer hover:bg-blue-50 rounded-2xl p-2 font-normal'>A-Z</span>
        <span onClick={()=>handleAZSort("z-a")} className='cursor-pointer hover:bg-blue-50 rounded-2xl p-2 font-normal'>Z-A</span>
    </div>
  )
}

export default SortMenu