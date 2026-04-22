import { Settings } from "lucide-react";
import { Modal } from "./Modal";
import { Input } from "./Input";
import { Select } from "./Select";
import { taskCategories, taskPriorities } from "../mockData/options";
import { Button } from "./Button";
import { useState } from "react";

export function TasksList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
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
            <Button onClick={() => setIsModalOpen(false)} className="border border-border px-4 py-2 rounded-sm">
              Cancel
            </Button>
            <Button type='submit' className="bg-primary text-stone-200 px-4  rounded-sm">
              Add Task
            </Button>
          </div>
        </form>
      </Modal>
      <div>
        <h3 className="text-xl mb-4">Today's tasks</h3>
        <div className="grid grid-cols-3 gap-4">
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
          <div className="bg-surface p-8 rounded-xl shadow-md">
            <div>
              <div className="flex justify-between">
                <h4 className="mb-4">Focus timer</h4>
                <button className="self-start">
                  <Settings size={18} />
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <button>Pomodoro</button>
                <button>Short break</button>
                <button>Long break</button>
              </div>
              <div>
                <p>Timer</p>
                <button>Start | Stop</button>
              </div>
            </div>
          </div>
          <div className="bg-surface p-8 rounded-xl shadow-md">
            <div className="flex justify-between mb-4">
              <h4>Today's sessions</h4>
              <button>View all</button>
            </div>
            <ul>
              <li>Build landing</li>
              <li>Study react</li>
              <li>Short break</li>
              <li>Read 20 pages</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
