import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import ContexApi from "./ContextApi/ContexApi.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContexApi>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </ContexApi>
  </React.StrictMode>
);
