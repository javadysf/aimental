import WebsocketSlice from "./WSConnection/WebsocketSlice"
import EventManagerSlice from "./EventManager/EventManagerSlice"
import TicketsList from "./TicketsList/TicketsList";
import TPProfileSlice from"./UserProfile/TPProfile";
import CLProfileSlice from"./UserProfile/CLProfile";
import SharedProfile from "./UserProfile/SharedProfile";
import Reload from "./Reload/Reload";

const rootReducer = {
  WebsocketSlice,
  EventManagerSlice,
  TicketsList,
  TPProfileSlice,
  CLProfileSlice,
  SharedProfile,
  Reload
  
}
export default rootReducer;
