import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "./components/sections/Nav";
import Footer from "./components/sections/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Reservations from "./components/pages/Reservations";
import OrderOnline from "./components/pages/OrderOnline";
import Login from "./components/pages/Login";
import Confirmation from "./components/pages/Confirmation";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "reservations",
        element: <Reservations />,
      },
      {
        path: "order-online",
        element: <OrderOnline />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
