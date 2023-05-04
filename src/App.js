import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AboutSection from "./components/AboutSection";
import Mynav from "./components/Mynav";
import HeroSection from "./components/HeroSection";
import Story from "./components/Story";
import Team from "./components/Team";
import WatchSection from "./components/WatchSection";
import SliderSection from "./components/SliderSection";
import FaqSection from "./components/FaqSection";
import Roadmap from "./components/Roadmap";

function App() {
  
  return (
    <>
      <div className="header_bg vh_100_xl d-flex flex-column">
        <Mynav />
        <HeroSection />
      </div>
      <Story />
      <AboutSection />
      <WatchSection />
      <SliderSection />
      <Team />
      <FaqSection />
      <Roadmap/>
    </>
  );
}

export default App;
