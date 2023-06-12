import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Notes from "../pages/Notes/Notes";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import Search from "../pages/Search/Search";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading/Loading";

// Lazy-loaded components
const Importants = lazy(() => import("../pages/Importants/Importants"));
const Deletes = lazy(() => import("../pages/Deletes/Deletes"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Notes />,
      },
      {
        path: "/importants",
        element: (
          <Suspense
            fallback={
              <div className="loading-container">
                <Loading />
              </div>
            }
          >
            <Importants />
          </Suspense>
        ),
      },
      {
        path: "/deletes",
        element: (
          <Suspense
            fallback={
              <div className="loading-container">
                <Loading />
              </div>
            }
          >
            <Deletes />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default routes;
