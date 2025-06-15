const SortMenu = ({questionnaire,setquestionnaire,setshowSortMenu}) => {
    const handleSort = (type) => {
        const sorted = [...questionnaire];
        sorted.sort((a, b) => {
          const dateA = new Date(a.created_dt);
          const dateB = new Date(b.created_dt);
          if (type === 'asc') {
            return dateA.getTime() - dateB.getTime();
          } else if(type === 'desc') {
            return dateB.getTime() - dateA.getTime();
          }
        });
        setquestionnaire(sorted);
        setshowSortMenu(false)
      };
      const handleAZSort = (type) => {
        if(type === 'a-z')
            {
                setquestionnaire([...questionnaire].sort((a, b) => a.title.localeCompare(b.title)));
      }
       else if (type === 'z-a') {
        setquestionnaire([...questionnaire].sort((a, b) => b.title.localeCompare(a.title)));
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