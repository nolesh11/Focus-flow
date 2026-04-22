import { Timer } from "./Timer";
import { Sessions } from "./Sessions";
import { TasksList } from "./TasksList";

export function Dashboard() {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-text text-2xl mb-4">Dashboard</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-8 bg-surface rounded-xl shadow-md">
            <p>Amount of tasks</p>
          </div>
          <div className="p-8 bg-surface rounded-xl shadow-md">
            <p>Completed tasks</p>
          </div>
          <div className="p-8 bg-surface rounded-xl shadow-md">
            <p>Completed sessions</p>
          </div>
          <div className="p-8 bg-surface rounded-xl shadow-md">
            <p>Total focus time</p>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-xl mb-4">Today's tasks</h3>
        <div className="grid grid-cols-3 gap-4">
          <TasksList />
          <Timer />
          <Sessions />
        </div>
      </section>
    </>
  );
}
