import Link from "next/link"
import UserIcon from "../../../assets/img/therapistdashboard/messages/user.svg"
import MoreHorizMenu from "../../therapistPanel/therapistPanelModules/MoreHorizMenu"
import Image from "next/image"

const TicketShortView = ({onClick,ticket}) => {
  return (
    <div
    onClick={onClick} 
    className={`flex h-[100px] w-[330px] max-lg:w-full gap-4 p-3 ${ticket?.closed?"bg-zinc-50":"bg-blue-50"}  rounded-2xl focus:bg-neutral-100 cursor-pointer dark:bg-zinc-800`}
  >
    <Link className="overflow-hidden w-full flex gap-4" href={`/client/ticket/${ticket?.id}`} >
    <Image alt="ai-usericon" width={32} height={32} className="med-icon" src={UserIcon} />
    <span className="col w-full  overflow-hidden gap-2">
      <span className="flex justify-between">
        <span className="text-md max-lg:text-sm flex gap-1 center font-semibold">
          {ticket?.subject}
        </span>
        <p className="font-normal text-xs">4:00 pm</p>
      </span>
      <p className="truncate text-sm "> {ticket?.text}</p>
    </span>
    <span className="flex center">
      <MoreHorizMenu position="horizental" />
    </span>
    </Link>
  </div>
  )
}

export default TicketShortView