import { useReducer, useEffect } from "react";
import { TasksContext } from "./tasksContext";

function taskReducer(state, action) {
  if (action.type === "ADD_TASK") {
    const updatedTasks = [...state.tasks, action.payload];

    return {
      tasks: updatedTasks,
    };
  }

  if (action.type === "DELETE_TASK") {
    const updatedTasks = state.tasks.filter(
      (task) => task.id !== action.payload,
    );

    return {
      tasks: updatedTasks,
    };
  }

  if (action.type === "UPDATE_TASK") {
    const updatedTask = state.tasks.map((task) => {
      if (task.id === action.payload.id) {
        return action.payload;
      }

      return task;
    });

    return {
      tasks: updatedTask,
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

  function handleDeleteTask(id) {
    tasksStateDispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  function handleUpdateTask(id) {
    tasksStateDispatch({
      type: "UPDATE_TASK",
      payload: id,
    });
  }

  const taskCtx = {
    tasks: tasksState.tasks,
    addNewTask: handleAddTask,
    deleteTask: handleDeleteTask,
    updateTask: handleUpdateTask,
  };

  return (
    <TasksContext.Provider value={taskCtx}>{children}</TasksContext.Provider>
  );
}
