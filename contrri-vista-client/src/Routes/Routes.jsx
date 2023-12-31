import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProjectShowcase from "../Pages/ProjectShowcase/ProjectShowcase";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ProfilePage from "../Pages/Profile/Profile";
import CreateProject from "../Pages/CreateProject/CreateProject";
import NasaProjects from "../Pages/NasaProjects/NasaProjects";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import Participants from "../Pages/Participants/Participants";
import ChatBox from "../Pages/ChatBox/ChatBox";

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
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/participate",
        element: <ProjectShowcase />,
      },
      {
        path: "/nasaprojects",
        element: <NasaProjects />,
      },
      {
        path: "/createproject",
        element: <CreateProject />,
      },
      {
        path: "/projectdetails",
        element: <ProjectDetails />,
      },
      {
        path: "/participants",
        element: <Participants />,
      },
      {
        path: "/chat",
        element: <ChatBox />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
