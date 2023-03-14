import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ReadBlog from "../pages/ReadBlog";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/read",
    element: <ReadBlog />,
  },
]);
