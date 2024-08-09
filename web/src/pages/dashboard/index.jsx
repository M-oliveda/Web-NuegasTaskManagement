import { useContext, useEffect, useState } from "react";
import TasksContextProvider from "../../components/TasksContextProvider";
import TaskSummary from "../../components/TaskSummary";
import Header from "../../layouts/Header";
import { UserContext } from "../../context/UserContext";
import Activity from "./components/Activity";
import MentorsSection from "./layouts/MentorsSection";
import UpcomingTasksSection from "./layouts/UpcomingTasksSection";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const [isUserInfoLoading, setIsUserInfoLoading] = useState(
    user ? false : true,
  );

  useEffect(() => {
    setIsUserInfoLoading(user ? false : true);
  }, [user]);

  return (
    <>
      <Header />
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
      <TasksContextProvider>
        <TaskSummary />
      </TasksContextProvider>
      <Activity />
      <MentorsSection />
      <UpcomingTasksSection />
    </>
  );
}
