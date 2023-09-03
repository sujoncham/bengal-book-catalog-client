import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import Products from "../pages/Products";
import Register from "../pages/Register";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
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
    path: "/page404",
    element: <Page404 />,
  },
]);

export default routes;
