import Close from "@mui/icons-material/Close";

const SelectedTags = ({tag,TaskTags,task,setTask}) => {
    console.log(tag,TaskTags);
    const tags = TaskTags?.find((item)=>item.id==tag)?.title

    const updateTaskTags = (e) =>{
        setTask({...task,tags:task?.tags?.filter((item)=>item!= e.target.id)})
    }
console.log(task);
  return (
    <div className=" border h-10 justify-between flex items-center  p-2 border-zinc-400 w-32 rounded-xl">
      {tags}
      <Close id={tag} onClick={(e)=>updateTaskTags(e)} className="!w-4 !h-4 cursor-pointer" />
    </div>
  )
}

export default SelectedTags