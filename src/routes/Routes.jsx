import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChefRecipes from "../pages/ChefRecipes";
import ChefDetails from "../pages/ChefRecipes/ChefDetails";

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
    element: <ChefRecipes />,
    children: [
      {
        path: ":id",
        element: <ChefDetails />,
        loader: async ({params}) =>
          fetch(`http://localhost:3000/chef-recipes/${params.id}`),
      },
    ],
  },
]);
export default router;
