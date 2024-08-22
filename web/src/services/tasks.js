import { default as tasksDB } from "../data/tasks.json";
import { default as tasksAnalytics } from "../data/tasksAnalytics.json";
import { months, timeLeft, weekdays } from "../utils";

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

export async function getTasks(limit = null) {
  return tasksDB.reduce((accumulator, currentTask) => {
    const date = new Date(currentTask.createdAt);
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const weekday = weekdays[date.getDay()];

    if (!accumulator.find((taskByYear) => taskByYear.year === year)) {
      return accumulator.concat({
        year,
        months: [
          {
            name: month,
            tasksByWeek: {
              [weekday]: [currentTask],
            },
          },
        ],
      });
    } else {
      const yearIndex = accumulator.findIndex(
        (taskByYear) => taskByYear.year == year,
      );
      if (
        !accumulator[yearIndex].months.find(
          (tasksByMonth) => tasksByMonth.name == month,
        )
      ) {
        const yearIndex = accumulator.findIndex(
          (taskByYear) => taskByYear.year == year,
        );
        accumulator[yearIndex].months.push({
          name: month,
          tasksByWeek: {
            [weekday]: [currentTask],
          },
        });
      } else {
        const monthIndex = accumulator[yearIndex].months.findIndex(
          (tasksByMonth) => tasksByMonth.name == month,
        );
        if (
          !accumulator[yearIndex].months[monthIndex].tasksByWeek.hasOwnProperty(
            weekday,
          )
        ) {
          accumulator[yearIndex].months[monthIndex].tasksByWeek[weekday] = [
            currentTask,
          ];
        } else {
          accumulator[yearIndex].months[monthIndex].tasksByWeek[weekday].push(
            currentTask,
          );
        }
      }
    }

    return accumulator;
  }, []);
}

export async function getTasksWithFilters(
  filterYear = null,
  filterMonth = null,
) {
  const tasks = await getTasks();
  let filteredTaks = null;

  if (filterYear) {
    filteredTaks = tasks.filter(
      (tasksByYear) => tasksByYear.year == filterYear,
    )[0];

    if (filterMonth) {
      filteredTaks.months = filteredTaks.months.filter(
        (tasksByMonth) => tasksByMonth.name == filterMonth,
      );
    }
  }

  if (filteredTaks) {
    return filteredTaks;
  } else {
    return false;
  }
}

export async function getTasksByName(taskName) {
  const result = await getTasks();

  const tasksFlat = result[0].months.reduce(
    (accumulator, month) =>
      accumulator.concat(
        Object.keys(month.tasksByWeek)
          .map((key) => month.tasksByWeek[key])
          .reduce(
            (accumulator, currentValue) => accumulator.concat(currentValue),
            [],
          ),
      ),
    [],
  );

  return tasksFlat.filter(
    (task) => task.title.toLowerCase().indexOf(taskName.toLowerCase()) != -1,
  );
}
