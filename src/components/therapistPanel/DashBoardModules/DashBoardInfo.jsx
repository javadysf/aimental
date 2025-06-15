import SelectMenu from "../../common/SelectMenu";
import { getToday } from "../../../core/services/common/storage.services";

const DashBoardInfo = () => {

  return (
    <div className="col dark:bg-zinc-800 bg-neutral-100 p-8 max-lg:p-4 gap-4 rounded-2xl">
      <span className="w-full dark:text-neutral-300 flex gap-4 items-center">
        <SelectMenu title={"Today"} />
        <h3 className="font-semibold text-xl max-lg:text-lg dark:!text-neutral-300 text-neutral-800">{getToday()}</h3>
      </span>
      <div className="flex justify-evenly">
        <span className="col items-center">
          <h4>Appointments</h4>
          <h4  className="font-semibold">5</h4>
        </span>
        <span className="h-[100%] w-[1px] bg-neutral-800 dark:bg-zinc-400"></span>
        <span className="col items-center">
          <h4>Hours</h4>
          <h4 className="font-semibold">2h 45m</h4>
        </span>
        <span className="h-[100%] w-[1px] bg-neutral-800 dark:bg-zinc-400 "></span>
        <span className="col items-center">
          <h4>Income</h4>
          <h4 className="font-semibold">350$</h4>
        </span>
      </div>
    </div>
  );
};

export default DashBoardInfo;
