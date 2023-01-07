import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Documentation from "../pages/documentation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/documentation",
    element: <Documentation />,
    children: [
      {
        path: "contact",
        element: <Documentation />,
      },
    ],
  },
]);
