import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Components
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";

// Context
import { ChangeColorProvider } from "./context/ChangeColorContext.jsx";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChangeColorProvider>
      <RouterProvider router={router} />
    </ChangeColorProvider>
  </React.StrictMode>
);
