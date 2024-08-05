import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/TasksContext";
import CircularProgress from "./CircularProgress";

export default function TaskSummary() {
  const { tasksSummary } = useContext(TasksContext);
  const [isTaskLoading, setisTaskLoading] = useState(
    tasksSummary ? false : true,
  );

  useEffect(() => {
    setisTaskLoading(tasksSummary ? false : true);
  }, [tasksSummary]);

  return (
    <div className="mx-6 flex items-center justify-between rounded-[10px] bg-secondary p-5 xl:inline-block xl:flex-col xl:items-start xl:justify-start">
      {isTaskLoading ? (
        <div>
          <span className="mb-2 block h-[18px] w-[25ch] animate-pulse rounded-[20px] bg-white" />
          <span className="block h-[18px] w-[25ch] animate-pulse rounded-[20px] bg-white" />
        </div>
      ) : (
        <div>
          <p className="mb-5 font-semibold text-white">Running Tasks</p>
          <p className="text-[32px] font-semibold text-white">
            {tasksSummary.pendingTasks}
          </p>
        </div>
      )}
      <div className="flex items-center gap-5">
        {isTaskLoading ? (
          <>
            <CircularProgress percentage={0} />
            <div>
              <span className="mb-2 block h-[18px] w-[5ch] animate-pulse rounded-[20px] bg-white" />
              <span className="block h-[18px] w-[5ch] animate-pulse rounded-[20px] bg-white" />
            </div>
          </>
        ) : (
          <>
            <CircularProgress
              percentage={(
                tasksSummary.completedTasks / tasksSummary.totalTasks
              ).toFixed(0)}
            >
              <span className="text-lg text-white">
                {(
                  tasksSummary.completedTasks / tasksSummary.totalTasks
                ).toFixed(0)}
                %
              </span>
            </CircularProgress>
            <div>
              <p className="mb-1 text-xl text-white">
                {tasksSummary.totalTasks}
              </p>
              <p className="text-sm text-secondary-300">Task</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
