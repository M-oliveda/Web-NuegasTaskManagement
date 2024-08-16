import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { StrictMode } from "react";
import UserContextProvider from "./components/UserContextProvider";
import TasksPage from "./pages/taskspage";

const webRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/tasks",
    element: <TasksPage />,
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
      <UserContextProvider>
        <RouterProvider router={webRouter} />
      </UserContextProvider>
    </StrictMode>
  );
}
