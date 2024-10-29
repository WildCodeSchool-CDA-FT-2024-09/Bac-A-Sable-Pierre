import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

import Detail from "./pages/Detail.tsx";
import App from "./App.tsx";
import "./index.css";
import client from "./services/connexion.ts";
import Home from "./pages/Home.tsx";
import Languages from "./pages/Languages.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/languages",
        element: <Languages />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
