import {
  getMethods,
  getSpecialization,
} from "@/core/services/api/TherapistProfile/TherapistProfile";
import { getTherapists } from "@/core/services/api/Users/Users";
import CloseIcon from "@mui/icons-material/Close";
import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const FilterMenu = ({ setShow,setCurrentItems,setQueryParams,QueryParams,setPageCount }) => {

  const [Approaches, setApproaches] = useState([]);
  const [workfields, setWorkfield] = useState([]);

  useEffect(() => {
    const getFilterMenuItems = async () => {
      setApproaches(await getMethods());
      setWorkfield(await getSpecialization());
    };
    getFilterMenuItems();
  }, []);

  const showFilteredItems = async() => {
    const res = await getTherapists(QueryParams)
    setCurrentItems(res.results)
    setShow(false)
  };

  const ResetSearch = async()=>{
    const res = await getTherapists()
    setCurrentItems(res.results)
        const nums = [];
    for (
      let index = 1;
      index <= Math.ceil(res.count / 21);
      index++
    ) {
      nums.push(index);
    }
    console.log(nums);
    setPageCount(nums);
    setQueryParams({})
    setShow(false)
}
  return (
    <div className=" dark:bg-neutral-800  absolute col shadow-right-bottom bg-white p-8 gap-3 rounded-[32px] w-[450px]  right-0 top-[45px] ">
      <div className="flex text-lg font-normal w-full justify-between">
        <h4>Filters</h4>{" "}
        <CloseIcon sx={{ cursor: "pointer" }} onClick={() => setShow(false)} />
      </div>
      <hr />
      <div className="col gap-2">
        <h2 className="text-neutral-500 dark:text-neutral-300">Approaches</h2>
        <Select
          value={QueryParams?.therapeutic_approaches?QueryParams.therapeutic_approaches:""}
          labelId="demo-simple-select-label"
          name="Approaches"
          id="demo-simple-select"
          onChange={(e)=>{setQueryParams({...QueryParams,therapeutic_approaches:e.target.value})}}
          placeholder="Categories"
          className=" !rounded-3xl dark:!text-neutral-300   dark:border dark:!border-neutral-300"
        >
          <MenuItem disabled value="Approaches">
            <em>Approaches</em>
          </MenuItem>
          {Approaches.map(({ id, title }) => (
            <MenuItem className="dark:bg-neutral-800" key={id} value={id}>
              {title}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="col gap-2">
        <h2 className="text-neutral-500 dark:text-neutral-300">Work Field</h2>
        <Select
        value={QueryParams?.work_field?QueryParams.work_field:""}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="Work Field"
          placeholder="Work Field"
          onChange={(e)=>{setQueryParams({...QueryParams,work_field:e.target.value})}}
          className=" !rounded-3xl dark:!text-neutral-300   dark:border dark:!border-neutral-300"
        >
          <MenuItem disabled value="">
            <em>Work Field</em>
          </MenuItem>
          {workfields.map(({ id, title }) => (
            <MenuItem className="dark:bg-neutral-800" key={id} value={id}>
              {title}
            </MenuItem>
          ))}
        </Select>
      </div>
      <hr />
      <div className="flex justify-between w-full">
        <button onClick={()=>ResetSearch()} className="white-button">Reset All</button>
        <button onClick={() => showFilteredItems()} className="blue-button">
          {" "}
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterMenu;
