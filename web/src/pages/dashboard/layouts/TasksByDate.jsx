import { createContext, useEffect, useState } from "react";
import TaskCalendar from "../components/TaskCalendar";
import Task from "../../../components/Task";
import { getRandomNumber } from "../../../utils";

export const TasksByDateContext = createContext(null);

export default function TasksByDate() {
  const [tasksToDisplay, setTasksToDisplay] = useState(null);
  const [randomTask, setRandomTask] = useState(null);

  useEffect(() => {
    if (tasksToDisplay) {
      const randomIndex = getRandomNumber(0, tasksToDisplay.tasks.length);
      setRandomTask(tasksToDisplay.tasks[randomIndex]);
    }
  }, [tasksToDisplay]);

  return (
    <TasksByDateContext.Provider value={{ tasksToDisplay, setTasksToDisplay }}>
      <div
        className={`bg-[#F5F5F7] p-6 ${tasksToDisplay && randomTask && `space-y-8`}`}
      >
        <TaskCalendar />
        {tasksToDisplay && randomTask && (
          <Task
            assets={randomTask.assets}
            title={randomTask.title}
            category={randomTask.category}
            timeLimit={randomTask.timeLimit}
            peopleAssigned={randomTask.peopleAssigned}
            steps={randomTask.steps}
            detailTask={true}
          />
        )}
      </div>
    </TasksByDateContext.Provider>
  );
}
