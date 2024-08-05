import { default as tasksDB } from "../data/tasks.json";

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
