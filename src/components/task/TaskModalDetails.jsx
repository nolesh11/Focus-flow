import { Button } from "../UI/Button";
import { Modal } from "../UI/Modal";

import { ScrollText, ClipboardPenLine, NotebookTabs, FileStack, Clock8, ClipboardClock } from "lucide-react";

export function TaskModalDetails({
  isDetailsModalOpen,
  selectedTaskId,
  tasks,
  onClose,
}) {
  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

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
                <p className="text-xs text-text-muted [grid-area:subtitle]">
                  Task Title
                </p>
                <h3 className="text-lg text-text capitalize [grid-area:title]">
                  {selectedTask.title}
                </h3>
              </div>
              <div className="grid gap-x-2 [grid-template-areas:'icon_subtitle'_'icon_title'] grid-cols-[0.3fr_1fr] grid-rows-[auto_1fr]">
                <div className="[grid-area:icon] p-2 mr-1 border border-border bg-surface-2 rounded-[50%] h-fit">
                  <ClipboardPenLine />
                </div>
                <p className="text-xs text-text-muted [grid-area:subtitle]">
                  Description
                </p>
                <h3 className="text-lg text-text capitalize [grid-area:title]">
                  {selectedTask.description}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-4 border-b border-border py-4">
              <div className="grid gap-x-2 [grid-template-areas:'icon_subtitle'_'icon_title'] grid-cols-[0.3fr_1fr] grid-rows-[auto_1fr]">
                <div className="[grid-area:icon] p-2 mr-1 border border-border bg-surface-2 rounded-[50%] h-fit">
                  <NotebookTabs />
                </div>
                <p className="text-xs text-text-muted [grid-area:subtitle]">Category</p>
                <h3 className="text-lg text-text capitalize [grid-area:title]">{selectedTask.category}</h3>
              </div>
              <div className="grid gap-x-2 [grid-template-areas:'icon_subtitle'_'icon_title'] grid-cols-[0.3fr_1fr] grid-rows-[auto_1fr]">
                <div className="[grid-area:icon] p-2 mr-1 border border-border bg-surface-2 rounded-[50%] h-fit">
                  <FileStack />
                </div>
                <p className="text-xs text-text-muted [grid-area:subtitle]">Priority</p>
                <h3 className="text-lg text-text capitalize [grid-area:title]">{selectedTask.priority}</h3>
              </div>
              <div className="grid gap-x-2 [grid-template-areas:'icon_subtitle'_'icon_title'] grid-cols-[0.3fr_1fr] grid-rows-[auto_1fr]">
                <div className="[grid-area:icon] p-2 mr-1 border border-border bg-surface-2 rounded-[50%] h-fit">
                  <Clock8 />
                </div>
                <p className="text-xs text-text-muted [grid-area:subtitle]">Focus Time</p>
                <h3 className="text-lg text-text capitalize [grid-area:title]">{selectedTask.estimatedPomodoros}</h3>
              </div>
              <div className="grid gap-x-2 [grid-template-areas:'icon_subtitle'_'icon_title'] grid-cols-[0.3fr_1fr] grid-rows-[auto_1fr]">
                <div className="[grid-area:icon] p-2 mr-1 border border-border bg-surface-2 rounded-[50%] h-fit">
                  <ClipboardClock />
                </div>
                <p className="text-xs text-text-muted [grid-area:subtitle]">Due Date</p>
                <h3 className="text-lg text-text capitalize [grid-area:title]">{selectedTask.dueDate}</h3>
              </div>
            </div>
          </div>
        )}
        <div className="mt-6 flex justify-end gap-3">
          <Button onClick={onClose} variant='blank'>Close</Button>
          <Button variant='filled'>Edit</Button>
        </div>
      </div>
    </Modal>
  );
}
