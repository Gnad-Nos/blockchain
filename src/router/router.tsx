import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import FindJobPage from "../pages/find-job-page/FindJobPage";
import DetailPage from "../pages/detail-page/DetailPage";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";
import Profile from "../pages/profile-page/Profile";
import History from "../pages/history-page/History";
import Setting from "../pages/setting/Setting";
import HistoryHire from "../pages/history-page/HistoryHire";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/find-job",
    element: <FindJobPage />,
  },

  {
    path: "/detail",
    element: <DetailPage />,
  },

  {
    path: "/login",
    element: <Login/>,
  },

  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/profile",
    element: <Profile/>,
  },

  {
    path: "/history",
    element: <History/>,
  },

  {
    path: "/setting",
    element: <Setting/>,
  },

  {
    path: "/historyhire",
    element: <HistoryHire/>,
  },
]);
