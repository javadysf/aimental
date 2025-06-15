import SendedMessage from "./ChatScreenModules/SendedMessage";
import TypeBar from "./ChatScreenModules/TypeBar";
import { useEffect, useRef, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
const ChatScreen = ({display}) => {


  const ChatScreenMsg = useSelector((state) => state.WebsocketSlice.ChatScreenMsg);
  const ChnlMsgeHistory = useSelector((state) => state.WebsocketSlice.ChnlMsgeHistory);
  
  const messageEnRef = useRef();

  useEffect(() => {
    messageEnRef.current?.scrollIntoView({ behavior: 'smooth' });
    
  }, [ChnlMsgeHistory,ChatScreenMsg]);

  return (
    <div className={`col gp4 w-full ${display}`}>
{ChatScreenMsg?    <div className="col  overflow-scroll gap-4 w-full h-[calc(100vh-180px)]">
  {ChatScreenMsg?.message?.map(({ message,id }) => (
    <SendedMessage key={id} textMessage={message} />
  ))}
  {/* //show last message first */}
  <div ref={messageEnRef}></div>
</div>:
<div className="flex center h-[calc(100vh-180px)] w-full">
      <span className="bg-neutral-100 p-3 rounded-2xl dark:bg-zinc-800">Select a chat to start messaging</span>
</div>
}

<TypeBar chatHistory={ChatScreenMsg} />
    </div>
  );
};

export default ChatScreen;







  

// console.log()


