import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChefRecipes from "../pages/ChefRecipes";
import ChefDetails from "../pages/ChefRecipes/ChefDetails";
import PrivateRoute from "./PrivateRoute";

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
  {
    path: "/chef-recipes",
    element: (
      <PrivateRoute>
        <ChefRecipes />
      </PrivateRoute>
    ),
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefDetails />
          </PrivateRoute>
        ),
        loader: async ({params}) =>
          fetch(
            `https://recipe-master-assignment.vercel.app/chef-recipes/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
