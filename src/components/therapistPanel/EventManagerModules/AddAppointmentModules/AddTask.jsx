import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import TagModule from "../../../common/TagModule"
import { useEffect, useRef, useState } from "react";
import BasicDatePicker from "./BasicDatePicker";
import Quill from "./Quill";
import TimePicker from "../EMHeaderModules/AvailabilityModules/TimePicker";
import { getTasksPriority, getTasksTags } from "@/core/services/api/BaseInfo/BaseInfo";
import SelectedTags from "./SelectedTags";

export default function AddTask({editMode,task,setTask,setShowContacts,CreateTaskHandler,setTaskMenu}) {
  const [TasksPriority, setTasksPriority] = useState([]);
  const [TaskTags, setTaskTags] = useState([]);
  const quillRef = useRef(null);

  const getText = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      setTask({...task,description:editor.getText()})
    }
  };


  const getTasksPriorityHandler = async () => {
    setTasksPriority(await getTasksPriority());
    setTaskTags(await getTasksTags());
  };

  useEffect(()=>{
getTasksPriorityHandler()

  },[])
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="col gap-2 text-neutral-800 bg-white w-[500px] text-sm border border-zinc-400 rounded-2xl p-4">
    <span className=" flex justify-between font-normal border-b border-zinc-400 ">
      <h4 className="text-lg">Task</h4>
      <CloseIcon
        className="cursor-pointer"
        onClick={() => setTaskMenu(false)}
      />
    </span>
    <input
      value={task?.title}
      onChange={(e) => setTask({ ...task, title: e.target.value })}
      type="text"
      placeholder="Title"
      className="border border-zinc-400 rounded-2xl text-md font-medium p-2 placeholder-zinc-800"
    />
    <span
      onClick={() => setShowContacts(true)}
      className="border cursor-pointer hover:bg-blue-50 border-zinc-400 rounded-2xl text-md font-medium p-2"
    >
      Assing To
    </span>
    <div className="timepicker flex gap-2 items-center text-md font-medium">
      <BasicDatePicker
        onChange={(newvalue) =>
          setTask({
            ...task,
            date: `${newvalue?.$y}-${newvalue?.$M}-${newvalue?.$D}`,
          })
        }
      />
      <TimePicker
    
        onChange={(newvalue) =>
          setTask({ ...task, time: `${newvalue?.$H}:${newvalue?.$m}` })
        }
        placeholder={"Start Time"}
      />
    </div>
    <select
    value={editMode&&task.priority}
      onChange={(e) => setTask({ ...task, priority: e.target.value })}
      className="rounded-xl text-md font-medium p-2 border border-zinc-400"
    >
      <option disabled selected>
        Priority
      </option>
      {TasksPriority&&TasksPriority?.map((item) => (
        <option key={item.id} value={item.id}>
          {item?.title}
        </option>
      ))}
    </select>
    <select
      onChange={(e) =>
        setTask({ ...task, tags: [...task.tags, e.target.value] })
      }
      className="rounded-xl text-md font-medium p-2 border border-zinc-400"
    >
      <option disabled selected>
        Tags
      </option>
      {TaskTags&&TaskTags?.map((item) => (
        <option key={item.id}  value={item.id}>{item?.title}</option>
      ))}
    </select>
    <span className="flex gap-2 flex-wrap w-full flex justify-start">
      {task?.tags?.map((tag) => (
          <SelectedTags key={tag.id} setTask={setTask} task={task} TaskTags={TaskTags} tag={tag}/>
      ))}
    </span>
    <span className="border border-zinc-400 rounded-2xl p-2">
      <Quill quillRef={quillRef} getText={getText}  />
    </span>
    <span className="flex gap-4 items-center">
      <h4>Status : </h4>
      <TagModule
        css={"!rounded-3xl !py-[2px] px-2 h-[30px]"}
        title={
          <div className="flex gap-2 center text-sm">
            <div className="w-3 h-3 bg-blue rounded-full"></div>To do
          </div>
        }
      />
      <TagModule
        css={"!rounded-3xl !py-[2px] px-2 h-[30px]"}
        title={
          <div className="flex gap-2 center text-sm">
            <div className="w-3 h-3 bg-[#FCC99E] rounded-full"></div>In
            progress
          </div>
        }
      />
      <TagModule
        css={"!rounded-3xl !py-[2px] px-2 h-[30px]"}
        title={
          <div className="flex gap-2 center text-sm">
            <div className="w-3 h-3 bg-[#2CEAA3] rounded-full"></div>Done
          </div>
        }
      />
    </span>
    <span className="flex justify-between center gap-2">
      <span
        onClick={() => setTaskMenu(false)}
        className="white-button flex center w-full cursor-pointer"
      >
        Cancel
      </span>
      <span
        onClick={() => CreateTaskHandler()}
        className="blue-button flex center w-full"
      >
        Create
      </span>
    </span>
  </div>
  );
}
