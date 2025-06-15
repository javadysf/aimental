import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  data: null,
  itemId: null,
  itemType: null,
  websocket: null,
  GpMsgeHistory: [],
  ChnlMsgeHistory: [],
  PvMsgeHistory: [],
  ChatScreenMsg:null
};

const WebsocketSlice  = createSlice({
  name: "WebsocketSlice",
  initialState,
  reducers: {
    setData: (state, action) => {state.data = action.payload},
    setitemType: (state, action) => {state.itemType = action.payload},
    setWebsocket: (state, action) => {state.websocket = action.payload},
    setGpMsgeHistory: (state, action) => { 
      let message = action.payload.data?.reverse()
      state.GpMsgeHistory.length==0?
       state.GpMsgeHistory=[...state.GpMsgeHistory,{id:message[0].group_id,message:message,topic:action.payload.topic}]:
       state.GpMsgeHistory.map((item,i)=>{
        if( item.id == message[0]?.group_id)
          {
            //replace new channels message with old ones
            state.GpMsgeHistory[i].message=message
            state.ChatScreenMsg.message=message
          }
          else
          {
            state.GpMsgeHistory=[...state.GpMsgeHistory,{id:message[0].group_id,message:message,topic:action.payload.topic}]
          }
        })
      
      // if(state.GpMsgeHistory.length>=state.data?.message?.groups?.length)
      //   {
      //     state.GpMsgeHistory.map((item,i)=>{
      //       if( item.id == message[0]?.group_id)
      //         {
      //           //replace new channels message with old ones
      //           state.GpMsgeHistory[i].message=message
      //           state.ChatScreenMsg.message=message
      //         }
      //       })
      //     }
      //     else{
      //       if(state.GpMsgeHistory.length<=state.data?.message?.groups?.length&&state.GpMsgeHistory.length!=0)
      //       {
      //         state.GpMsgeHistory?.map((item,i)=>{
      //           if( item.id == message[0]?.group_id)
      //             {
      //               //replace new channels message with old ones
      //               state.GpMsgeHistory[i].message=message
      //               state.ChatScreenMsg.message=message
      //             }
      //             else
      //             {
      //               state.GpMsgeHistory=[...state.GpMsgeHistory,{id:message[0].group_id,message:message,topic:action.payload.topic}]
      //             }
      //         })
      //       }
      //       else
      //       {
      //         state.GpMsgeHistory=[...state.GpMsgeHistory,{id:message[0].group_id,message:message,topic:action.payload.topic}]
      //       }
          
      //   }
    },
    setChnlMsgeHistory: (state, action) => {
        let message = action.payload.data.reverse()
        if(state.ChnlMsgeHistory.length>=state.data?.message?.channels?.length)
        {
          
          state.ChnlMsgeHistory.map((item,i)=>{
            if( item.id ==message[0]?.channel_id)
            {
            state.ChnlMsgeHistory[i].message=message
            state.ChatScreenMsg.message=message
            }
          })
        }
        else{
          state.ChnlMsgeHistory=[...state.ChnlMsgeHistory,{id:message[0].channel_id,message:message,topic:action.payload.topic}]
        }

    },
    setPvMsgeHistory: (state, action) => {
      if(state.PvMsgeHistory.length>=state.data?.message?.private?.length)
      {
        state.PvMsgeHistory.map((item,i)=>{
          if( item.id == action.payload.data[0]?.receiver)
          {
          state.PvMsgeHistory[i].message=action.payload
          state.ChatScreenMsg=(action.payload)
          }
        })
      }
      else{
        let message = action.payload.data.reverse()
        state.PvMsgeHistory=[...state.PvMsgeHistory,{id:message[0].receiver,message:message}]
      }
    },
    setChatScreenMsg: (state, action) => { state.ChatScreenMsg=action.payload},
    setItemId: (state, action) => {state.itemId = action.payload},
  },
});

export const { setData,setWebsocket,setGpMsgeHistory,setChnlMsgeHistory,setPvMsgeHistory,setChatScreenMsg,setItemId,setitemType} = WebsocketSlice.actions;
export default WebsocketSlice.reducer;