import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";

const webRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <Dashboard />,
  },
]);

export default function App() {
  return <RouterProvider router={webRouter} />;
}
