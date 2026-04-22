export function Sessions() {
  return (
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
  );
}
