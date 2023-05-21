import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Notes from "../pages/Notes/Notes";
import Importants from "../pages/Importants/Importants";
import Deletes from "../pages/Deletes/Deletes";
import SignIn from "../pages/SignIn/SignIn";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Notes />,
      },
      {
        path: "/importants",
        element: <Importants />,
      },
      {
        path: "/deletes",
        element: <Deletes />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default routes;
