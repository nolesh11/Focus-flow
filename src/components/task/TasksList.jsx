import { useContext, useState } from "react";

import { Button } from "../UI/Button";
import { Badge } from "../UI/Badge";
import { Input } from "../UI/Input";

import { Timer, EllipsisVertical } from "lucide-react";
import { TasksContext } from "../../store/tasksContext";
import { TaskModalForm } from "./TaskModalForm";
import { TaskModalDetails } from "./TaskModalDetails";

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
  const [selectedTaskState, setSelectedTaskState] = useState({
    isOpen: false,
    id: null,
  });

  const [formData, setFormData] = useState(initialFormData);

  const { tasks, addNewTask, deleteTask } = useContext(TasksContext);

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

  function handleOnCloseForm() {
    setIsModalOpen(false);
    setFormData(initialFormData);
  }

  function handleFieldChange(field, value) {
    setFormData((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  }

  function handleOpenDetailsModal(id) {
    setSelectedTaskState({ isOpen: true, id: id });
  }

  function handleCloseDetailsModal() {
    setSelectedTaskState({ isOpen: false, id: null });
  }

  function handleOpenMenu(id) {
    setActiveMenuId(activeMenuId === id ? null : id);
  }

  function handleCloseMenu() {
    setActiveMenuId(null);
  }

  console.log(selectedTaskState);
  

  return (
    <>
      <TaskModalForm
        formData={formData}
        isModalOpen={isModalOpen}
        onChangeField={handleFieldChange}
        onSubmitForm={handleOnSubmit}
        onClose={handleOnCloseForm}
      />
      <TaskModalDetails
        tasks={tasks}
        selectedTaskId={selectedTaskState.id}
        isDetailsModalOpen={selectedTaskState.isOpen}
        onClose={handleCloseDetailsModal}
      />
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
                      className={`${activeMenuId === task.id ? "block" : "hidden"} text-sm absolute -top-6 -left-15 p-2 rounded-sm bg-surface flex flex-col gap-1`}
                    >
                      <Button onClick={() => handleOpenDetailsModal(task.id)}>
                        Details
                      </Button>
                      <Button>Edit</Button>
                      <Button onClick={() => deleteTask(task.id)}>
                        Delete
                      </Button>
                      <Button onClick={handleCloseMenu}>
                        Close
                      </Button>
                    </div>
                    <Button onClick={() => handleOpenMenu(task.id)}>
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
