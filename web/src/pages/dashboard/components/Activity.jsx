import { useEffect, useState } from "react";
import { getTasksByDate } from "../../../services/tasks";
import ActivityChart from "./ActivityChart";

export default function Activity() {
  const [tasksAnalytics, setTasksAnalytics] = useState(null);
  const [isTaskLoading, setisTaskLoading] = useState(
    tasksAnalytics ? false : true,
  );

  useEffect(() => {
    setisTaskLoading(tasksAnalytics ? false : true);
  }, [tasksAnalytics]);

  useEffect(() => {
    getTasksByDate().then((result) => setTasksAnalytics(result));
  });
  return (
    <div className="mx-6 my-8 max-w-[600px] rounded-[10] bg-[#F5F5F7] p-5">
      <div>
        {isTaskLoading ? (
          <>
            <span className="mb-2 block h-[18px] w-[25ch] animate-pulse rounded-[20px] bg-primary-300" />
            <span className="mb-2 block h-[18px] w-[25ch] animate-pulse rounded-[20px] bg-primary-300" />
          </>
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between">
              <p className="font-semibold text-secondary">Activity</p>
              <select
                className="bg-transparent font-semibold text-secondary"
                disabled
                defaultValue={"This Week"}
              >
                <option value={"this-week"}>This Week</option>
                <option value={"this-month"}>This Month</option>
                <option value={"this-year"}>This Year</option>
              </select>
            </div>
            <ActivityChart />
          </>
        )}
      </div>
    </div>
  );
}
