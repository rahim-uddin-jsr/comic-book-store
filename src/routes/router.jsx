import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Popular from "../Components/Popular/Popular";
import PopularCard from "../Components/Popular/PopularCard";
import HeaderSlider from "../Components/Sliders/HeaderSlider";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "card", element: <PopularCard /> },
  { path: "slider", element: <HeaderSlider /> },
  { path: "popular", element: <Popular /> },
]);
export default router;
