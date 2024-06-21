import { createSlice } from "@reduxjs/toolkit";

interface ChatState {
  name: string;
  message: string;
}

interface ChatSliceState {
  messages: ChatState[];
}

const chatSlice = createSlice({
  name: "chat",
  //   initialState: <ChatSliceState>{
  //     messages: [],
  //   },                                           this is also correct

  initialState: {
    messages: [],
  } as ChatSliceState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(10, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
