import { useContext, useState } from "react";
import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";

import {
  ScrollText,
  ClipboardPenLine,
  NotebookTabs,
  FileStack,
  Clock8,
  ClipboardClock,
} from "lucide-react";
import { Input } from "../UI/Input";
import { TasksContext } from "../../store/tasksContext";
import { Select } from "../UI/Select";
import { taskCategories, taskPriorities } from "../../mockData/options";

const initialFormData = {
  title: "",
  description: "",
  category: "",
  priority: "",
  estimatedPomodoros: "",
  dueDate: "",
};

export function TaskModalDetails({
  isDetailsModalOpen,
  selectedTaskId,
  tasks,
  onClose,
}) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedTaskData, setEditedTaskData] = useState(initialFormData);

  const { updateTask } = useContext(TasksContext);

  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  function handleOpenEdit() {
    setEditedTaskData({
      title: selectedTask.title,
      description: selectedTask.description,
      category: selectedTask.category,
      priority: selectedTask.priority,
      estimatedPomodoros: selectedTask.estimatedPomodoros,
      dueDate: selectedTask.dueDate,
    });
    setIsEditOpen(true);
  }

  function handleOnSave() {
    const updatedTask = {
      ...editedTaskData,
      id: selectedTask.id,
    };

    updateTask(updatedTask);
    setIsEditOpen(false);
  }

  console.log("edited", editedTaskData, "tasks", tasks);

  return (
    <Modal open={isDetailsModalOpen} onClose={onClose}>
      <h2 className="mb-4">Task Details</h2>
      <div className="p-4 border border-border rounded-sm">
        {selectedTask && (
          <div>
            <div className="border-b border-border grid grid-cols-2 py-4">
              <div className="grid gap-x-2 [grid-template-areas:'icon_subtitle'_'icon_title'] grid-cols-[0.3fr_1fr] grid-rows-[auto_1fr]">
                <div className="[grid-area:icon] p-2 mr-1 border border-border bg-surface-2 rounded-[50%] h-fit">
                  <ScrollText />
                </div>
                {isEditOpen ? (
                  <Input
                    label="title"
                    value={editedTaskData.title}
                    onChange={(e) =>
                      setEditedTaskData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <>
                    <p className="text-xs text-text-muted [grid-area:subtitle]">
                      Task Title
                    </p>
                    <h3 className="text-lg text-text capitalize [grid-area:title]">
                      {selectedTask.title}
                    </h3>
                  </>
                )}
              </div>
              <div className="grid gap-x-2 [grid-template-areas:'icon_subtitle'_'icon_title'] grid-cols-[0.3fr_1fr] grid-rows-[auto_1fr]">
                <div className="[grid-area:icon] p-2 mr-1 border border-border bg-surface-2 rounded-[50%] h-fit">
                  <ClipboardPenLine />
                </div>
                {isEditOpen ? (
                  <Input
                    label="description"
                    value={editedTaskData.description}
                    onChange={(e) =>
                      setEditedTaskData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <>
                    <p className="text-xs text-text-muted [grid-area:subtitle]">
                      Description
                    </p>
                    <h3 className="text-lg text-text capitalize [grid-area:title]">
                      {selectedTask.description}
                    </h3>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-4 border-b border-border py-4">
              <div className="grid gap-x-2 [grid-template-areas:'icon_subtitle'_'icon_title'] grid-cols-[0.3fr_1fr] grid-rows-[auto_1fr]">
                <div className="[grid-area:icon] p-2 mr-1 border border-border bg-surface-2 rounded-[50%] h-fit">
                  <NotebookTabs />
                </div>
                {isEditOpen ? (
                  <Select
                    options={taskCategories}
                    label="category"
                    value={editedTaskData.category}
                    onChange={(e) =>
                      setEditedTaskData((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <>
                    <p className="text-xs text-text-muted [grid-area:subtitle]">
                      Category
                    </p>
                    <h3 className="text-lg text-text capitalize [grid-area:title]">
                      {selectedTask.category}
                    </h3>
                  </>
                )}
              </div>
              <div className="grid gap-x-2 [grid-template-areas:'icon_subtitle'_'icon_title'] grid-cols-[0.3fr_1fr] grid-rows-[auto_1fr]">
                <div className="[grid-area:icon] p-2 mr-1 border border-border bg-surface-2 rounded-[50%] h-fit">
                  <FileStack />
                </div>
                {isEditOpen ? (
                  <Select
                    options={taskPriorities}
                    label="priority"
                    value={editedTaskData.priority}
                    onChange={(e) =>
                      setEditedTaskData((prev) => ({
                        ...prev,
                        priority: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <>
                    <p className="text-xs text-text-muted [grid-area:subtitle]">
                      Priority
                    </p>
                    <h3 className="text-lg text-text capitalize [grid-area:title]">
                      {selectedTask.category}
                    </h3>
                  </>
                )}
              </div>
              <div className="grid gap-x-2 [grid-template-areas:'icon_subtitle'_'icon_title'] grid-cols-[0.3fr_1fr] grid-rows-[auto_1fr]">
                <div className="[grid-area:icon] p-2 mr-1 border border-border bg-surface-2 rounded-[50%] h-fit">
                  <Clock8 />
                </div>
                {isEditOpen ? (
                  <Input
                    type="number"
                    label="description"
                    value={editedTaskData.estimatedPomodoros}
                    onChange={(e) =>
                      setEditedTaskData((prev) => ({
                        ...prev,
                        estimatedPomodoros: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <>
                    <p className="text-xs text-text-muted [grid-area:subtitle]">
                      Focus Time
                    </p>
                    <h3 className="text-lg text-text capitalize [grid-area:title]">
                      {selectedTask.estimatedPomodoros}
                    </h3>
                  </>
                )}
              </div>
              <div className="grid gap-x-2 [grid-template-areas:'icon_subtitle'_'icon_title'] grid-cols-[0.3fr_1fr] grid-rows-[auto_1fr]">
                <div className="[grid-area:icon] p-2 mr-1 border border-border bg-surface-2 rounded-[50%] h-fit">
                  <ClipboardClock />
                </div>
                {isEditOpen ? (
                  <Input
                    type="date"
                    label="description"
                    value={editedTaskData.dueDate}
                    onChange={(e) =>
                      setEditedTaskData((prev) => ({
                        ...prev,
                        dueDate: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <>
                    <p className="text-xs text-text-muted [grid-area:subtitle]">
                      Due Date
                    </p>
                    <h3 className="text-lg text-text capitalize [grid-area:title]">
                      {selectedTask.dueDate}
                    </h3>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mt-6 flex justify-end gap-3">
          <Button onClick={onClose} variant="blank">
            Close
          </Button>
          <Button
            onClick={isEditOpen ? handleOnSave : handleOpenEdit}
            variant="filled"
          >
            {isEditOpen ? "Save" : "Edit"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
