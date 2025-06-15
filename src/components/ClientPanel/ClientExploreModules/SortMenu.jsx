const SortMenu = ({items,setCurrentItems,setshowSortMenu,therapistList,currentItems,pageSize}) => {

      const handleAZSort = (type) => {
        if(type === 'a-z')
            {
                setCurrentItems([...currentItems].sort((a, b) => a.last_name.localeCompare(b.last_name)));
      }
       else if (type === 'z-a') {
        setCurrentItems([...currentItems].sort((a, b) => b.last_name.localeCompare(a.last_name)));
      }
      setshowSortMenu(false)
      };
  return (
    <div className='dark:bg-neutral-800  absolute col shadow-right-bottom bg-white p-4 gap-3 rounded-[16px] w-[200px] border border-zinc-400  right-[80px] top-[45px] '>
        <span onClick={()=>handleAZSort("a-z")} className='cursor-pointer hover:bg-blue-50 rounded-2xl p-2 font-normal'>A-Z</span>
        <span onClick={()=>handleAZSort("z-a")} className='cursor-pointer hover:bg-blue-50 rounded-2xl p-2 font-normal'>Z-A</span>
    </div>
  )
}

export default SortMenu