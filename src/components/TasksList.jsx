import { useState } from "react";

import { Modal } from "./Modal";
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";

import { taskCategories, taskPriorities } from "../mockData/options";

export function TasksList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal open={isModalOpen}>
        <h2 className="mb-4">Add New task</h2>
        <form method="dialog">
          <Input id="title" label="Task Title" type="text" required />
          <Input id="description" label="Description" textarea />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Select
              options={taskCategories}
              id="categories"
              label="Categories"
              placeholder="Select category"
            />
            <Select
              options={taskPriorities}
              id="priorities"
              label="Priorities"
              placeholder="Select priority"
            />
            <Input id="time" label="Estimated Focus Time" type="number" />
            <Input id="date" label="Due Date" type="date" />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="border border-border px-4 py-2 rounded-sm"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary text-stone-200 px-4  rounded-sm"
            >
              Add Task
            </Button>
          </div>
        </form>
      </Modal>
      <div className="bg-surface p-8 rounded-xl shadow-md">
        <div className="flex justify-between">
          <h4>Filter</h4>
          <div className="flex gap-1">
            <Button>Filter</Button>
            <Button onClick={() => setIsModalOpen(true)}>Add task</Button>
          </div>
        </div>
        <ul className="mt-4">
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
          <li>Task 4</li>
        </ul>
      </div>
    </>
  );
}
