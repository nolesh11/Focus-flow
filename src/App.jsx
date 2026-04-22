import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";
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
