import { default as tasksDB } from "../data/tasks.json";
import { default as tasksAnalytics } from "../data/tasksAnalytics.json";
import { timeLeft } from "../utils";

export default async function getTotalTasks() {
  const totalTasks = tasksDB.length;
  const completedTasks = tasksDB.reduce((accumulator, task) => {
    if (task.progress == 100) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);
  const pendingTasks = tasksDB.reduce((accumulator, task) => {
    if (task.progress < 100) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);

  return {
    totalTasks,
    completedTasks,
    pendingTasks,
  };
}

export async function getTasksByDate() {
  return tasksAnalytics.map((task) => {
    const days = ["U", "M", "T", "W", "T", "F", "S"];
    const date = new Date(task.completedDate);
    const day = days[date.getDay()];
    const { completedTasks } = task;

    return { day, completedTasks };
  }, []);
}

export async function getFutureTasks() {
  return tasksDB.filter((task) => {
    const limitDate = new Date(task.timeLimit);
    return limitDate > Date.now();
  });
}
