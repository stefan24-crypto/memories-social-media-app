import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { memories: [] },
  reducers: {
    setMemories(state, action) {
      state.memories = action.payload;
    },
    addLike(state, action) {
      const memory = state.memories.find((each) => each.id === action.payload);
      memory.likes++;
    },
    deleteMemory(state, action) {
      state.memories = state.memories.filter(
        (each) => each.id !== action.payload
      );
    },
    addMemory(state, action) {
      state.memories.unshift(action.payload);
    },
    addComment(state, action) {
      const memory = state.memories.find(
        (each) => each.id === action.payload.id
      );
      const data = {
        id: Math.random().toString(),
        text: action.payload.comment,
      };
      memory.comments.unshift(data);
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
