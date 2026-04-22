import { Settings } from "lucide-react";

export function Timer() {
  return (
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
  );
}
