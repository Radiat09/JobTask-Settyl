import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Whiteboard from "./Components/Whiteboard/Whiteboard";
import Layout from "./Layout/Layout";

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
        path: "/board",
        element: <Whiteboard />,
      },
    ],
  },
]);

export default router;
