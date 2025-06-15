
import { useState } from "react";


const SelectMenu = ({title,items}) => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  return (
<select className=" rounded-xl text-md font-medium  bg-zinc-50 p-2 border border-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 border-zinc-400">
<option disabled selected>{title}</option>
<option>1</option>
<option>2</option>
<option>3</option>
</select>
  )
}

export default SelectMenu