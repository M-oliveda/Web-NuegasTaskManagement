import { useContext, useEffect, useState } from "react";
import TasksContextProvider from "../../components/TasksContextProvider";
import TaskSummary from "../../components/TaskSummary";
import UserSection from "../../layouts/UserSection";
import { UserContext } from "../../context/UserContext";
import Activity from "./components/Activity";
import MentorsSection from "./layouts/MentorsSection";
import UpcomingTasksSection from "./layouts/UpcomingTasksSection";
import TasksByDate from "./layouts/TasksByDate";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const [isUserInfoLoading, setIsUserInfoLoading] = useState(
    user ? false : true,
  );

  useEffect(() => {
    setIsUserInfoLoading(user ? false : true);
  }, [user]);

  return (
    <div className="xl:grid xl:grid-cols-4">
      <div className="col-end-4 xl:col-start-1 xl:p-8">
        <div className="xl:flex xl:items-center xl:justify-between">
          <div className="hidden xl:block">
            {isUserInfoLoading ? (
              <>
                <span className="mb-2 block h-[18] w-[30ch] animate-pulse rounded-[20px] bg-[#546FFF]"></span>
                <span className="block h-[18] w-[30ch] animate-pulse rounded-[20px] bg-[#546FFF]"></span>
              </>
            ) : (
              <>
                <p className="text-2xl font-semibold text-secondary">
                  Hi, {user.firstname} {user.lastname}
                </p>
                <p className="font-medium text-secondary-400">
                  Let's finish your task today!
                </p>
              </>
            )}
          </div>
          <UserSection />
        </div>
        <div className="mx-6 my-8 block xl:hidden">
          {isUserInfoLoading ? (
            <>
              <span className="mb-2 block h-[18] w-[30ch] animate-pulse rounded-[20px] bg-[#546FFF]"></span>
              <span className="block h-[18] w-[30ch] animate-pulse rounded-[20px] bg-[#546FFF]"></span>
            </>
          ) : (
            <>
              <p className="text-2xl font-semibold text-secondary">
                Hi, {user.firstname} {user.lastname}
              </p>
              <p className="text-sm font-medium text-secondary-400">
                Let's finish your task today!
              </p>
            </>
          )}
        </div>
        <div className="xl:my-12 xl:flex xl:gap-8">
          <TasksContextProvider>
            <TaskSummary />
          </TasksContextProvider>
          <Activity />
        </div>
        <MentorsSection />
        <UpcomingTasksSection />
      </div>
      <TasksByDate />
    </div>
  );
}
