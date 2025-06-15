import { useEffect, useState } from "react";
import SearchInput from "../common/SearchInput";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterListIcon from "@mui/icons-material/FilterList";
import BlogCard from "../landing/BlogSectionModules/BlogCard";
import FilterItemsMenu from "./BlogSectionModules/FilterItemsMenu";
import SortMenu from "./BlogSectionModules/SortMenu";
import { getBlogs } from "@/core/services/api/Blogs/blogs";

const BlogsSection = ({ blogs,categories,Authors,hasMore,setBlogs,filterParams,setFilterParams,loadMore,items }) => {
  const [show, setShow] = useState(false);
  const [showSortMenu, setshowSortMenu] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");

 

  const showSearchedItems = async(e) => {
    setFilterParams({...filterParams,search:e.target.value})
    setSearchedValue(e.target.value);
  };



  useEffect(() => {
    const getFiltered=async()=>{
      setBlogs(await getBlogs(filterParams))
    }
    getFiltered()
  }, [filterParams])



  return (
    <div className="col gap-6 lg:min-h-[450px]">
      <div className="flex gap-2 relative">
        <SearchInput
          searchedValue={searchedValue}
          onChange={(e) => showSearchedItems(e)}
        />
        <button onClick={()=>setshowSortMenu(!showSortMenu)} className="flex gap-1 border-zinc-600 border rounded-xl center p-2">
          {" "}
          <SwapVertIcon /> Sort
        </button>
        {showSortMenu && <SortMenu setshowSortMenu={setshowSortMenu} blogs={blogs} setBlogs={setBlogs} />}

        <button
          onClick={() => setShow(!show)}
          className="flex gap-1 border-zinc-600 border  rounded-xl center p-2"
        >
          {" "}
          <FilterListIcon  /> Filter
        </button>
        {show && <FilterItemsMenu setBlogs={setBlogs} filterParams={filterParams} setFilterParams={setFilterParams}  Authors={Authors} categories={categories}  setShow={setShow} onClick={() => setShow(!show)} />}
      </div>
      <div className="flex flex-wrap gap-4">
        {items?.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
      {hasMore && (
        <div className="flex center w-full">
          <span
            className=" white-button flex center cursor-pointer"
            onClick={() => loadMore()}
          >
            Load More
          </span>
        </div>
      )}
    </div>
  );
};

export default BlogsSection;
