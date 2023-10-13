import { createSlice } from "@reduxjs/toolkit";
import taskService from "../../services/taskService";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log("sagar--->", action.payload);
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});
// taskService.createTask(initialState.tasks);
export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
