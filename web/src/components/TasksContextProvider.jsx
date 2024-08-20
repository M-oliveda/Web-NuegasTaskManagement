import { useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import getTotalTasks from "../services/tasks";

export default function TasksContextProvider({ children }) {
  const [tasksSummary, setTasksSummary] = useState(null);

  useEffect(() => {
    getTotalTasks().then((result) => setTasksSummary(result));
  }, []);

  return (
    <TasksContext.Provider value={{ tasksSummary }}>
      {children}
    </TasksContext.Provider>
  );
}
