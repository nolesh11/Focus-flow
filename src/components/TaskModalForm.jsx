import { Modal } from "./Modal";
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";
import { taskCategories, taskPriorities } from "../mockData/options";

export function TaskModalForm({
  isModalOpen,
  onSubmitForm,
  formData,
  onReset,
  onChangeField,
}) {
  return (
    <Modal open={isModalOpen}>
      <h2 className="mb-4">Add New task</h2>
      <form onSubmit={onSubmitForm}>
        <Input
          id="title"
          onChange={(e) => onChangeField("title", e.target.value)}
          value={formData.title}
          label="Task Title"
          type="text"
          required
        />
        <Input
          id="description"
          onChange={(e) => onChangeField("description", e.target.value)}
          value={formData.description}
          label="Description"
          textarea
        />
        <div className="grid grid-cols-2 gap-4 mt-2">
          <Select
            options={taskCategories}
            id="categories"
            onChange={(e) => onChangeField("category", e.target.value)}
            value={formData.category}
            label="Categories"
            placeholder="Select category"
          />
          <Select
            options={taskPriorities}
            id="priorities"
            onChange={(e) => onChangeField("priority", e.target.value)}
            value={formData.priority}
            label="Priorities"
            placeholder="Select priority"
          />
          <Input
            id="time"
            onChange={(e) =>
              onChangeField("estimatedPomodoros", e.target.value)
            }
            value={formData.estimatedPomodoros}
            label="Estimated Focus Time"
            type="number"
          />
          <Input
            id="date"
            onChange={(e) => onChangeField("dueDate", e.target.value)}
            value={formData.dueDate}
            label="Due Date"
            type="date"
          />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Button
            type="button"
            onClick={onReset}
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
  );
}
