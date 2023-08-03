import BottomNavigation from "../NavBar/BottomNavigation";
import MiddleNavigation from "../NavBar/MiddleNavigation";
import TopNavigation from "../NavBar/TopNavigation";
import Popular from "../Popular/Popular";
import HeaderSlider from "../Sliders/HeaderSlider";
import "./Home.css";
const Home = () => {
  return (
    <div className="relative ">
      <TopNavigation />
      <HeaderSlider />
      <MiddleNavigation />
      <Popular />
      <div className="fixed bottom-0 lg:min-w-[1240px] w-full mx-auto">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Home;
