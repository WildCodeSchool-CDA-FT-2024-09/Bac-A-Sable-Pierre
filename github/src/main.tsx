import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Detail from "./pages/Detail.tsx";
import App from "./App.tsx";
import "./index.css";

import connexion from "./services/connexion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
    loader: async ({ params }) => {
      const repos = await connexion.get(`/repos/${params.id}`);
      console.log("Loader", repos);
      return repos.data;
    },
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
