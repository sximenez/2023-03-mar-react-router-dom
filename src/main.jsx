import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";

import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

import Contact, {
  loader as conctactLoader,
  action as contactAction,
} from "./routes/contact";

import EditContact, { action as editAction } from "./routes/edit";

import { action as destroyAction } from "./routes/destroy";

import Index from "./routes/index";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/2023-03-mar-react-router-dom",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: conctactLoader,
            action: contactAction,
          },
          {
            path: "/contacts/:contactId/edit",
            element: <EditContact />,
            loader: conctactLoader,
            action: editAction,
          },
          {
            path: "/contacts/:contactId/destroy",
            action: destroyAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
