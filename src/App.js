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
import FooterSection from "./components/FooterSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Roadmap from "./components/Roadmap";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      delay: 100,
    });
  }, []);
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
      <Roadmap/>
      <Team />
      <div className="faq_bg ">
        <FaqSection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
