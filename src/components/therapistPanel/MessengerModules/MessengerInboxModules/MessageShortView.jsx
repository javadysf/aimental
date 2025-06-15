import { useSelector, useDispatch } from "react-redux";
import { setChatScreenMsg,setItemId, setitemType } from "../../../../redux/features/WSConnection/WebsocketSlice";
import { useEffect } from "react";
import MoreHorizMenu from "../../therapistPanelModules/MoreHorizMenu";
import UserIcon from "../../../../assets/img/therapistdashboard/messages/user.svg";
import GroupIcon from "@mui/icons-material/Group";
import Image from "next/image";
// import { useOutletContext } from "react-router-dom";

const MessageShortView = ({
  itemType,
  name,
  itemId,
  chats,
  setdisplayChatScreen
}) => {
  // const context = useOutletContext();
  // //showFooter is outlet props
  // const showFooter = context[1]
  const websocket = useSelector((state) => state.WebsocketSlice.websocket);
  const dispatch = useDispatch();
  const messages = chats;
  const lastMessage = messages?.message?.slice(-1)[0].message;



  useEffect(() => {
    loadMessages();
    dispatch(setChatScreenMsg(messages))
  }, []);

  const loadMessages = () => {
    itemType=="group" &&
      websocket.send(
        JSON.stringify({
          topic: "get_group_msg",
          group_id: itemId,
          nonce: 0,
        })
      );
    itemType=="channel" &&
      websocket.send(
        JSON.stringify({
          topic: "get_channel_msg",
          channel_id: itemId,
          nonce: 0,
        })
      );
    itemType="private" &&
      websocket.send(
        JSON.stringify({
          topic: "get_private_msg",
          peer_id: itemId,
          nonce: 0,
        })
      );     
  };


  const chatScreenMsg=()=>{
    showFooter(false);
    setdisplayChatScreen(true);
    dispatch(setChatScreenMsg(messages))
    dispatch(setitemType(itemType))
    dispatch(setItemId(itemId))
  }
  const CreateItems = [
    {
      id: "1",
      title: "Delete",
      icon: (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          className="xs-icon"
          viewBox="0 0 108.294 122.88"
          enable-background="new 0 0 108.294 122.88"
          xmlSpace="preserve"
        >
          <g>
            <path d="M4.873,9.058h33.35V6.2V6.187c0-0.095,0.002-0.186,0.014-0.279c0.075-1.592,0.762-3.037,1.816-4.086l-0.007-0.007 c1.104-1.104,2.637-1.79,4.325-1.806l0.023,0.002V0h0.031h19.884h0.016c0.106,0,0.207,0.009,0.309,0.022 c1.583,0.084,3.019,0.76,4.064,1.81c1.102,1.104,1.786,2.635,1.803,4.315l-0.003,0.021h0.014V6.2v2.857h32.909h0.017 c0.138,0,0.268,0.014,0.401,0.034c1.182,0.106,2.254,0.625,3.034,1.41l0.004,0.007l0.005-0.007 c0.851,0.857,1.386,2.048,1.401,3.368l-0.002,0.032h0.014v0.032v10.829c0,1.472-1.195,2.665-2.667,2.665h-0.07H2.667 C1.195,27.426,0,26.233,0,24.762v-0.063V13.933v-0.014c0-0.106,0.004-0.211,0.018-0.315v-0.021 c0.089-1.207,0.624-2.304,1.422-3.098l-0.007-0.002C2.295,9.622,3.49,9.087,4.81,9.069l0.032,0.002V9.058H4.873L4.873,9.058z M77.79,49.097h-5.945v56.093h5.945V49.097L77.79,49.097z M58.46,49.097h-5.948v56.093h5.948V49.097L58.46,49.097z M39.13,49.097 h-5.946v56.093h5.946V49.097L39.13,49.097z M10.837,31.569h87.385l0.279,0.018l0.127,0.007l0.134,0.011h0.009l0.163,0.023 c1.363,0.163,2.638,0.789,3.572,1.708c1.04,1.025,1.705,2.415,1.705,3.964c0,0.098-0.009,0.193-0.019,0.286l-0.002,0.068 l-0.014,0.154l-7.393,79.335l-0.007,0.043h0.007l-0.016,0.139l-0.051,0.283l-0.002,0.005l-0.002,0.018 c-0.055,0.331-0.12,0.646-0.209,0.928l-0.007,0.022l-0.002,0.005l-0.009,0.018l-0.023,0.062l-0.004,0.021 c-0.118,0.354-0.264,0.698-0.432,1.009c-1.009,1.88-2.879,3.187-5.204,3.187H18.13l-0.247-0.014v0.003l-0.011-0.003l-0.032-0.004 c-0.46-0.023-0.889-0.091-1.288-0.202c-0.415-0.116-0.818-0.286-1.197-0.495l-0.009-0.002l-0.002,0.002 c-1.785-0.977-2.975-2.882-3.17-5.022L4.88,37.79l-0.011-0.125l-0.011-0.247l-0.004-0.116H4.849c0-1.553,0.664-2.946,1.707-3.971 c0.976-0.955,2.32-1.599,3.756-1.726l0.122-0.004v-0.007l0.3-0.013l0.104,0.002V31.569L10.837,31.569z M98.223,36.903H10.837 v-0.007l-0.116,0.004c-0.163,0.022-0.322,0.106-0.438,0.222c-0.063,0.063-0.104,0.132-0.104,0.179h-0.007l0.007,0.118l7.282,79.244 h-0.002l0.002,0.012c0.032,0.376,0.202,0.691,0.447,0.825l-0.002,0.004l0.084,0.032l0.063,0.012h0.077h72.695 c0.207,0,0.399-0.157,0.518-0.377l0.084-0.197l0.054-0.216l0.014-0.138h0.005l7.384-79.21L98.881,37.3 c0-0.045-0.041-0.111-0.103-0.172c-0.12-0.118-0.286-0.202-0.451-0.227L98.223,36.903L98.223,36.903z M98.334,36.901h-0.016H98.334 L98.334,36.901z M98.883,37.413v-0.004V37.413L98.883,37.413z M104.18,37.79l-0.002,0.018L104.18,37.79L104.18,37.79z M40.887,14.389H5.332v7.706h97.63v-7.706H67.907h-0.063c-1.472,0-2.664-1.192-2.664-2.664V6.2V6.168h0.007 c-0.007-0.22-0.106-0.433-0.259-0.585c-0.137-0.141-0.324-0.229-0.521-0.252h-0.082h-0.016H44.425h-0.031V5.325 c-0.213,0.007-0.422,0.104-0.576,0.259l-0.004-0.004l-0.007,0.004c-0.131,0.134-0.231,0.313-0.259,0.501l0.007,0.102V6.2v5.524 C43.554,13.196,42.359,14.389,40.887,14.389L40.887,14.389z" />
          </g>
        </svg>
      ),
    },
  ];
  return (
    <div
      onClick={() => chatScreenMsg()}
      id={itemId}
      className={`flex h-[100px] w-[330px] max-lg:w-full gp4 hover:bg-blue-50 rounded-2xl focus:bg-neutral-100 cursor-pointer`}
    >
      <Image alt="user-icon" width={48} height={48}  src={UserIcon} />
      <span className="col w-full overflow-hidden ">
        <span className="flex justify-between">
          <span   className="text-md max-lg:text-sm flex gap-1 center font-semibold">
            {itemType=="group" && <GroupIcon sx={{ width: "16px", height: "16px" }} />}
            {itemType=="channel" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
              </svg>
            )}
            {name}
          </span>
          <p className="font-normal text-xs">4:00 pm</p>
        </span>
        <p className="truncate text-sm ">{lastMessage}</p>
      </span>
      <span className="flex center">
        <MoreHorizMenu moreHorizetems={CreateItems} position="horizental" />
      </span>
    </div>
  );
};

export default MessageShortView;

