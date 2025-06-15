import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import GifIcon from '@mui/icons-material/Gif';
import AttachFile from "./AttachFile";
import EmojiesIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ArrowUpIcon from "@mui/icons-material/ArrowUpward";
import { useSelector } from "react-redux";
import { useTheme } from 'next-themes';

const TypeBar = ({chatHistory}) => {

  const { theme, setTheme } = useTheme();
  const itemId = useSelector((state) => state.WebsocketSlice.itemId);
  const itemType = useSelector((state) => state.WebsocketSlice.itemType);


  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const onEmojiClick = (emojiText) => {
    console.log(emojiText);
    setInputValue((PrevInput) => PrevInput + emojiText.emoji);
    setIsPickerVisible(false);
  };
  const sendMessage = (inputValue) => {
    itemType=="group"&&
    websocket?.send(
        JSON.stringify({
          topic: "send_group_msg",
          group_id: itemId,
          message: inputValue,
          nonce: 0,
        })
      )
      itemType=="private"&& websocket?.send(
        JSON.stringify({
          topic: "send_private_msg",
          receiver_id: itemId,
          message: inputValue,
          nonce: 0,
        })
      )
      itemType=="channel"&& websocket?.send(
        JSON.stringify({
          topic: "send_channel_msg",
          channel_id: itemId,
          message: inputValue,
          nonce: 0,
        })
      )
      setInputValue("");
    };

  return (
    <div className="flex w-full relative ">
      <span className="flex w-full p-4 gap-2 border-zinc-700 border-[1px] gap-2 rounded-2xl rounded-e">
        <AttachFile />
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className=" dark:bg-neutral-800 outline-0 h-full w-full"
          placeholder="Write a message..."
        />
        <div className="cursor-pointer">
         <GifIcon/>
        </div>

        <EmojiesIcon
          onClick={() => setIsPickerVisible(!isPickerVisible)}
          sx={{ cursor: "pointer", width: "28px", height: "28px" }}
        />
        
      </span>
      {isPickerVisible && (
        <div className="absolute bottom-[65px] right-0">
          <EmojiPicker theme={ theme=='dark'&&"dark"} emojiStyle="apple" onEmojiClick={onEmojiClick} />
        </div>
      )}
      <button
        className=" dark:bg-blue-300 bg-blue text-white rounded-2xl rounded-s p-4 min-w-20"
        onClick={()=>sendMessage(inputValue)}
      >
        <ArrowUpIcon sx={{color:"#ffffff"}} />
      </button>
    </div>
  );
};
export default TypeBar;
