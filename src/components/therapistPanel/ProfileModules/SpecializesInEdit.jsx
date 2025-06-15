import CloseIcon from "@mui/icons-material/Close";
import SearchInput from "../../common/SearchInput";
import { useState } from "react";

const SpecializesInEdit = ({
  allworkfields,
  editedprofile,
  setEditedProfile,
  setallworkfields,
}) => {
  const [searchedValue, setSearchedValue] = useState();
  const [searchSuggest, setsearchSuggest] = useState(false);
  const selectMethods = async(e) => {
    setSearchedValue(e.target.value);
    e.target.value != "" ? setsearchSuggest(true) : setsearchSuggest(false);
    setallworkfields(await getMethods({search:e.target.value}))
  };
  const onSearchClick =()=>{
    setsearchSuggest(true)
  }
  return (
    <div className="col gap-6 border-b border-zinc-400 py-6">
      <div className="relative col gap-1">
        <SearchInput
          onClick={()=>onSearchClick()}
          searchedValue={searchedValue}
          onChange={(e) => selectMethods(e)}
          placeholder={"Search in Specializes"}
        />
        {searchSuggest && (
          <div className="relative flex overflow-auto flex-wrap flex opacity-90 gap-3 rounded-lg p-4 w-full h-24 bg-zinc-400">
                  <span className="absolute items-start top-[0] right-[3px]">
                <CloseIcon
                  onClick={() =>setsearchSuggest(false)}
                  className="!w-3 !h-3 !cursor-pointer"
                />
              </span>
            {allworkfields?.map(({ title, id }) => (
              <>
                <span
                  className="cursor-pointer bg-zinc-600 flex gap-2 justify-between relative rounded-lg h-fit min-w-fit px-5 py-2"
                  key={id}
                  onClick={() =>
                    setEditedProfile({
                      ...editedprofile,
                      work_field: 
                        editedprofile?.work_field
                         && [
                              ...editedprofile?.work_field,
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
      <h2 className="title-2">Specializes in</h2>
      <div className="flex gap-2 flex-wrap">
        {editedprofile &&
          editedprofile?.work_field?.map(({ id, title, index }) => (
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
                        work_field: editedprofile?.work_field?.filter(
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

export default SpecializesInEdit;
