import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Product from "./routes/Product.jsx";
import Info from "./routes/Info.jsx";
import Search from "./routes/Search.jsx";

import "./index.css";

import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products/:id",
        element: <Product />,
      },
      {
        path: "products/:id/info",
        element: <Info />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "teste",
        element: <Navigate to="/" />,
      },
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
