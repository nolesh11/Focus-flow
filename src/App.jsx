import { Dashboard } from "./components/dashboard/Dashboard";
import { Header } from "./components/header/Header";
import { TasksList } from "./components/task/TasksList";
import { TaskContextProvider } from "./store/taskContextProvider";

function App() {
  return (
    <TaskContextProvider>
      <div className="bg-bg min-h-screen">
        <Header />
        <main className="px-12 mt-15">
          <Dashboard />
        </main>
      </div>
    </TaskContextProvider>
  );
}

export default App;
