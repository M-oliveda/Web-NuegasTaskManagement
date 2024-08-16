import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { StrictMode } from "react";
import UserContextProvider from "./components/UserContextProvider";

const webRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
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
