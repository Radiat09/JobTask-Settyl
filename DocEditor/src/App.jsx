import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Whiteboard from "./Components/Whiteboard/Whiteboard";
import Layout from "./Layout/Layout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Utilities/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />,
          </PrivateRoute>
        ),
      },
      {
        path: "/board/:roomID",
        element: (
          <PrivateRoute>
            <Whiteboard />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
