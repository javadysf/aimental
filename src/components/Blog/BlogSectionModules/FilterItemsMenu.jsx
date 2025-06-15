import { getBlogs } from "@/core/services/api/Blogs/blogs";
import CloseIcon from "@mui/icons-material/Close";
import {  MenuItem, Select } from "@mui/material";
import { useState } from "react";

const FilterItemsMenu = ({
  categories,
  onClick,
  setBlogs,
  filterParams,setFilterParams,
  setShow,
  Authors
}) => {

  const showFilteredItems = async() => {
      setBlogs(await getBlogs(filterParams))
      
      setShow(false)
  };

  const ResetSearch = async()=>{
       setBlogs(await getBlogs())
       setFilterParams({})
       setShow(false)
  }

  return (
    <div className=" dark:bg-neutral-800  absolute col shadow-right-bottom bg-white p-8 gap-3 rounded-[32px] w-[450px]  right-0 top-[45px] ">
      <div className="flex text-lg font-normal w-full justify-between">
        <h4>Filters</h4>{" "}
        <CloseIcon sx={{ cursor: "pointer" }} onClick={onClick} />
      </div>
      <hr />
      <div className="col gap-2">
        <h2 className="text-neutral-500 dark:text-neutral-300">Categories</h2>
        <Select
        value={filterParams.categories?filterParams.categories:""}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Categories"
          name="Categories"
          onChange={(e)=>{setFilterParams({...filterParams,categories:e.target.value})}}
          className=" !rounded-3xl dark:!text-neutral-300   dark:border dark:!border-neutral-300"
        >
          <MenuItem disabled value="Categories">
            <em>Categories</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem
              className="dark:bg-neutral-800"
              key={category.id}
              value={category.id}
            >
              {category.title}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="col gap-2">
        <h2 className="text-neutral-500 dark:text-neutral-300">Authors</h2>
        <Select
         value={filterParams.author?filterParams.author:""}
         onChange={(e)=>{setFilterParams({...filterParams,author:e.target.value})}}
         name="Authors"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Categories"
           className=" !rounded-3xl dark:!text-neutral-300   dark:border dark:!border-neutral-300"
        >
          <MenuItem disabled value="">
            <em>Authors</em>
          </MenuItem>
          {Authors.map((author) => <MenuItem key={author.id} value={author.id}>{author.display_name}</MenuItem>)}
      
        </Select>
      </div>
      <hr />
      <div className="flex justify-between w-full">
        <button onClick={()=>ResetSearch()} className="white-button">Reset All</button>
        <button onClick={()=>showFilteredItems()} className="blue-button"> Apply</button>
      </div>
    </div>
  );
};

export default FilterItemsMenu;
