"use client"
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import {
  setData,
  setGpMsgeHistory,
  setChnlMsgeHistory,
  setWebsocket,
  setPvMsgeHistory,
} from "../../redux/features/WSConnection/WebsocketSlice";
import ChatScreen from "./MessengerModules/ChatScreen";
import MessangerInbox from "./MessengerModules/MessangerInbox";

const Messenger = ({}) => {

  const websocket = useSelector((state) => state.WebsocketSlice.websocket);

 const dispatch = useDispatch()

  useEffect(()=>{
    const websocket = new WebSocket(
  "wss://aimental.hsg-stage.ir/chat?username=morteza&password=123456789"
)
websocket.onopen = () => {
  console.log('Connected to WebSocket server');
  
};
websocket.onerror = () => {
  console.log('error');
};
console.log(websocket);
   dispatch(setWebsocket(websocket))
  },
[])
console.log(websocket);

const loadGroupChat = (id) => {
  websocket.send(
    JSON.stringify({
      "topic": "get_group_msg",
      "group_id": id,
      "nonce": 0,
    })
  );
};
const loadPVChat = (id) => {
  websocket.send(
    JSON.stringify({

        "topic": "get_private_msg",
        "peer_id": id,
        "nonce": 0
    })
  );
};
const loadChannelChat = (id) => {
  websocket.send(
    JSON.stringify({

        "topic": "get_channel_msg",
        "channel_id": id,
        "nonce": 0
    })
  );
};
  useEffect(() => {
    if (websocket) {
      websocket.onmessage = (event) => {
         const data = JSON.parse(event.data);
         console.log("Received data: " + event.data);
         console.log(data.data?.length);
         data.topic == "auth" &&data.success==true&& dispatch(setData(data));
         data.topic == "get_group_msg"&&data.data.length!=0&&dispatch(setGpMsgeHistory(data));
         data.topic == "new_group_msg"&&loadGroupChat(data?.data?.fields?.group);
         data.topic == "get_channel_msg"&&dispatch(setChnlMsgeHistory(data));
         data.topic == "new_channel_msg"&&loadChannelChat(data?.data?.fields?.channel);
         data.topic == "get_private_msg"&&dispatch(setPvMsgeHistory(data));
         data.topic == "send_private_msg"&&loadPVChat(data?.data?.fields?.receiver)
      };
   
    }
  }, [websocket]);

  return (
    <div className={`dark:bg-neutral-800  dark:text-zinc-400 flex h-[calc(100vh-96px)] text-neutral-800 w-full`}>
      <MessangerInbox />
      <ChatScreen display={"max-lg:hidden"} />
    </div>
  );
};
export default Messenger;