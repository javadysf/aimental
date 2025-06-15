import UserIcon from "../../../../assets/img/landing/blog/person.png";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import chekmark from '../../../../assets/img/therapistdashboard/messages/checkmark.svg'; 
import Image from "next/image";

const SendedMessage = () => {
  return (
    <div className="flex justify-end self-end gap-4">
      <span className="col">
        <span className="col">
          <p className="bg-blue-50 rounded-2xl	text-sm rounded-tr-none p-4">
            Feugiat sed lectus vestibulum mattis ullamcorper velit. Mauris sit
            amet mass.
          </p>
          <span className="text-xs flex justify-between items-center">
            <span className="text-2xl text-zinc-700 cursor-pointer hover:text-zinc-800">
    <MoreHorizIcon/>
            </span>
          <span className="text-zinc-700 flex gap-1 ">
            <span className="w-full">
            4:00 PM
            </span>
            <Image alt="chechmark" width={16} height={16} className="xs-icon" src={chekmark} />
          </span>
            </span>
        </span>
      </span>
      <Image alt="avatar" width={48} height={48} className="med-icon" src={UserIcon} />
    </div>
  );
};

export default SendedMessage;
