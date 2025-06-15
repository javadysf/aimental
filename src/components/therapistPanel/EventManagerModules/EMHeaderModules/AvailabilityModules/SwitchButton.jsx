const SwitchButton = ({handleToggle,checked,css,name}) => {

  return (
<label className={`inline-flex items-center cursor-pointer`}>
  <input onChange={handleToggle} checked={checked} type="checkbox"  className="sr-only peer"/>
  <div className="relative w-11 h-[26px] border border-zinc-400  peer-focus:outline-none   dark:peer-focus:ring-blue rounded-full peer dark:bg-gray-700 after:bg-zinc-400 peer-checked:after:bg-white  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-none after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-none after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer:!text-blue peer-checked:bg-blue"></div>
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{name}</span>
</label>
  );
};

export default SwitchButton;