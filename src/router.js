import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import TodoItem from "./pages/Dynamic_route_sample/TodoItem";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: ":slug",
      element: <TodoItem />,
    },
  ]);