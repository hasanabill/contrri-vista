import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProjectShowcase from "../Pages/ProjectShowcase/ProjectShowcase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/participate",
        element: <ProjectShowcase />,
      },
    ],
  },
]);
