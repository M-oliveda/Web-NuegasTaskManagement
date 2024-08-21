import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { StrictMode } from "react";
import UserContextProvider from "./components/UserContextProvider";
import TasksPage from "./pages/taskspage";
import DetailTaskPage from "./pages/taskspage/pages/detailstask";
import MentorsPage from "./pages/mentors";
import SettingsPage from "./pages/settingspage";
import GlobalContextProvider from "./components/GlobalContextProvider";

const webRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/tasks",
    element: <TasksPage />,
    children: [
      {
        path: "detailtask/:title",
        element: <DetailTaskPage />,
      },
    ],
  },
  {
    path: "/mentors",
    element: <MentorsPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "*",
    element: <Dashboard />,
    loader: async () => redirect("/"),
  },
]);

export default function App() {
  return (
    <StrictMode>
      <GlobalContextProvider>
        <UserContextProvider>
          <RouterProvider router={webRouter} />
        </UserContextProvider>
      </GlobalContextProvider>
    </StrictMode>
  );
}
