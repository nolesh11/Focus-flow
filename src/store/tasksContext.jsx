import { createContext } from "react";

export const TasksContext = createContext({
  tasks: [],
  addNewTask: () => {},
  deleteTask: () => {},
  updateTask: () => {}
});


