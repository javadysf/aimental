import DropDownItems from "../common/dropdownItems/DropDownItems"


const TherapistsFilter = ({name}) => {
  return (
  <div className="border rounded-3xl p font-medium text-xs w-max ">
         <DropDownItems itemName={name}/>
  </div>
  )
}

export default TherapistsFilter