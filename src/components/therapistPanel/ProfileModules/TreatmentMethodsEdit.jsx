import React, { useEffect, useState } from "react";
import SearchInput from "../../common/SearchInput";
import CloseIcon from "@mui/icons-material/Close";
import { getMethods } from "@/core/services/api/TherapistProfile/TherapistProfile";

const TreatmentMethodsEdit = ({
  allApproaches,
  setallApproaches,
  editedprofile,
  setEditedProfile,
}) => {
  const [searchedValue, setSearchedValue] = useState();
  const [searchSuggest, setsearchSuggest] = useState(false);
  const selectMethods = async(e) => {
    setSearchedValue(e.target.value);
    e.target.value != "" ? setsearchSuggest(true) : setsearchSuggest(false);
    setallApproaches(await getMethods({search:e.target.value}))
  };
  const onSearchClick =()=>{
    setsearchSuggest(true)
  }

  console.log(editedprofile);
  return (
    <div className="col gap-6 border-b border-zinc-400 py-6">
      <div className="relative col gap-1">
        <SearchInput
        onClick={()=>onSearchClick()}
          onChange={(e) => selectMethods(e)}
          searchedValue={searchedValue}
          placeholder={"Search in Treatment methods"}
        />
        {searchSuggest && (
          <div className=" relative flex overflow-auto flex-wrap flex opacity-90 gap-3 rounded-lg p-4 w-full h-24 bg-zinc-400">
            <span className="absolute items-start top-[0] right-[3px]">
                <CloseIcon
                  onClick={() =>setsearchSuggest(false)}
                  className="!w-3 !h-3 !cursor-pointer"
                />
              </span>
            {allApproaches?.map(({ title, id }) => (
              <>
                <span
                  className="cursor-pointer bg-zinc-600 flex gap-2 justify-between relative rounded-lg h-fit min-w-fit px-5 py-2"
                  key={id}
                  onClick={() =>
                    setEditedProfile({
                      ...editedprofile,
                      therapeutic_approaches:
                        editedprofile?.therapeutic_approaches
                         && [
                              ...editedprofile?.therapeutic_approaches,
                              { id, title },
                            ]
                       
                    })
                  }
                >
                  {" "}
                  <h4 className="flex w-full text-[1vw] ">{title}</h4>
                </span>
              </>
            ))}
          </div>
        )}
      </div>
      <h2 className="title-2 ">Treatment methods</h2>
      <div className="flex gap-2 flex-wrap ">
        {editedprofile &&
          editedprofile?.therapeutic_approaches?.map(({ id, title, index }) => (
            <span
              className="bg-zinc-100 flex gap-2 border border-zinc-600 rounded-xl justify-between relative rounded-lg h-fit min-w-fit px-5 py-2"
              key={index}
            >
              {" "}
              <h4 className="flex w-full text-[1vw] ">{title}</h4>
              <span className="absolute items-start top-[0] right-[3px]">
                <CloseIcon
                  onClick={() =>
                    setEditedProfile({...editedprofile,
                      therapeutic_approaches: editedprofile?.therapeutic_approaches?.filter(
                        (item) => item.id != id
                      )}
                  )
                  }
                  className="!w-3 !h-3 !cursor-pointer"
                />
              </span>{" "}
            </span>
          ))}
      </div>
    </div>
  );
};

export default TreatmentMethodsEdit;
