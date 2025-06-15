import React, { useEffect, useState } from "react";
import TherapistsCard from "./TherapistsCard";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import TherapistsFilter from "./TherapistsFilter";
import { getTherapists } from "../../core/services/api/Users/Users";
import Tags from "./row";

const Index = () => {
  // a state for saving hole therapists list
  const [t,sett]= useState([])
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const pageSize = 21;

  const getTherapistsHandler = async() =>{
    const therapists = await getTherapists()
    sett(therapists)
    setCurrentItems(therapists?.results);
    const nums = [];
    for (
      let index = 1;
      index <= Math.ceil(therapists.count / pageSize);
      index++
    ) {
      nums.push(index);
    }
    setPageCount(nums);
  };
  
console.log(t);
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
const paginateNextPage = async () => {
  if (t?.next) {
    const url = t.next;
    const params = new URLSearchParams(url.split("?")[1]);
    const page = params.get("page");
    goToTop()
    const res = await getTherapists({ page: page });

    sett(res);
    setCurrentItems(res.results);
    goToTop()
  }
};
const paginatePrevPage = async () => {
  if (t?.previous) {
    const url = t.previous;
    const params = new URLSearchParams(url.split("?")[1]);
    const page = params.get("page");
    const res = await getTherapists({ page: page });
    sett(res);
    setCurrentItems(res.results);
    goToTop()
  }
};
  useEffect(() => {
    getTherapistsHandler()
    goToTop();
  }, []);

  const cards = [
    { id: "1", card: <TherapistsFilter name={"Location"} /> },
    { id: "2", card: <TherapistsFilter name={"Session method"} /> },
    { id: "3", card: <TherapistsFilter name={"Insurance"} /> },
    { id: "4", card: <TherapistsFilter name={"Specialization"} /> },
    { id: "5", card: <TherapistsFilter name={"Treatment method"} /> },
    { id: "6", card: <TherapistsFilter name={"Gender"} /> },
    { id: "7", card: <TherapistsFilter name={"Your age"} /> },
    { id: "8", card: <TherapistsFilter name={"Identities"} /> },
    { id: "9", card: <TherapistsFilter name={"Identities"} /> },
  ];

console.log(currentItems);
  const responsive = {
    // the naming can be any, depends on you.
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 
    }
  };
  console.log(currentItems);
  return (

    <div className="flex flex-col px-40 max-lg:px-4 py-8 gap-4">
      <div className="">
    <Tags cards={cards}/>
      </div>
      <div className="flex flex-col gap-4">
        {currentItems?.map((item) => (
          <TherapistsCard therapist={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center">
      {currentItems&&  (
          <span className="flex gap-3">
            <span
              className=" cursor-pointer flex center border border-zinc-600 rounded-full w-10 h-10 text-xl"
              onClick={() => paginatePrevPage()}
            >
              <KeyboardArrowLeft />
            </span>
            {pageCount &&
              pageCount?.map((page, index) => (
                <span
                  key={index}
                  onClick={(e) => pageNumDetails(e)}
                  id={page}
                  className=" cursor-pointer flex center border border-zinc-600 rounded-full w-10 h-10 text-xl "
                >
                  {page}
                </span>
              ))}
            <span
              className=" cursor-pointer flex center border border-zinc-600 rounded-full w-10 h-10 text-xl"
              onClick={() => paginateNextPage()}
            >
              <KeyboardArrowRight />
            </span>
          </span>
        )}
        {/* <ReactPaginate
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
          pageLinkClassName="flex p-2 justify-center w-10 h-10"
          previousLinkClassName=" flex border p-2 justify-center rounded-2xl w-10 h-10"
          nextLinkClassName="flex border p-2 justify-center rounded-2xl w-10 h-10"
          activeLinkClassName="flex border p-2 justify-center rounded-2xl w-10 h-10"
        /> */}
      </div>
    </div>
  );
};

export default Index;
