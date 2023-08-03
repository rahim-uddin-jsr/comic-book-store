import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "app", element: <App /> },
]);
export default router;
