import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
export default router;
