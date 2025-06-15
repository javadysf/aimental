"use client";
import { useEffect, useState } from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchInput from "../common/SearchInput";
import TherapistsCard from "../therapistsList/TherapistsCard";
import { getTherapists } from "../../core/services/api/Users/Users";
import FilterMenu from "./ClientExploreModules/FilterMenu";
import SortMenu from "./ClientExploreModules/SortMenu";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Explore = () => {
  // a state for saving hole therapists list
  const [t, sett] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [QueryParams, setQueryParams] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [searchedValue, setSearchedValue] = useState("");
  const [showSortMenu, setshowSortMenu] = useState(false);
  const pageSize = 21;
  
  const getTherapistsHandler = async () => {
    const therapists = await getTherapists();
    sett(therapists);
    setCurrentItems(therapists.results);
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
  console.log(pageCount);
  
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showSearchedItems = async (e) => {
    setQueryParams({ ...QueryParams, search: e.target.value });
    setSearchedValue(e.target.value);
  };

  useEffect(()=>{
    goToTop()
  },[currentItems])

  // when we click on each page number this func will show each page details
  const pageNumDetails = async (e) => {
    console.log(e.target.id);
    const res = await getTherapists({ page: e.target.id });
    sett(res);
    setCurrentItems(res.results);
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
    }
  };
  
  useEffect(() => {
    if (pageCount) {
      const getFiltered = async () => {
        const res = await getTherapists(QueryParams);
        setCurrentItems(res.results);
        const nums = [];
        for (
      let index = 1;
      index <= Math.ceil(res.count / pageSize);
      index++
    ) {
      nums.push(index);
    }
    setPageCount(nums);
  };
  getFiltered();
}
}, [QueryParams]);

useEffect(() => {
  getTherapistsHandler();
  goToTop();
}, []);

const [show, setShow] = useState(false);
return (
  <div className="w-full col overflow-y-scroll px-4 gap-6 py-6 h-[calc(100vh-120px)] ">
      <div className="w-full">
        <div className="flex gap-2 relative">
          <SearchInput
            searchedValue={searchedValue}
            onChange={(e) => showSearchedItems(e)}
            placeholder={"Search therapist"}
          />
          <button
            onClick={() => setshowSortMenu(!showSortMenu)}
            className="flex gap-1 border-zinc-600 border rounded-xl center p-2"
          >
            {" "}
            <SwapVertIcon /> Sort
          </button>
          {showSortMenu && (
            <SortMenu
              currentItems={currentItems}
              pageSize={pageSize}
              setshowSortMenu={setshowSortMenu}
              therapistList={t}
              setCurrentItems={setCurrentItems}
            />
          )}
          <button
            onClick={() => setShow(!show)}
            className="flex gap-1 border-zinc-600 border  rounded-xl center p-2"
          >
            {" "}
            <FilterListIcon /> Filter
          </button>
          {show && (
            <FilterMenu
            setPageCount={setPageCount}
              QueryParams={QueryParams}
              setQueryParams={setQueryParams}
              therapistList={t}
              setCurrentItems={setCurrentItems}
              setShow={setShow}
              onClick={() => setShow(!show)}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {currentItems?.map((item) => (
          <TherapistsCard therapist={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center">
        {currentItems&&pageCount&&pageCount?.length>=2&&  (
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
      </div>
    </div>
  );
};

export default Explore;
