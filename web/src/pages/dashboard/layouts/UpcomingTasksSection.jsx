import { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel";
import { getFutureTasks } from "../../../services/tasks";
import Task from "../../../components/Task";

export default function UpcomingTasksSection() {
  const [futureTasks, setFutureTasks] = useState(null);

  useEffect(() => {
    getFutureTasks().then((result) => setFutureTasks(result));
  }, []);

  return (
    <Carousel title={"Upcoming Tasks"}>
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
  );
}
