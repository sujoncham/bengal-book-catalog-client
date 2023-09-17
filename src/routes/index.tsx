import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBook from "../components/AddBook";
import BookDetail from "../components/BookDetail";
import FullContent from "../components/FullContent";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import Products from "../pages/Products";
import Register from "../pages/Register";
import WishList from "../pages/WishList";
import PrivateRoute from "./PrivateRoute";
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
      {
        path: "/bookDetail/:id",
        element: (
          <PrivateRoute>
            <BookDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/fullContent",
        element: <FullContent />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
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
