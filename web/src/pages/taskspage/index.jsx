import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import TopBar from "../../layouts/TopBar";
import Task from "../../components/Task";
import {
  getFutureTasks,
  getTasksByName,
  getTasksWithFilters,
} from "../../services/tasks";
import { debounce } from "../../utils";
import { Outlet, useParams } from "react-router-dom";
import Menu from "../../components/Menu";

export default function TasksPage() {
  const [tasks, setTasks] = useState(null);
  const [futureTasks, setFutureTasks] = useState(null);
  const [searchTaskValue, setSearchTaskValue] = useState(null);
  const { title } = useParams();

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

  if (!title) {
    return (
      <div className="xl:grid-cols-main xl:grid">
        <Menu />
        <div className="xl:col-span-3 xl:col-start-2">
          <TopBar
            searchTaskValueMethod={setSearchTaskValue}
            title="Explore Tasks"
          />
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
                        toURL={`detailtask/${encodeURIComponent(task.title)}`}
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
                        toURL={`detailtask/${encodeURIComponent(task.title)}`}
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
            <Outlet />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="xl:grid-cols-main xl:grid">
        <Menu />
        <div className="xl:col-span-3 xl:col-start-2">
          <TopBar
            searchTaskValueMethod={setSearchTaskValue}
            title="Detail Task"
          />
          <div className="bg-gray-100 p-6 xl:p-8">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}
