import Form from "./FormsModule/Form";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Forms = ({questionnaires,setrefresh,refresh,currentItems,setCurrentItems}) => {
 
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const pageSize = 12;
  console.log(questionnaires);
  useEffect(() => {
    const endOffset = itemOffset + pageSize;
    setCurrentItems(questionnaires?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(questionnaires?.length / pageSize));
  }, [itemOffset, pageSize,questionnaires]);
  
      
  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageSize) % questionnaires?.length;
    setItemOffset(newOffset);
  };
   
  return (
    <div className="col gap-4 justify-between h-inherit overflow-y-scroll overflow-x-hidden">
        <div className="flex flex-wrap gap-4 justify-start ">
        {
            currentItems?.map((item)=><Form questionnaires={questionnaires}  setrefresh={setrefresh} refresh={refresh} key={item.id} item ={item} />)
        }
        </div>
        {questionnaires?.length>pageSize&&
         <div className="flex center bottom-8">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<ArrowForwardIosIcon sx={{width:"15px"}} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<ArrowBackIosIcon sx={{width:"15px"}}/>}
          renderOnZeroPageCount={null}
          containerClassName="p-5 flex gap-2 justify-center text-lg font-medium"
          breakClassName=""
          breakLinkClassName="justify-center"
          pageLinkClassName="flex p-2 justify-center w-10 h-10 dark:text-neutral-300 dark:border-neutral-300"
          previousLinkClassName=" flex border p-2 justify-center rounded-2xl w-10 h-10 dark:text-neutral-300 dark:border-neutral-300"
          nextLinkClassName="flex border p-2 justify-center rounded-2xl w-10 h-10 dark:text-neutral-300 dark:border-neutral-300"
          activeLinkClassName="flex border p-2 justify-center rounded-2xl w-10 h-10 dark:text-neutral-300 dark:border-neutral-300"
        />
      </div>
}
    </div>
  );
};

export default Forms;
