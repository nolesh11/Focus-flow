import { useReducer, useEffect } from "react";
import { TasksContext } from "./tasksContext";

function taskReducer(state, action) {
  if (action.type === "ADD_TASK") {
    const updatedTasks = [...state.tasks, action.payload];

    return {
      tasks: updatedTasks,
    };
  }

  return state;
}

function loadInitialTasks() {
  const storedTasks = localStorage.getItem("tasks");

  if (!storedTasks) {
    return { tasks: [] };
  }

  try {
    return JSON.parse(storedTasks);
  } catch {
    return { tasks: [] };
  }
}

export function TaskContextProvider({ children }) {
  const [tasksState, tasksStateDispatch] = useReducer(
    taskReducer,
    {
      tasks: [],
    },
    loadInitialTasks,
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksState));
  }, [tasksState]);

  console.log(tasksState);
  console.log(localStorage);

  function handleAddTask({
    id,
    title,
    description,
    category,
    priority,
    estimatedPomodoros,
    dueDate,
  }) {
    tasksStateDispatch({
      type: "ADD_TASK",
      payload: {
        id,
        title,
        description,
        category,
        priority,
        estimatedPomodoros,
        dueDate,
      },
    });
  }

  const taskCtx = {
    tasks: tasksState.tasks,
    addNewTask: handleAddTask,
  };
  return (
    <TasksContext.Provider value={taskCtx}>{children}</TasksContext.Provider>
  );
}