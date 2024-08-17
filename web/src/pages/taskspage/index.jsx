import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import Header from "./layouts/Header";
import Task from "../../components/Task";
import {
  getFutureTasks,
  getTasksByName,
  getTasksWithFilters,
} from "../../services/tasks";
import { debounce } from "../../utils";

export default function TasksPage() {
  const [tasks, setTasks] = useState(null);
  const [futureTasks, setFutureTasks] = useState(null);
  const [searchTaskValue, setSearchTaskValue] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState(null);

  useEffect(() => {
    if (!searchTaskValue) {
      getTasksWithFilters(new Date().getFullYear(), "March").then((result) =>
        setTasks(
          Object.keys(result.months[0].tasksByWeek).reduce(
            (accumulator, key) =>
              accumulator.concat(result.months[0].tasksByWeek[key]),
            [],
          ),
        ),
      );
    }
  }, [searchTaskValue]);

  useEffect(() => {
    if (!searchTaskValue) {
      getFutureTasks().then((result) => setFutureTasks(result));
    }
  }, [searchTaskValue]);

  useEffect(() => {
    if (searchTaskValue) {
      debounce(async (value) => {
        const result = await getTasksByName(value);
        setTasks(result);
      }, 400)(searchTaskValue);
    }
  }, [searchTaskValue]);

  return (
    <>
      <Header searchTaskValueMethod={setSearchTaskValue} />
      <div className="bg-gray-100 p-6 xl:p-8">
        {!searchTaskValue ? (
          <>
            <Carousel title="Time Limit">
              {tasks &&
                tasks.map((task) => (
                  <Task
                    key={task.title}
                    title={task.title}
                    category={task.category}
                    createdAt={task.createdAt}
                    timeLimit={task.timeLimit}
                    steps={task.steps}
                    peopleAssigned={task.peopleAssigned}
                    assets={task.assets}
                  />
                ))}
            </Carousel>
            <Carousel title="New Tasks">
              {futureTasks &&
                futureTasks.map((task) => (
                  <Task
                    key={task.title}
                    title={task.title}
                    category={task.category}
                    createdAt={task.createdAt}
                    timeLimit={task.timeLimit}
                    steps={task.steps}
                    peopleAssigned={task.peopleAssigned}
                    assets={task.assets}
                  />
                ))}
            </Carousel>
          </>
        ) : (
          <div className="flex flex-wrap gap-6">
            {tasks &&
              tasks.map((task) => (
                <Task
                  key={task.title}
                  title={task.title}
                  category={task.category}
                  createdAt={task.createdAt}
                  timeLimit={task.timeLimit}
                  steps={task.steps}
                  peopleAssigned={task.peopleAssigned}
                  assets={task.assets}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
}
