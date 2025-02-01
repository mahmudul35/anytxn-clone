import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Service from "../pages/Services/Service";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Service />,
  },
]);
export default router;
