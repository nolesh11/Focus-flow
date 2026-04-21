export function Dashboard() {
  return (
    <section className="px-12">
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
  );
}
