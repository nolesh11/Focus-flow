import { useContext, useState } from "react";

import { Modal } from "./Modal";
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";
import { Badge } from "./Badge";

import { taskCategories, taskPriorities } from "../mockData/options";
import { Timer, EllipsisVertical } from "lucide-react";
import { TasksContext } from "../store/tasksContext";

const initialFormData = {
  title: "",
  description: "",
  category: "",
  priority: "",
  estimatedPomodoros: "",
  dueDate: "",
};

export function TasksList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);

  const [formData, setFormData] = useState(initialFormData);

  const { tasks, addNewTask, deleteTask } = useContext(TasksContext);

  console.log(tasks);

  function handleOnSubmit(event) {
    event.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      priority: formData.priority,
      estimatedPomodoros: Number(formData.estimatedPomodoros),
      dueDate: formData.dueDate,
    };

    addNewTask(newTask);
    setIsModalOpen(false);
    setFormData(initialFormData);
  }

  function handleOnReset() {
    setFormData(initialFormData);
    setIsModalOpen(false);
  }

  function handleOpenMenu(id) {
    setActiveMenuId(id);
  }

  return (
    <>
      <Modal open={isModalOpen}>
        <h2 className="mb-4">Add New task</h2>
        <form onSubmit={handleOnSubmit}>
          <Input
            id="title"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            value={formData.title}
            label="Task Title"
            type="text"
            required
          />
          <Input
            id="description"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            value={formData.description}
            label="Description"
            textarea
          />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Select
              options={taskCategories}
              id="categories"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, category: e.target.value }))
              }
              value={formData.category}
              label="Categories"
              placeholder="Select category"
            />
            <Select
              options={taskPriorities}
              id="priorities"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, priority: e.target.value }))
              }
              value={formData.priority}
              label="Priorities"
              placeholder="Select priority"
            />
            <Input
              id="time"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  estimatedPomodoros: e.target.value,
                }))
              }
              value={formData.estimatedPomodoros}
              label="Estimated Focus Time"
              type="number"
            />
            <Input
              id="date"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, dueDate: e.target.value }))
              }
              value={formData.dueDate}
              label="Due Date"
              type="date"
            />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button
              type="button"
              onClick={handleOnReset}
              className="border border-border px-4 py-2 rounded-sm"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-stone-200 px-4 rounded-sm"
            >
              Add Task
            </Button>
          </div>
        </form>
      </Modal>
      <div className="bg-surface p-8 rounded-xl shadow-md">
        <div className="flex justify-between">
          <h4>Tasks</h4>
          <div className="flex gap-1">
            <Button className="text-sm">Filter</Button>
            <Button onClick={() => setIsModalOpen(true)}>Add task</Button>
          </div>
        </div>
        <ul className="mt-4">
          {tasks.length === 0 && <li>No tasks yet</li>}
          {tasks.length > 0 &&
            tasks.map((task) => (
              <li
                key={task.id}
                className="border border-border rounded-md p-4 mb-3 flex justify-between shadow-sm hover:bg-surface-2 hover:transition-all"
              >
                <div className="flex gap-2">
                  <Input type="checkbox" />
                  <div>
                    <h4 className="font-bold">{task.title}</h4>
                    <p className="text-sm text-text-muted">{task.category}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col justify-end gap-1">
                    <Badge variant={task.priority}>{task.priority}</Badge>
                    <div className="flex">
                      <span className="self-center">
                        <Timer size={14} className="text-text-muted" />
                      </span>
                      <span className="text-sm text-text-muted">
                        {task.estimatedPomodoros} mins
                      </span>
                    </div>
                  </div>
                  <div className="self-center relative">
                    <div
                      className={`${activeMenuId === task.id ? "block" : "hidden"} text-sm absolute -top-6 -left-15 p-2 rounded-sm bg-surface-2 flex flex-col gap-1`}
                    >
                      <Button>Details</Button>
                      <Button>Edit</Button>
                      <Button onClick={() => deleteTask(task.id)}>
                        Delete
                      </Button>
                    </div>
                    <Button
                      onClick={() =>
                        handleOpenMenu(
                          activeMenuId === task.id ? null : task.id,
                        )
                      }
                    >
                      <EllipsisVertical className="text-text-muted" />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
