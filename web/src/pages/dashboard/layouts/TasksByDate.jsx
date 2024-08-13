import { createContext, useState } from "react";
import TaskCalendar from "../components/TaskCalendar";

export const TasksByDateContext = createContext(null);

export default function TasksByDate() {
  const [selectedTask, setSelectedTask] = useState(null);
  return (
    <TasksByDateContext.Provider value={{ selectedTask, setSelectedTask }}>
      <div className="bg-[#F5F5F7] p-6">
        <TaskCalendar />
      </div>
    </TasksByDateContext.Provider>
  );
}
