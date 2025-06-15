import { useDispatch, useSelector } from "react-redux";
import starlogo from "../../../assets/img/therapistdashboard/star.svg";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleIcon from "@mui/icons-material/PeopleOutline";
import MessageShortView from "./MessengerInboxModules/MessageShortView";
import MoreHorizMenu from "../therapistPanelModules/MoreHorizMenu";
import Skeleton from "@mui/material/Skeleton";
import SearchInput from "../../common/SearchInput";
import ChatScreen from "./ChatScreen";
import { useState } from "react";
import Image from "next/image";
// import { useOutletContext } from "react-router-dom";

const MessangerInbox = () => {

  // const context  = useOutletContext();
  // const setshowFooter = context[1];
  //  const showFooter = context[0]



 const dispatch = useDispatch();
// for mobile view we need a state 
 const [displayChatScreen,setdisplayChatScreen] = useState(false)

  const websocket = useSelector((state) => state.WebsocketSlice.websocket);
  const GpMsgeHistory = useSelector((state) => state.WebsocketSlice.GpMsgeHistory);
  const ChnlMsgeHistory = useSelector((state) => state.WebsocketSlice.ChnlMsgeHistory);
  const PvMsgeHistory = useSelector((state) => state.WebsocketSlice.PvMsgeHistory);

  const channels = useSelector(
    (state) => state.WebsocketSlice.data?.message?.channels
  );
  const groups = useSelector(
    (state) => state.WebsocketSlice.data?.message?.groups
  );
  const privateMessages = useSelector(
    (state) => state.WebsocketSlice.data?.message?.private
  );

  const CreateItems = [
    {
      id: "1",
      title: "New Message",
      icon: <PersonIcon />,
      componentName: "",
    },
    {
      id: "2",
      title: "New Channel",
      icon: <PeopleIcon />,
      backDropMenu: true,
      componentName: "CreateChanelMenu",
    },
    {
      id: "3",
      title: "New Group",
      backDropMenu: true,
      componentName: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z" />
        </svg>
      ),
    },
  ];
  return (
    <div className={`col gap-2 lg:border-r-[#5D5D5D] lg:border-r lg:min-w-[400px]  max-lg:w-full p-6  max-lg:${"showFooter==false"&&"p-0"} `}>
      <div className={`flex py-4 center border-b max-lg:${displayChatScreen&&"hidden"}`}>
       <SearchInput/>
        <span className="px-2 horizental">
          <MoreHorizMenu
            moreHorizetems={CreateItems}
            position="horizental"
            backdrop={true}
          />
        </span>
      
      </div>
      <span className={`flex gp4 items-center border-zinc-600 border rounded-2xl max-lg:${displayChatScreen&&"hidden"}`}>
        <Image alt="star" className="small-icon" src={starlogo} />
        <h3 className="font-semibold  text-lg">Chat With AI</h3>
      </span>
          {privateMessages?
            <>
            <span className={` ${displayChatScreen?"":"flex"} col overflow-auto w-full  `}>
          {privateMessages?.map((item,i) => (
            
            <MessageShortView
            itemId={item.id}
            key={item.id}
            name={item.username}
            itemType={"private"}
            chats={PvMsgeHistory[i]}
            displayChatScreen={displayChatScreen}
            setdisplayChatScreen={setdisplayChatScreen}
            />
          ))}
          {channels?.map((item,i) => (
            <MessageShortView
              key={item.channel_id}
              itemId={item.channel_id}
              name={item.channel_name}
              itemType={"channel"}
              chats={ChnlMsgeHistory[i]}
              displayChatScreen={displayChatScreen}
              setdisplayChatScreen={setdisplayChatScreen}
            />
          ))}
          {groups?.map((item,i) => (
            <MessageShortView
              key={item.group_id}
              itemId={item.group_id}
              name={item.group_name}
              itemType={"group"}
              item={item}
              chats={GpMsgeHistory[i]}
              displayChatScreen={displayChatScreen}
              setdisplayChatScreen={setdisplayChatScreen}
            />
          ))}
        </span>
        <div className={`bg-white dark:bg-neutral-800 lg:hidden max-lg:${displayChatScreen?"flex-col":"hidden"} p-2  `}>
          <div className="w-full flex justify-between">
        <button
        className={`w-10 h-10  border border-black dark:border-neutral-300 rounded-2xl flex center cursor-pointer text-3xl`}
        onClick={() => {setdisplayChatScreen(false);
          setshowFooter(true);
        }}
      >
        {`<`}
      </button>
    <MoreHorizMenu position={"horizental"} />
          </div>
          <ChatScreen/>
        </div>
            </>
        :  <>
<Skeleton animation="wave" variant="rounded" sx={{width:"100%"}} height={70}/>
<Skeleton animation="wave" variant="rounded" sx={{width:"100%"}} height={70}/>
<Skeleton animation="wave" variant="rounded" sx={{width:"100%"}} height={70}/>
<Skeleton animation="wave" variant="rounded" sx={{width:"100%"}} height={70}/>
<Skeleton animation="wave" variant="rounded" sx={{width:"100%"}} height={70}/>
      </>
  }</div>);};
export default MessangerInbox;