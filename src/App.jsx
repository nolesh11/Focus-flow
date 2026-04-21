import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Header />
      <main>
        <Dashboard />
        <div className="px-12 mt-15">
          <TasksList />
        </div>
      </main>
    </div>
  );
}

export default App;
